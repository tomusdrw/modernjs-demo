import 'normalize.css';
//-- For local development remove !
import './styles.css!';

import React from 'react';
import { render } from 'react-dom';

import Activities from './components/Activities/Activities';
import Model from './Model';

//4/ Bootstraping React application, we're passing data to the component
render(
  <Activities activities={new Model().getActivities()} />,
  document.body.querySelector('div')
);
