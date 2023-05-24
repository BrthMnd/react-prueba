import { useState, useEffect } from "react"

export default function Api (){
    const [datos, setData] = useState([]);
    useEffect(() => {
        ConnexionApi()
    },[])
    const ConnexionApi = async() =>{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        // console.log(data.results);
        setData(data.results);
    }    
    console.log(datos);
    return(
        <div className="box-father">
            {
                datos.map(item => {
                    return(
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.image} alt={item.name}/>
                            <p>{item.location.name}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })
            }
        </div>
    )
    
}