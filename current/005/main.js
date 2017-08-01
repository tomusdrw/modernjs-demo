// 20/ We're creating an array of activities (data)
var activities = [
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

var $activities = document.querySelector('.activities');

// 2/ and we're rendering activties in a loop
for (var k in activities) {
  var activity = activities[k];

  var $activity = document.createElement('div');
  $activity.className = 'activity';

  var $img = document.createElement('img');
  $img.classList.add('activity__img');
  $img.width = 250;
  $img.height = 250;
  $img.alt = activity.alt;
  $img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id + '/';

  var $name = document.createElement('h3');
  $name.classList.add('activity__name');
  $name.textContent = activity.name;

  var $time = document.createElement('p');
  $time.classList.add('activity__description');
  $time.innerHTML = 'Time spent: <strong>' + activity.timeSpent + ' min</strong>';

  var $button = document.createElement('button');
  $button.classList.add('activity__button--paused');
  $button.innerHTML = '&#9654; Start';

  $activity.appendChild($img);
  $activity.appendChild($name);
  $activity.appendChild($time);
  $activity.appendChild($button);

  // In each iteration we're appending the activity to the DOM
  $activities.appendChild($activity);
}
