#3/ After installation node and npm commands should be avaiable
$ node -v && npm -v
v6.2.1
3.9.3

#2/ We'll now create a new project (npm will ask couple of questsions)
$ cd /path/to/your/project
$ npm init
# We can force default answers though
$ npm init -f

# The end result of `npm init` is `package.json` file

# Let's add `normalize.css` as a dependency to our project (--save will write dep to package.json)
$ npm install --save normalize.css
