import "./App.css";
import Profile from "./components/profile";
import LoginUser from "./components/login";
import ChangeColor from "./components/ChangeColor";
import UseState from "./useState/useState";
import ReducerTutorial from './UseReducer/UseReducer';
import EffectTutorial from "./useEffect/EffectTutorial";

function App() {
  return (
    <div className="App">
      <Profile />
      <LoginUser />
      <ChangeColor />
      <UseState />
      <ReducerTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
