set :stage, :production
set :branch, ENV.fetch('BRANCH', 'master')
 
set :user, 'root'
set :deploy_to, "/home/#{fetch(:user)}/elixirstream/production"
 
role :app, %w{root@188.166.114.63}
role :web, %w{root@188.166.114.63}
role :db, %w{root@188.166.114.63}
 
server '188.166.114.63', user: "#{fetch(:user)}",roles: %w{web app}
set :rvm_ruby_version, '2.2.1'