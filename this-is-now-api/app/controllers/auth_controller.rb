class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

  def create
    user = User.find_by(username: user_login_params[:username])
    if user && user.authenticate(user_login_params[:password])
      users_values = user.values.collect {|value| value.id}
      token = encode_token({ user_id: user.id })
      render json: { username: user.username, user_id: user.id, value_ids: users_values, token: token }, status: :accepted
    else
      render json: { message: 'error' }
    end
  end

  private

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
