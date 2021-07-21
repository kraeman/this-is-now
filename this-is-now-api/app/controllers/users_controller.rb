class UsersController < ApplicationController

    def create
        user = User.new()
        user.username = user_params["username"]
        user.password = user_params["password"]
        if user.save 
          render json: UserSerializer.new(user)
        end
    end

    def update
        user = User.find(user_params[:id])
        user.update(user_params)
        render json UserSerializer.new(user)
    end

    
    private
        def user_params
            params.require(:user).permit(:username, :password, :id)
        end

end
