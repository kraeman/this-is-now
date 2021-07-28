class ValuesController < ApplicationController

    def index
        values = Value.all
        render json: ValueSerializer.new(values)
    end

    def create
        byebug
        value = Value.new()
        value.name = value_params["name"]
        value.creator_id = value_params["creator_id"]
        if value.save 
          render json: ValueSerializer.new(value)
        end
    end


      def update
        #Check to see if user is owner of value here?
            value = Value.find(value_params[:id])
            value.update(value_params)
            render json ValueSerializer.new(value)
      end

    def destroy
        #Cascade to other tables where this value exists!
        value = Value.find(value_params[:id])
        value.destroy
    end
    
    private
        def value_params
            params.require(:value).permit(:name, :id, :creator_id)
        end
end
