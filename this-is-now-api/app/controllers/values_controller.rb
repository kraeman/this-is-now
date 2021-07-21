class ValuesController < ApplicationController

    def index
        values = Value.all
        render json: ValueSerializer.new(values)
    end

    def create
        value = Value.new()
        value.name = value_params["name"]
        if value.save 
          render json: ValueSerializer.new(value)
        end
    end


      def update
            value = Value.find(value_params[:id])
            value.update(value_params)
            render json ValueSerializer.new(value)
      end

    def destroy
        value = Value.find(value_params[:id])
        value.destroy
    end
    
    private
        def value_params
            params.require(:value).permit(:name, :id)
        end
end
