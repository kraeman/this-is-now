class ValuesController < ApplicationController

    def index
        render json: ValueSerializer.new(Value.all).serializable_hash
    end

    def create
        value = Value.new()
        value.name, value.creator_id = [value_params["name"], value_params["creator_id"]]
        if value.save 
            render json: value, only: [:name, :id, :creator_id]
        end
    end

    def destroy
        value = Value.find(params[:id].to_i)
        value.destroy
        render json: params[:id].to_i
    end
    
    private
        def value_params
            params.require(:value).permit(:name, :creator_id)
        end
end
