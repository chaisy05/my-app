import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import App from '../App'; 
import { store } from './store';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(Main);