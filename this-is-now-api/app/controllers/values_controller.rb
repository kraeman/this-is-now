class ValuesController < ApplicationController

    # byebug
    def index
        # render json: Value.all, only: [:name, :id, :creator_id]
        render json: ValueSerializer.new(Value.all).serializable_hash
    end

    def create
        # byebug
        value = Value.new()
        value.name = value_params["name"]
        value.creator_id = value_params["creator_id"]
        if value.save 
            render json: value, only: [:name, :id, :creator_id]
        end
    end


    def update
    #Check to see if user is owner of value here?
        value = Value.find(value_params[:id])
        value.update(value_params)
        render json: ValueSerializer.new(value)
    end

    def destroy
        # byebug
        #Cascade to other tables where this value exists!
        value = Value.find(params[:id].to_i)
        value.destroy
        render json: params[:id].to_i
    end
    
    private
        def value_params
            params.require(:value).permit(:name, :id, :creator_id)
        end
end
