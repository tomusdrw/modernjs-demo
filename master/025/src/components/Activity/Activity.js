//-- For local development remove !
import './styles.css!';

import React from 'react';

export default class Activity extends React.Component {

  totalTime () {
    const { activity } = this.props;
    if (activity.started) {
      return activity.timeSpent + (new Date().getTime() - activity.started) / 1000 / 60;
    }
    return activity.timeSpent;
  }

  //23/ Rendering function looks almost identical to HTML we had at the beginning.
  render () {
    const { activity } = this.props;

    return (
      <div className='activity'>
        <img
          className='activity__img'
          width={250}
          height={250}
          alt={activity.alt}
          src={`https://xpla.org/ext/lorempixel/250/250/sports/${activity.id}/`} />
        <h3 className='activity__name'>
          {activity.name}
        </h3>
        <p className='activity__description'>
          Time spent: <strong>{this.totalTime().toFixed(1)} min</strong>
        </p>
        <button className='activity__button--paused' onClick={this.handleClick}>
          {activity.started ? '▮▮ Pause' : '▶ Start'}
        </button>
      </div>
    );
  }

  //12/ Below code is not recommended! We should handle the state explicitly in a single place.
  handleClick = () => {
    const { activity } = this.props;
    if (!activity.started) {
      activity.started = new Date().getTime();
      this.forceUpdate();
      return;
    }

    activity.timeSpent = this.totalTime();
    activity.started = false;
    this.forceUpdate();
  };
};
