'use strict';

const View = {

  render (model, $target) {
    const activities = model.getActivities();
     for (let idx in activities) {
      let $activity = View._renderActivity(activities[idx]);
      $target.appendChild($activity);
    }
  },

  replace ($old, $new) {
    $old.parentNode.replaceChild($new, $old);
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
    $time.innerHTML = 'Time spent: <strong>' + activity.timeSpent.toFixed(1) + ' min</strong>';

    let $button = document.createElement('button');
    $button.classList.add('activity__button--paused');
    $button.innerHTML = activity.started ? '&#9646;&#9646 Pause' : '&#9654; Start';

    $button.addEventListener('click', function () {
      //7/ If activity is not yet tracked
      if (!activity.started) {
        // Record start time
        activity.started = new Date().getTime();
        // And replace old activity with new one
        View.replace($activity, View._renderActivity(activity));
        return;
      }

      //3/ Otherwise, calculate how much time was spent on this activity and accumulate
      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;

      // Finally, re-render current activity
      View.replace($activity, View._renderActivity(activity));
    });

    $activity.appendChild($img);
    $activity.appendChild($name);
    $activity.appendChild($time);
    $activity.appendChild($button);

    return $activity;
  }
};
