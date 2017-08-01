'use strict';

require('../normalize.css!');
require('../styles.css!');

// Import Activities component
const Activities = require('./components/Activities/Activities');
const Model = require('./Model');

const view = new Activities(new Model().getActivities());
document.body.appendChild(view.render());
