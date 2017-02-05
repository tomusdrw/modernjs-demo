//-- For local development remove !
import './styles.css!';

import Activity from '../Activity/Activity';

// Exporting is "simplified" (no need for module.exports)
export default class Activities {
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

