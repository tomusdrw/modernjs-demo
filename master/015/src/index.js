'use strict';

//2/ Importing CSS files for side-effects. ! <- is required by System.js
require('../normalize.css!');
require('../styles.css!');

//2/ We can get rid of any globals!
const View = require('./View');
const Model = require('./Model');

const $activities = document.querySelector('.activities');

const view = new View(new Model(), $activities);
view.render();
