// We can update the path to normalize.css
require('normalize.css');
//-- For local development remove !
require('./styles.css!');

const Activities = require('./components/Activities/Activities');
const Model = require('./Model');

const view = new Activities(new Model().getActivities());
document.body.appendChild(view.render());
