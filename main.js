// 1. We need to enable strict mode.
"use strict";

// 3. We can also create constants - the variable cannot be re-assigned.
const activities = [
  {
    id: 3,
    alt: 'Bicycle',
    name: 'Cycling',
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

const $activities = document.querySelector('.activities');

for (let k in activities) {
  // 2. Using `let` instead of `var` will create block-scoped variable.
  let activity = activities[k];

  let $activity = document.createElement('div');
  $activity.className = 'activity';

  let $img = document.createElement('img');
  $img.classList.add('activity__img');
  $img.width = 250;
  $img.height = 250;
  $img.alt = activity.alt;
  $img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id + '/';

  let $name = document.createElement('h3');
  $name.classList.add('activity__name');
  $name.textContent = activity.name;

  let $time = document.createElement('p');
  $time.classList.add('activity__description');
  $time.innerHTML = 'Time spent: <strong>' + activity.timeSpent + ' min</strong>';

  let $button = document.createElement('button');
  $button.classList.add('activity__button--paused');
  $button.innerHTML = '&#9654; Start';

  //4/ 4. Let's check if handler works this time.
  $button.addEventListener('click', function () {
    alert('Starting tracking: ' + activity.name);
    console.log(activity);
  });

  $activity.appendChild($img);
  $activity.appendChild($name);
  $activity.appendChild($time);
  $activity.appendChild($button);

  $activities.appendChild($activity);
}

// 5. We cannot access this variable here - it yields ReferenceError (as expected)
console.log(activity);
