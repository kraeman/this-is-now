class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login]

    def login
        current_user = User.find_by(username: user_params[:username])
        if current_user && current_user.authenticate(user_params[:password])
            render json: { user: UserSerializer.new(current_user) }, status: :accepted
        else
            render json: {error: "Incorrect password or username!"}
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
          token = encode_token(user_id: user.id)
          render json: { user: UserSerializer.new(user), jwt: token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
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
