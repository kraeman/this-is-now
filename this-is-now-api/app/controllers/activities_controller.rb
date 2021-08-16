class ActivitiesController < ApplicationController
    
    def index
        activities = Activity.all
        values = Value.all
        scores = ValueActivity.all
        render json: [ValueActivitiesSerializer.new(scores).serializable_hash, ValueSerializer.new(values).serializable_hash, ActivitySerializer.new(activities).serializable_hash]
    end

    #I created a scores action in activities as opposed to creating an entire scores controller kust for this one action.
    def scores
        scores = ValueActivity.all
        render json: ValueActivitiesSerializer.new(scores).serializable_hash
    end

    def create
        activity = Activity.new()
        activity.name, activity.description = [activity_params["name"], activity_params["description"]]
        id = JWT.decode(activity_params["jwt"], ENV['JWT_SECRET'], true, algorithm: 'HS256')
        #used decoded webtoken to get current users id for creator id instead of just sending the creator id along in the fetch request at a time when I thought I would do this across the app for security purposes.
        activity.creator_id = id[0]["user_id"]
        if activity.save 
            activity_params["valuesAndScoresArray"].each do |valueObject| 
                va = ValueActivity.new(value_id: valueObject["id"], activity_id: activity.id, score: valueObject["score"])
                va.save
            end
            scores = ValueActivity.where(activity_id: activity.id)
            render json: { activity: ActivitySerializer.new(activity).serializable_hash, scores: ValueActivitiesSerializer.new(scores).serializable_hash  }
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
            params.require(:activity).permit(:name, :description, :jwt, valuesAndScoresArray: [:id, :score] )
        end
end