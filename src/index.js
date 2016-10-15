'use strict';

//2/ In index.js we can declare what other files should be imported.
require('./View');
require('./Model');

const $activities = document.querySelector('.activities');

const view = new View(new Model(), $activities);
view.render();
