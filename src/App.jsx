import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Facts from "./components/Facts";
import { useState } from "react";

function App() {
  const [ ready, setReady] = useState(false)

  function handleSubmit(){
    setReady(true)
  }

  function handleSubmitStop(){
    setReady(false)
  }

  return (
    <main>
      <Header />
      <SearchForm handleSubmit={handleSubmit}/>
      <Facts ready={ready} handleSubmitStop={handleSubmitStop}/>
    </main>
  );
}

export default App;
