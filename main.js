// 2/ We can also use DOM API to create the elements and modify their properties
var $activity = document.createElement('div');
$activity.className = 'activity';

// 6/ Creating an image (note classList.add)
var $img = document.createElement('img');
$img.classList.add('activity__img');
$img.width = 250;
$img.height = 250;
$img.alt = 'Swimmer';
$img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/7/';

// 3/ A title
var $title = document.createElement('h3');
$title.classList.add('activity__name');
$title.textContent = 'Swimming';

// 3/ Time Spent
var $time = document.createElement('p');
$time.classList.add('activity__description');
$time.innerHTML = 'Time spent: <strong>60 min</strong>';

// 3/ Button
var $button = document.createElement('button');
$button.classList.add('activity__button--paused');
$button.innerHTML = '&#9654; Start';

// 4/ Append all elements to the parent
$activity.appendChild($img);
$activity.appendChild($title);
$activity.appendChild($time);
$activity.appendChild($button);

// 2/ And now append to existing element in DOM to render new activity.
var $activities = document.querySelector('.activities');
$activities.appendChild($activity);
