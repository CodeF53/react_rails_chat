every '@reboot' do
  command 'sleep 30 && source /home/USERNAME/.rvm/scripts/rvm && cd /FULL_PATH_TO_REPO && bundle exec rails s -e production'
end
