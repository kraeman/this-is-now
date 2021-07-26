class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    # def profile
    #     render json: { user: UserSerializer.new(current_user) }, status: :accepted
    # end

    def create
        if user_params[:password] == user_params[:checkPassword]
            # byebug
            current_user = User.create(username: user_params[:username], password: user_params[:password])
            if current_user.valid?
                token = encode_token(user_id: current_user.id)
                render json: { user: UserSerializer.new(current_user).serializable_hash.to_json, jwt: token }, status: :created
            else
                render json: { error: 'failed to create user' }, status: :not_acceptable
            end
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    # def create
    #     user = User.create(user_params)
    #     if user.valid?
    #       token = encode_token(user_id: user.id)
    #       render json: { user: UserSerializer.new(user), jwt: token }, status: :created
    #     else
    #       render json: { error: 'failed to create user' }, status: :not_acceptable
    #     end
    # end


    def update
        user = User.find(user_params[:id])
        user.update(user_params)
        render json UserSerializer.new(user)
    end

    
    private
        def user_params
            params.require(:user).permit(:username, :password, :checkPassword, :jwt)
        end

end
