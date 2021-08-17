class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        if user_params[:password] == user_params[:checkPassword]
            user = User.create(username: user_params[:username], password: user_params[:password])
            if user.valid?
                token = encode_token(user_id: user.id)
                render json: { username: user.username, user_id: user.id, token: token }, status: :created
            else
                #Again, I did not use the error message here, I used the absence of a toekn to trigger error handling in frontend
                render json: { error: '' }
            end
        else
                #Again, I did not use the error message here, I used the absence of a toekn to trigger error handling in frontend
            render json: { error: '' }
        end
    end

    #I decided to use the users update action to manipulate the ValueUser objects instead of create an entire new controller.
    def update
        #used decoded webtoken to get current users id for creator id instead of just sending the creator id along in the fetch request at a time when I thought I would do this across the app for security purposes.
        user = User.find(decoded_token()[0]["user_id"])
        #destroying all values of the user and recreating them based on form was a better alternative then submitting a fetch request upon every change to a single value
        user.values.destroy_all
        params["value"]["value"].each do |valueId| 
            ValueUser.create(value_id: valueId, user_id: user.id)            
        end
        #Had to re-find user because using the previously declared 'user' variable caused usersValues to come up as a blank array
        usersValues = User.find(user.id).values.map do |value|
            value.id
        end
        render json: usersValues
    end

    private
        def user_params
            params.require(:user).permit(:username, :password, :checkPassword)
        end

end
