import "./App.css";
import Profile from "./components/profile";
import LoginUser from "./components/login";
import ChangeColor from "./components/ChangeColor";
import UseState from "./useState/useState";
function App() {
  return (
    <div className="App">
      <Profile />
      <LoginUser />
      <ChangeColor />
      <UseState />
    </div>
  );
}

export default App;
