'use strict';

const View = {

  render (model, $target) {
    const activities = model.getActivities();

    // 5. for-of loop
    for (let activity of activities) {
      let $activity = View._renderActivity(activity);
      $target.appendChild($activity);
    }
  },

  replace ($old, $new) {
    $old.parentNode.replaceChild($new, $old);
  },

  _renderActivity (activity) {
    //3/ 4. Destructuring assignment
    const { alt, name } = activity;
    // const alt = activity.alt;
    // const name = activity.name;

    let $activity = document.createElement('div');
    $activity.className = 'activity';

    let $img = document.createElement('img');
    $img.classList.add('activity__img');
    $img.width = 250;
    $img.height = 250;
    $img.alt = activity.alt;
    // 1. Template Strings
    $img.src = `https://xplatform.org/ext/lorempixel/250/250/sports/${activity.id}/`;

    let $name = document.createElement('h3');
    $name.classList.add('activity__name');
    $name.textContent = activity.name;

    let $time = document.createElement('p');
    $time.classList.add('activity__description');
    // 2. We can put any expression inside template strings
    $time.innerHTML = `Time spent: <strong> ${activity.timeSpent.toFixed(1)} min</strong>`;

    let $button = document.createElement('button');
    $button.classList.add('activity__button--paused');
    $button.innerHTML = activity.started ? '&#9646;&#9646; Pause' : '&#9654; Start';

    // 3. Lambdas!
    $button.addEventListener('click', () => {
      if (!activity.started) {
        activity.started = new Date().getTime();
        View.replace($activity, View._renderActivity(activity));
        return;
      }

      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;

      View.replace($activity, View._renderActivity(activity));
    });

    $activity.appendChild($img);
    $activity.appendChild($name);
    $activity.appendChild($time);
    $activity.appendChild($button);

    return $activity;
  }
};
