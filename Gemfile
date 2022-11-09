source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.4'

gem 'rails', '~> 7.0.4'
# sqlite3 as database for Active Record
gem 'sqlite3', '~> 1.4'
# Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 5.0'
# Use Active Model has_secure_password
gem 'bcrypt'
# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
# Serialize me
gem 'active_model_serializers'
# Cron for automatically starting the server
gem 'whenever', require: false

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[ mri mingw x64_mingw ]
end
