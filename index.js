/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/i18n';
import 'react-native-keyboard-controller';

AppRegistry.registerComponent(appName, () => App);
