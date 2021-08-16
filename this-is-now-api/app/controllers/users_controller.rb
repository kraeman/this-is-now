class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def show
        user = User.find(params[:id].to_i)
        render json: { user: UserSerializer.new(user).serializable_hash}
    end

    def create
        if user_params[:password] == user_params[:checkPassword]
            current_user = User.create(username: user_params[:username], password: user_params[:password])
            if current_user.valid?
                token = encode_token(user_id: current_user.id)
                render json: { username: current_user.username, user_id: current_user.id, jwt: token }, status: :created
            else
                render json: { error: 'failed to create user' }, status: :not_acceptable
            end
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def update
        user = User.find(decoded_token()[0]["user_id"])
        user.values.destroy_all
        params["value"]['value'].each do |vid| 
            ValueUser.create(value_id: vid, user_id: user.id)            
        end
        array = User.find(user.id).values.map do |value|
            value.id
        end
        render json: array
    end

    private
        def user_params
            params.require(:user).permit(:username, :password, :checkPassword, :jwt)
        end

end
