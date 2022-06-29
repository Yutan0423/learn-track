import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { store } from './store';
import { RootNavigator } from './navigations/RootNavigator';
import { TailwindProvider } from 'tailwind-rn/dist';
import utilities from './tailwind.json';

LogBox.ignoreLogs([
  'Setting a timer',
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
]);

const App = () => (
  <Provider store={store}>
    <TailwindProvider utilities={utilities}>
      <RootNavigator />
    </TailwindProvider>
  </Provider>
);

export default App;
