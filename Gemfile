source 'https://rubygems.org'

gem 'rails', '4.2.0'
gem 'responders', '~> 2.0.0'
gem 'bcrypt', '~> 3.1.2'
gem 'sqlite3', '~> 1.3.10'
gem "friendly_id", "~> 5.0.3"
gem "prerender_rails"
gem "redcarpet", "~> 3.1.1"
gem "rack-cors", require: "rack/cors"
gem 'therubyracer',  platforms: :ruby
gem 'sass-rails', '~> 5.0.0'
gem 'uglifier', '>= 1.3.0'
gem "bootstrap-sass", "~> 2.3.2.2"
gem "font-awesome-rails", "~> 4.0.3"
gem 'jquery-rails'

gem 'ember-rails'
gem 'active_model_serializers', github: 'rails-api/active_model_serializers', branch: '0-8-stable'

gem 'puma', '~> 2.11.2'
gem 'rename'


group :development do
# ----------------------Deploy-------------------------------
gem 'capistrano', '~> 3.4.0'
gem 'capistrano-rvm', '~> 0.1.2'
gem 'capistrano-rails', '~> 1.1.2'
gem 'capistrano-bundler', '~> 1.1.4'
gem 'capistrano3-puma', '~> 0.9.0'
# -----------------------------------------------------------
  gem "quiet_assets"
  gem "pry-rails"
end

group :development, :test do
  gem 'rspec-rails', '~> 2.14.1'
  gem "factory_girl_rails", "~> 4.4.1"
end

group :test do
  gem "capybara", "~> 2.3.0"
  gem "poltergeist", "~> 1.5.1"
  gem "database_cleaner", "~> 1.2.0"
end

group :production do
  gem "bugsnag"
end
