class UsersController < ApplicationController
  skip_before_action :authorize, only: %i[create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def me
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
