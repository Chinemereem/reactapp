import "./App.css";
import Profile from "./components/profile";
import LoginUser from "./components/login";
import ChangeColor from "./components/ChangeColor";
import UseState from "./useState/useState";
import ReducerTutorial from "./UseReducer/UseReducer";
import EffectTutorial from "./useEffect/EffectTutorial";
import RefTutorial from "./useRef/RefTutorial";
import LayoutTutoria from "./useLayout/LayoutTutoria";
import ImperativeHandle from "./useImperativeHandle/ImperativeHandle";
function App() {
  return (
    <div className="App">
      <Profile />
      <LoginUser />
      <ChangeColor />
      <UseState />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutTutoria />
      <ImperativeHandle />
    </div>
  );
}

export default App;
