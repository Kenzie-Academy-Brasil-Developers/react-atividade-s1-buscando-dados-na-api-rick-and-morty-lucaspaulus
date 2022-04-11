import "./App.css";
import Characters from "./components/Characters";
import { useState } from "react";
import { useEffect } from "react";

function App() {
const [characterList, setCharacterList ] = useState([])

useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response)=> response.json())
    .then((response)=> setCharacterList(response.results))
},[])

    return (
        <div className="App">
            <header className="App-header">
                <div className="Container-characters">
                    <Characters characterList={characterList}/>
                </div>
               
               
            </header>
        </div>
    );
}

export default App;
