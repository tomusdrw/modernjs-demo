'use strict';

//46/ View definition
const View = {

  render (model, $target) {
    const activities = model.getActivities();
    //4/ We have extracted single activity rendering to separate method
     for (let idx in activities) {
      let $activity = View._renderActivity(activities[idx]);
      $target.appendChild($activity);
    }
  },

  _renderActivity (activity) {
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
    $button.addEventListener('click', function () {
      alert('Starting tracking: ' + activity.name);
      console.log(activity);
    });

    $activity.appendChild($img);
    $activity.appendChild($name);
    $activity.appendChild($time);
    $activity.appendChild($button);

    return $activity;
  }
};
