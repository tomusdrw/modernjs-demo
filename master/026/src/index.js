import 'normalize.css';
//-- For local development remove !
import './styles.css!';

import React from 'react';
import { render } from 'react-dom';

import Activities from './components/Activities/Activities';
import Model from './Model';

//4/ We could also propagate change events to the Model and handle them there.
render(
  <Activities activities={new Model().getActivities()} />,
  document.body.querySelector('div')
);
