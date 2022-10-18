import { Provider } from "react-redux";
import "./App.css";
import LTLayout from "./shared/LTLayout";
import store from "./store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <LTLayout />
      <ToastContainer />
    </Provider>
  );
}

export default App;
