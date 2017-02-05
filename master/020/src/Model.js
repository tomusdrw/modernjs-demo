export default class Model {
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

  getActivities () {
    return this._activities.slice(0);
  }
}
