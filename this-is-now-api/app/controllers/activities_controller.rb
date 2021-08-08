class ActivitiesController < ApplicationController
    # require 'json'

    def index
        activities = Activity.all
        values = Value.all
        scores = ValueActivity.all
        # byebug
        render json: [ValueActivitiesSerializer.new(scores).serializable_hash, ValueSerializer.new(values).serializable_hash, ActivitySerializer.new(activities).serializable_hash]
        # render {scores: scores, values: values, activities: activities}.to_
        # render json: value, only: [:name, :id, :creator_id]
        # render json: {{activities: activities, only: [:name, :description, :id, :creator_id]}, {values: values, only: [:name, :id, :creator_id]}, {scores: scores, only: [:score, :value_id, :activity_id]}}
    end

    def scores
        scores = ValueActivity.all
        render json: ValueActivitiesSerializer.new(scores).serializable_hash
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
                # byebug
                # value = Value.find_by(id: valueObject["id"])
                va = ValueActivity.new(value_id: valueObject["id"], activity_id: activity.id, score: activity_params["valuesAndScoresArray"][0]["score"])
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
