'use strict';

class View {
  constructor(model, $target) {
    this._model = model;
    this._$target = $target;
  }

  render () {
    const activities = this._model.getActivities();
    for (let activity of activities) {
      let $activity = this._renderActivity(activity);
      this._$target.appendChild($activity);
    }
  }

  _renderActivity (activity) {
    let $activity = document.createElement('div');
    $activity.className = 'activity';

    let $img = document.createElement('img');
    $img.classList.add('activity__img');
    $img.width = 250;
    $img.height = 250;
    $img.alt = activity.alt;
    $img.src = `https://xplatform.org/ext/lorempixel/250/250/sports/${activity.id}/`;

    let $name = document.createElement('h3');
    $name.classList.add('activity__name');
    $name.textContent = activity.name;

    let $time = document.createElement('p');
    $time.classList.add('activity__description');
    $time.innerHTML = `Time spent: <strong> ${activity.timeSpent.toFixed(1)} min</strong>`;

    let $button = document.createElement('button');
    $button.classList.add('activity__button--paused');
    $button.innerHTML = activity.started ? '&#9646;&#9646; Pause' : '&#9654; Start';

    $button.addEventListener('click', () => {
      if (!activity.started) {
        activity.started = new Date().getTime();
        this.replace($activity, this._renderActivity(activity));
        return;
      }

      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;

      this.replace($activity, this._renderActivity(activity));
    });

    $activity.appendChild($img);
    $activity.appendChild($name);
    $activity.appendChild($time);
    $activity.appendChild($button);

    return $activity;
  }

  replace ($old, $new) {
    $old.parentNode.replaceChild($new, $old);
  }
}
