import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';
import {CharacterScreen, Home} from './screens';
import {RootNavigatorList} from './types/navigationTypes';

const Stack = createStackNavigator<RootNavigatorList>();

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          theme={{
            ...DarkTheme,
            colors: {...DarkTheme.colors, background: '#f6f5f3'},
          }}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default RootNavigator;
