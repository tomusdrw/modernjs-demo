"use strict";

//27/ Model singleton will take care of activities
const Model = {
  // It's not possible* to create private fields, so we're using convention
  _activities: [
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
  ],
  //3/ Expose data (but copy to prevent mutations)
  getActivities: function () {
    return Model._activities.slice(0);
  }
};

const View = {
  // View exposes method `render` - expecting to get `Model` and `$target` DOM node.
  render (model, $target) {
    const activities = model.getActivities();
     for (let idx in activities) {
      let activity = activities[idx];

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

      $target.appendChild($activity);
    }
  }
};

//2/ At the end we are executing the whole application by binding together `View` and `Model`
const $activities = document.querySelector('.activities');
View.render(Model, $activities);
