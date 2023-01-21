import { useState } from "react";

export default function Card({char}){
    const [detailsState, setDetailsState] = useState(false);
    function toggleDetailsState(){
      setDetailsState(!detailsState)
    }
    return <div>
    <p>{char.name}</p>
    {detailsState && (
      <>
        <p>{char.type}</p>
        <p>{char.gender}</p>
      </>
    )}
    <button onClick={()=>toggleDetailsState()}>ShowInfo</button>
  </div>
}