import "./App.css";
import Users from "./Components/Users";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <Users id={1} />
      <Posts userId={1} />
      <Users id={2} />
      <Posts userId={2} />
      <Users id={3} />
      <Posts userId={3} />
      <Users id={4} />
      <Posts userId={4} />
      <Users id={5} />
      <Posts userId={5} />
      <Users id={6} />
      <Posts userId={6} />
      <Users id={7} />
      <Posts userId={7} />
      <Users id={8} />
      <Posts userId={8} />
      <Users id={9} />
      <Posts userId={9} />
      <Users id={10} />
      <Posts userId={10} />
    </div>
  );
}

export default App;
