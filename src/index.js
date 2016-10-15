'use strict';

//2/ We can get rid of any globals!
const View = require('./View');
const Model = require('./Model');

const $activities = document.querySelector('.activities');

const view = new View(new Model(), $activities);
view.render();
