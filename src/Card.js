import { useState } from "react";
import styled from "styled-components";

export default function Card({char}){

    const [detailsState, setDetailsState] = useState(false);

    function toggleDetailsState(){
      setDetailsState(!detailsState)
    }

    return <div>
    <StyledFlexDiv>
    <StyledP>Always visible</StyledP>
    &nbsp;
    <StyledP>{char.name}</StyledP>
    </StyledFlexDiv>
    <button onClick={()=>toggleDetailsState()}>ShowInfo</button>
    {detailsState ? 
    (
      <StyledDiv>
        <StyledFlexDiv>
        <p>Conditional rendered</p>
        <p>{char.type}</p>
        &nbsp;
        <p>{char.gender}</p>
        </StyledFlexDiv>
      </StyledDiv>
    )
    :
    ""
  }
  </div>
}

const StyledP = styled.p`
border: 1px solid black;
background-color: green;
`
const StyledDiv = styled.div`
border: 1px solid black;
background-color: crimson;
`
const StyledFlexDiv = styled.div`
display: flex;
`