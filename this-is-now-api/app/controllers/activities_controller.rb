class ActivitiesController < ApplicationController
    
    def index
        activities = Activity.all
        values = Value.all
        scores = ValueActivity.all
        render json: [ValueActivitiesSerializer.new(scores).serializable_hash, ValueSerializer.new(values).serializable_hash, ActivitySerializer.new(activities).serializable_hash]
    end

    def scores
        scores = ValueActivity.all
        render json: ValueActivitiesSerializer.new(scores).serializable_hash
    end

    def create
        activity = Activity.new()
        activity.name = activity_params["name"]
        activity.description = activity_params["description"]
        id = JWT.decode(activity_params["jwt"], ENV['JWT_SECRET'], true, algorithm: 'HS256')
        activity.creator_id = id[0]["user_id"]
        if activity.save 
            activity_params["valuesAndScoresArray"].each do |valueObject| 
                va = ValueActivity.new(value_id: valueObject["id"], activity_id: activity.id, score: valueObject["score"])
                va.save
            end
            scores = ValueActivity.all
            render json: { activity: ActivitySerializer.new(activity).serializable_hash, scores: ValueActivitiesSerializer.new(scores).serializable_hash  }, status: :created
        end
    end

    def destroy
        activity = Activity.find(params[:id])
        if activity.destroy
            render json: params[:id].to_i
        end
    end
    
    private
        def activity_params
            params.require(:activity).permit(:name, :description, :jwt, :id, valuesAndScoresArray: [:id, :name, :score] )
        end
end