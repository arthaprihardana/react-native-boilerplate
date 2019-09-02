/*
 * @Author: Artha Prihardana 
 * @Date: 2019-09-02 13:34:20 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-09-02 13:41:59
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { persistStore } from 'redux-persist';
import reducers from 'src/redux/reducers';

const middlewares = [];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        reducers,
        composeEnhancer(applyMiddleware(...middlewares))
    );
    let persistor = persistStore(store);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('src/redux/reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return { store, persistor };
}