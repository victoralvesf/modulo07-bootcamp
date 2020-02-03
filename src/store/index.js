import { createStore } from 'redux';

import rootReducer from './modules/rootreducer';

// eslint-disable-next-line operator-linebreak
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
