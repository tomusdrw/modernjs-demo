//-- For local development remove !
import './styles.css!';

export default class Activity {
  constructor (activity) {
    this._activity = activity;
  }

  //7/ Calculate total time spent on activity.
  totalTime () {
    let activity = this._activity;
    if (activity.started) {
      return activity.timeSpent + (new Date().getTime() - activity.started) / 1000 / 60;
    }
    return activity.timeSpent;
  }

  render () {
    let activity = this._activity;

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
    // Display total time
    $time.innerHTML = `Time spent: <strong> ${this.totalTime().toFixed(1)} min</strong>`;

    let $button = document.createElement('button');
    $button.classList.add('activity__button--paused');
    $button.innerHTML = activity.started ? '&#9646;&#9646; Pause' : '&#9654; Start';

    $button.addEventListener('click', () => {
      if (!activity.started) {
        activity.started = new Date().getTime();
        this.rerender($activity);
        return;
      }

      activity.timeSpent = this.totalTime();
      activity.started = false;

      this.rerender($activity);
    });

    $activity.appendChild($img);
    $activity.appendChild($name);
    $activity.appendChild($time);
    $activity.appendChild($button);

    //5/ Automatically re-render when active
    if (activity.started) {
      setTimeout(() => {
        this.rerender($activity);
      }, 1000);
    }

    return $activity;
  }

  rerender ($old) {
    $old.parentNode.replaceChild(this.render(), $old);
  }
};
