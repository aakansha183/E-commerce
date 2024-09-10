import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import AppRoutes from './Routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer /> 
      <AppRoutes />
    </Provider>
  );
};

export default App;
