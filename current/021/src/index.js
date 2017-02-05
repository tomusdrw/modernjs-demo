import 'normalize.css';
//-- For local development remove !
import './styles.css!';

import Activities from './components/Activities/Activities';
import Model from './Model';

const view = new Activities(new Model().getActivities());
document.body.appendChild(view.render());
