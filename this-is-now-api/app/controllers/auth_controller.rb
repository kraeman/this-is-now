class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

  def create
    # byebug
    user = User.find_by(username: user_login_params[:username])
    #User#authenticate comes from BCrypt
    if user && user.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      users_values = user.values.collect {|value| value.id}
      token = encode_token({ user_id: user.id })
      render json: { username: user.username, user_id: user.id, value_ids: users_values, jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end


#   def login
#     current_user = User.find_by(username: user_params[:username])
#     if current_user && current_user.authenticate(user_params[:password])
#         token = encode_token(user_id: current_user.id)
#         render json: { user: UserSerializer.new(current_user), jwt: token }, status: :accepted
#     else
#         render json: {error: "Incorrect password or username!"}
#     end
# end


  

  private

  def user_login_params
    # params { user: {username: 'Chandler Bing', password: 'hi' } }
    params.require(:user).permit(:username, :password)
  end
end
