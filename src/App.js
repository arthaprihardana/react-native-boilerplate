/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  YellowBox
} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Modal, Tabs, Drawer, Stack, Lightbox} from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';

import configureStore from 'src/redux/store';

const store = configureStore();
const mapStateToProps = state => ({
  state: state.nav,
});
const RouterWithRedux = connect(mapStateToProps)(Router);

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
      return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#FFFFFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

let exitCount = 0;
const onBackPress = () => {
  let route = Actions.state.routes;
  let main = route[0].routes[0].routes;
}

import Home from 'src/containers/pages';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated and will be removed in the next major version. Use static getDerivedStateFromProps instead.']);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Provider store={store.store}>
        <RouterWithRedux createReducer={reducerCreate} getSceneStyle={getSceneStyle} backAndroidHandler={onBackPress}>
          <Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
            <Lightbox key="lightbox">
              <Stack key="root">
                <Scene key="main" hideNavBar type={ActionConst.RESET} panHandlers={null}>
                  <Scene key="home" component={Home} title="Home" hideNavBar hideTabBar />
                </Scene>
              </Stack>
            </Lightbox>  
          </Modal>
        </RouterWithRedux>
      </Provider>
    </View>
  );
};

export default App;
