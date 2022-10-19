import React from 'react';
import ODS2 from "./img/ods2.svg";
import ODS4 from "./img/ods4.svg";
import ODS10 from "./img/ods10.svg";
import styled from 'styled-components';

const Conteiner = styled.div`
background-color: lightblue;
display: grid;
place-items: center;
height: 100vh;
div{
width: 70%;
height: 27vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}`

const Div =styled.span`
width: 90%;
  display: grid;
 grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
img{
  width: 40%;
  border: antiquewhite solid;
  border-radius: 10%;
}
`

function App() {
  return (
<Conteiner>
<div>
   <h1>Objetivos de Desenvolvimento Sustentável - Irajá</h1>
   <h2>O que são esses objetivos?</h2>
   <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para 
    acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas,
    em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os 
    objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos 
    atingir a Agenda 2030 no Brasil.</p>
   <p>Em irajá há alguns objetivos a ser alcançados:</p>
</div>
<Div>
   <img src={ODS2}/>
   <img src={ODS4}/>
   <img src={ODS10}/>
</Div>
</Conteiner>
  );
}

export default App;
