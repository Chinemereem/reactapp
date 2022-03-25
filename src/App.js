import "./App.css";
import Profile from "./components/profile";
import LoginUser from "./components/login";
import ChangeColor from "./components/ChangeColor";
import UseState from "./useState/useState";
import ReducerTutorial from './UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
      <Profile />
      <LoginUser />
      <ChangeColor />
      <UseState />
      <ReducerTutorial />
      <ReducerTutorial />
    </div>
  );
}

export default App;
