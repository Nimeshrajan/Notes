import "./components/css/App.css";
import Notes from "./components/NoteComp/Notes";
import Header from "./components/NoteComp/Header";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
