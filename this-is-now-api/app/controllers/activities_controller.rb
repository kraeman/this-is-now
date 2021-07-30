class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: ActivitySerializer.new(activities)
    end

    def create
        # byebug
        activity = Activity.new()
        activity.name = activity_params["name"]
        activity.description = activity_params["description"]
        id = JWT.decode(activity_params["jwt"], ENV['JWT_SECRET'], true, algorithm: 'HS256')
        # byebug
        activity.creator_id = id[0]["user_id"]
        byebug
        if activity.save 
          render json: ActivitySerializer.new(activity)
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
