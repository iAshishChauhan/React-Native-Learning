/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import NavigationApp from './NavigationApp';
import DrawerApp from './DrawerApp';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => NavigationApp);
AppRegistry.registerComponent(appName, () => DrawerApp);
