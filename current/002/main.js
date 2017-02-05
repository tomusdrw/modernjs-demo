// Retrieve a reference to existing elements using `querySelector`. jQuery, anyone?
var $activities = document.querySelector('.activities');

// 18/ Append new activity (as string)
$activities.innerHTML += '' +
 '     <div class="activity">' +
 '       <img' +
 '         class="activity__img"' +
 '         width="250"' +
 '         height="250"' +
 '         alt="Swimmer"' +
 '         src="https://xplatform.org/ext/lorempixel/250/250/sports/7/">' +
 '       <h3 class="activity__name">' +
 '         Swimming' +
 '       </h3>' +
 '       <p class="activity__description">' +
 '         Time spent: <strong>60 min</strong>' +
 '       </p>' +
 '       <button class="activity__button--paused">' +
 '         &#9654; Start' +
 '       </button>' +
 '     </div>';
