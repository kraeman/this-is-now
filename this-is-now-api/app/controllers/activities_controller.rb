class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: ActivitySerializer.new(activities)
    end

    def create
        activity = Activity.new()
        activity.name = activity_params["name"]
        activity.description = activity_params["description"]
        activity.creator_id = activity_params["creator_id"]
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
            params.require(:activity).permit(:name, :description, :creator_id, :id)
        end
end
