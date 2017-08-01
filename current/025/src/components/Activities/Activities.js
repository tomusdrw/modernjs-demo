//-- For local development remove !
import './styles.css!';

import React from 'react';
import Activity from '../Activity/Activity';

export default class Activities extends React.Component {

  //3/ It's never necessary to do force-update. For simplicity we introduce it here.
  componentDidMount () {
    this._interval = setInterval(() => this.forceUpdate(), 500);
  }

  componentWillUnmount () {
    this.clearInterval(this._interval);
  }

  //9/ We're rendering Activity component for each activity in model.
  render () {
    return (
      <div className='activities'>
        {this.props.activities.map(activity => (
          <Activity activity={activity} key={activity.id} />
        ))}
      </div>
    );
  }
};

