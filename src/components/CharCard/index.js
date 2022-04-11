import "./index.css"
export default function CharCard({name, image}){

    return(
       <div className="card">
            <div className="card__metal">
                <h1 className="card__title">{name}</h1>
            </div>
           
           <img className="card__img" src={image} alt="rosto do personagem"></img>
       </div>
    )
}