class Api::V1::UsersController < Api::V1::BaseController
  def sign_in
    user = User.find_by(email: params[:email])

    if user && user.valid_password?(params[:password])
      render json :user, token: user.create_token, status: 200
    else
      render status: 401, message: "invalid email or password"
    end
  end
end