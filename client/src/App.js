import { Provider } from "react-redux";
import "./App.css";
import LTLayout from "./shared/LTLayout";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <LTLayout />
    </Provider>
  );
}

export default App;
