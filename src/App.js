// import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter/Counter";
import SignUpForm from "./component/SignUp/SignUpForm";
import Modal from "./component/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SignUpForm />
      <hr />
      <Modal />
    </div>
  );
}

export default App;
