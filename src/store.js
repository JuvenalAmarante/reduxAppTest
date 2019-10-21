import {createStore} from 'redux';

import details from './reducers';

const store = createStore(details);

export default store;
