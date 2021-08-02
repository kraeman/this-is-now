class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: { user: ActivitySerializer.new(activities).serializable_hash }
    end

    def scores
        scores = ValueActivity.all
        render json: {scores: ValueActivitiesSerializer.new(scores).serializable_hash }
    end

    def create
        # byebug
        activity = Activity.new()
        activity.name = activity_params["name"]
        activity.description = activity_params["description"]
        # id = JWT.decode(activity_params["jwt"], ENV['JWT_SECRET'], true, algorithm: 'HS256')
        # byebug
        id = JWT.decode(activity_params["jwt"], ENV['JWT_SECRET'], true, algorithm: 'HS256')
        activity.creator_id = id[0]["user_id"]
        if activity.save 
            activity_params["valuesAndScoresArray"].each do |valueObject| 
                value = Value.find_by(name: valueObject["name"])
                va = ValueActivity.new(value_id: value.id, activity_id: activity.id, score: activity_params["valuesAndScoresArray"][0]["score"])
                va.save
                # byebug
            end
            scores = ValueActivity.all
            # render json: ActivitySerializer.new(activity)
            render json: { activity: ActivitySerializer.new(activity).serializable_hash, scores: ValueActivitiesSerializer.new(scores).serializable_hash  }, status: :created
        end
    end


      def update
        #Check to see if user is owner of activity here?
            activity = Activity.find(activity_params[:id])
            activity.update(activity_params)
            render json ActivitySerializer.new(activity)
      end

    def destroy
        #Cascade to other tables where this activity exists!
        activity = Activity.find(activity_params[:id])
        activity.destroy
    end
    
    private
        def activity_params
            params.require(:activity).permit(:name, :description, :jwt, :id, valuesAndScoresArray: [:id, :name, :score] )
        end
end
