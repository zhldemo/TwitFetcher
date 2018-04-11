# TwitFetcher built by Zhonghui liu
- Built with React and Node.js
- Has all the features down below
- Compatible for twitter brand new 1.1 API (This is the reason why I use Node.js)
- Add on Search Feature
- All by scratch


# Testing notation
## Download the demo copy and install
* Download the demo package from http://zhlio.com/documents/tfdemo.zip

* You must have Node.js installed on your computer.

* Unzip the tfdemo.zip and you will see the folder tfdemo.

* In the terminal, go to the tfdemo folder and run `npm install`.

* Then, run `node index.js` .

* In the browser’s address, input http://localhost:5000/ and you will see it.


## If you download this copy and want to run it on your own computer, you would like to install the dependencies of both front (React front end) and back (Node.js backend) packages separately.
Backend will run on http: // localhost: 5000
Frontend will run on http: // localhost: 3000

# Directly Check it out on  http://zhldev.com:5000 


### Part I: Consuming Twitter API

Use the [ Twitter API ]( https://dev.twitter.com/overview/documentation ) to
fill the following areas on the page:

- The 30 most recent tweets from @Trizic
- The 30 most recent tweets from @laughingsquid.
- The 30 most recent tweets from @techcrunch.

Each tweet should include at minimum:

- The tweet content
- A well-formatted `created_at` date
- A link to the tweet.
- For retweets and mentions, the username should be included.
- Make the columns flexible for screen width so the columns
fill 100% of the page width. Layout could be as small as 320px wide. Column
arrangment is open-ended.


### Part II: Edit layout

Make an "edit layout" view that has a form to change the layout settings.

Use HTML5 LocalStorage to store and load the layout settings.

Configurable settings could possibly include:

- The order of the columns.
- The time range of the tweets shown.
- The number of tweets shown in each column.
- The overall palette/skin of the page.

