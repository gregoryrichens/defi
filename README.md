# DeFi: A Trends Web application for Cryptocurrency && Decentralized Finance

## Description

A MERN stack web application for aggregating thoughts from crypto's leading voices (not talking heads or financial analysts) as well as reputable news sites that provide proven commentary. The point of the site is two-fold:
1) serve as an entry point to a weekly newsletter about crypto trends
2) provide an at-a-glance view of what's hot now and serve as a launching point to other websites/deeper investigation.

### Site Preview

![](defi.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode via node server on local machine.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Port 3000 is also the listening port for API requests.

The page will not reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## api routes

No public routes currently available.

### News Stories
This application does make use of the coindesk RSS feed, with plans to add more feeds in the future. You can access the feed for yourself here: 
https://www.coindesk.com/feed

Many options are available for parsing XML - this project utilizes [rss-parser npm package](https://www.npmjs.com/package/rss-parser)

### Thinker Feed
Provisioning access to the Twitter api can be time-consuming. Customized feed is displayed here via an iframe-based application, which syntax provides a simplified wrapper for the Twitter api that cooperates with a react ecosystem. More information can be found via the [react-twitter-widgets npm module](https://www.npmjs.com/package/react-twitter-widgets)

### Email subscription
The api for accessing the database model to save a new subscriber as well as the api to retrieve subscriber emails is necessarily obfuscated.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
