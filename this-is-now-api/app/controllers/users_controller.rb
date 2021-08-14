class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    # def profile
    #     render json: { user: UserSerializer.new(current_user) }, status: :accepted
    # end

    def show
        user = User.find(params[:id].to_i)
        render json: { user: UserSerializer.new(user).serializable_hash}
    end

    def create
        if user_params[:password] == user_params[:checkPassword]
            # byebug
            current_user = User.create(username: user_params[:username], password: user_params[:password])
            if current_user.valid?
                # byebug
                token = encode_token(user_id: current_user.id)
                # byebug
                #EXCLUDE ID FROM SERIALIZER......ASK MATTEO!!!!!
                render json: { username: current_user.username, user_id: current_user.id, jwt: token }, status: :created
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
        # user = User.find(params[:id].to_i)
        # byebug
        # value = Value.find(params["value"]['value'])
        # byebug
        vu = ValueUser.new(value_id: params["value"]['value'], user_id: params[:id].to_i)
        vu.save
        render json: vu, only: [:value_id]
        # render json: { user: UserSerializer.new(user).serializable_hash}
    end

    def remove_value
        # byebug
        # user = User.find(params[:id].to_i)
        # byebug
        # value = Value.find(params["value"]['value'])
        vu = ValueUser.find_by(value_id: params["value"]['value'], user_id: params[:id].to_i)
        # byebug
        if vu.destroy
        
            render json: params["value"]['value']
        end
        # render json: { user: UserSerializer.new(user).serializable_hash}
    end

    
    private
        def user_params
            params.require(:user).permit(:username, :password, :checkPassword, :jwt)
        end

end
