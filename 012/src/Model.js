'use strict';

// We can declare a class
class Model {
  //2/ Fields has to be assigned in constructor (waiting for ES7...)
  constructor () {
    this._activities = [
      {
        id: 3,
        alt: 'Bicycle',
        name: 'Cycling',
        started: new Date().getTime(),
        timeSpent: 120
      },
      {
        id: 7,
        alt: 'Swimmer',
        name: 'Swimming',
        timeSpent: 60
      },
      {
        id: 9,
        alt: 'Runners',
        name: 'Running',
        timeSpent: 30
      }
    ];
  }
  //3/ Using `this` to access fields of current instance.
  getActivities () {
    return this._activities.slice(0);
  }
}
