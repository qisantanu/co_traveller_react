# README

It is a rails application running the front end part based on react. The API is defined in the other rails application, but ideally can be put here.

Things you may want to cover:

* Ruby version
  Ruby 3.0.0
  Postgres
  Rails 6.1.4.1

* Bundle Setup and React setup
  `bundle install`

  Webpacker is already setup by the following steps, so no need to setup the steps again as package.json is up-to-date .

  `bundle exec rake webpacker:install`
  `bundle exec rake webpacker:install:react`

* Database creation
  Check config/database.yml
  run `rails db:create db:migrate db:seed`

* API server setup
  Run the following applications:
  https://bitbucket.org/tom_4_dev/co_traveller

  Update the url for the API server app in app/javascripts/config.json

* Start the server
  `rails s`