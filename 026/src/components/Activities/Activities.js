//-- For local development remove !
import './styles.css!';

import React from 'react';
import Activity from '../Activity/Activity';

export default class Activities extends React.Component {

  constructor (...args) {
    super(...args);
    //4/ We will manage state of the model in this component
    this.state = {
      now: 0,
      activities: this.props.activities
    };
  }

  //5/ Time is now part of the state of that component.
  componentDidMount () {
    this._interval = setInterval(() => this.setState({
      now: new Date().getTime()
    }), 500);
  }

  componentWillUnmount () {
    this.clearInterval(this._interval);
  }

  render () {
    const { now, activities } = this.state;
    //12/ We are passing down all required properties to render single Activity.
    return (
      <div className='activities'>
        {activities.map(activity => (
          <Activity
            key={activity.id}
            now={now}
            activity={activity}
            onChange={() => this.handleChange(activity)}
            />
        ))}
      </div>
    );
  }

  //17/ Mutation has been moved here from Activity
  handleChange (activity) {
    const { now } = this.state;

    if (!activity.started) {
      activity.started = now;
      this.setState({
        activities: this.state.activities.slice(0)
      });
      return;
    }

    activity.timeSpent += (now - activity.started) / 1000 / 60;
    activity.started = false;
    this.setState({
      activities: this.state.activities.slice(0)
    });
  };
};

