import "./index.css"
import CharCard from "../CharCard"
export default function Characters({characterList, setCharacterList}){

    return(
        <>  
            
            <h1 className="title-principal">Meus personagens</h1>
            {characterList.map((character)=>(
                 <CharCard  name={character.name} image={character.image}/>
            ))}
        </>
    )
}

