//-- For local development remove !
require('./styles.css!');

const Activity = require('../Activity/Activity');

module.exports = class Activities {
  constructor (activities) {
    this._activities = activities;
  }

  render () {
    const $activities = document.createElement('div');
    $activities.className = 'activities';

    for (let activity of this._activities) {
      $activities.appendChild(new Activity(activity).render());
    }

    return $activities;
  }
};

