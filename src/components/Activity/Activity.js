//-- For local development remove !
import './styles.css!';

import React from 'react';

export default class Activity extends React.Component {

  totalTime (now) {
    const { activity } = this.props;
    if (activity.started) {
      return activity.timeSpent + (now - activity.started) / 1000 / 60;
    }
    return activity.timeSpent;
  }

  render () {
    const { activity, now } = this.props;

    return (
      <div className='activity'>
        <img
          className='activity__img'
          width={250}
          height={250}
          alt={activity.alt}
          src={`https://xplatform.org/ext/lorempixel/250/250/sports/${activity.id}/`} />
        <h3 className='activity__name'>
          {activity.name}
        </h3>
        <p className='activity__description'>
          Time spent: <strong>{this.totalTime(now).toFixed(1)} min</strong>
        </p>
        <button className='activity__button--paused' onClick={this.props.onChange}>
          {activity.started ? '▮▮ Pause' : '▶ Start'}
        </button>
      </div>
    );
  }

};
