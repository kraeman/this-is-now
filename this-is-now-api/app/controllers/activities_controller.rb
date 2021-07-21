class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: ActivitySerializer.new(activities)
    end

    def create
        activity = Activity.new()
        activity.name = activity_params["name"]
        activity.description = activity_params["description"]
        if activity.save 
          render json: ActivitySerializer.new(activity)
        end
    end


      def update
            activity = Activity.find(activity_params[:id])
            activity.update(activity_params)
            render json ActivitySerializer.new(activity)
      end

    def destroy
        activity = Activity.find(activity_params[:id])
        activity.destroy
    end
    
    private
        def activity_params
            params.require(:activity).permit(:name, :description, :id)
        end
end
