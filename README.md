# React + Rails Template

## Development
Start API:
```
rails s
```

Start Web:
```
npm start
```

## Deploying
On wherever you want to host:

### Installing requirements:
Install required stuff:
```
TODO: do this later
```

### Nginx setup:
TODO: later

### Starting your server for the first time
Git clone your repo you made from this one:
```
git clone URL
```

Update `config/schedule.rb` so `USERNAME` and `FULL_PATH_TO_REPO` are correct

Add a task to automatically run the server on startup:
```
whenever -w
```

Build
```
bin/build.sh
```

Restart your server

### Updating the server
Git pull your latest changes
```
git pull
```
If this fails because of you dont have enough in your `.gitignore`, temporarily fix by doing `git stash`.

Build
```
bin/build.sh
```