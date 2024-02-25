import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import createSagaMiddlware from 'redux-saga';
import { rootSaga } from "./root-saga"; //saga replace thunk

import { rootReducer } from "./root-reducer";
// import thunk from "redux-thunk";




const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['cart']
    whitelist: ['cart'],
}

const sagaMiddlware = createSagaMiddlware();

const persistedReducer = persistReducer(persistConfig, rootReducer);


//Thunk library
// const middleWares = [
//     process.env.NODE_ENV !== 'production' && logger,
//     thunk,
// ].filter(Boolean);


//saga Middleware
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddlware,
].filter(Boolean);



const composedEnhancer = 
  (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);

sagaMiddlware.run(rootSaga);

export const persistor = persistStore(store);
