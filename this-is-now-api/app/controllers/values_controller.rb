class ValuesController < ApplicationController

    def index
        render json: ValueSerializer.new(Value.all).serializable_hash
    end

    def create
        value = Value.new()
        value.name = value_params["name"]
        value.creator_id = value_params["creator_id"]
        if value.save 
            render json: value, only: [:name, :id, :creator_id]
        end
    end

    def update
        value = Value.find(value_params[:id])
        value.update(value_params)
        render json: ValueSerializer.new(value)
    end

    def destroy
        value = Value.find(params[:id].to_i)
        value.destroy
        render json: params[:id].to_i
    end
    
    private
        def value_params
            params.require(:value).permit(:name, :id, :creator_id)
        end
end
