'use strict';

require('../normalize.css!');
require('../styles.css!');

// Import only Activities class
const { Activities } = require('./View');
const Model = require('./Model');

// Create new instance of our View
const view = new Activities(new Model().getActivities());
// And render this view appending to body.
document.body.appendChild(view.render());
