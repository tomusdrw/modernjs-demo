'use strict';

//4/ To start the app we create new instance of `View` and `Model`.
const $activities = document.querySelector('.activities');

const view = new View(new Model(), $activities);
view.render();
