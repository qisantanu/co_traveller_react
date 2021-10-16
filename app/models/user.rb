require 'bcrypt'

class User < ApplicationRecord
  include BCrypt
  validates_presence_of :email, :password_digest
  validates_uniqueness_of :email
  #  attr_accessor :password

  def password
    @password ||= Password.new(password_digest)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_digest = @password
  end

  def valid_password?(params_pwd)
    password == params_pwd
  end

  def create_token
    payload = { email: email, id: id }
    JWT.encode payload, nil, 'none'
  end

  def self.decode(token)
    decoded_token = JWT.decode token, nil, false
    decoded_token[0]
  end




  def full_name
    "#{first_name} #{last_name}".squish
  end
end
