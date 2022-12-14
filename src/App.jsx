import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import './App.scss';
import Index from './components';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
