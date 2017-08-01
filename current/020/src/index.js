// Instead of using `require` there is a separate keyword in ES6
import 'normalize.css';
//-- For local development remove !
import './styles.css!';

// We can import specific things from modules
import Activities from './components/Activities/Activities';
import Model from './Model';

const view = new Activities(new Model().getActivities());
document.body.appendChild(view.render());
