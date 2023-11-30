import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ALL_ROUTES } from '../routes/routes';
import UserProvider from '../context/UserContext/UserProvider';
import { PersistGate } from 'redux-persist/integration/react'
import '../assets/styles/globals.css';
import '../assets/styles/monthPicker.css';
import { persistor, store } from '../store/store';

function App() {
  const routes = useRoutes(ALL_ROUTES);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <UserProvider>
          {routes}
        </UserProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
