import styled from "styled-components";
import Login from "./components/Login"


function App() {
  

  return (
 <Container>

  <Image src="./LoginPage.png" alt="Login Page" />


<div className="login">

   <Login/>
</div>



 </Container>
  )
}

export default App;

const Container =styled.div`

  
display: flex;
background-color:#F5F5F5;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
margin:2% 2%;

.login{
  width: 50%;

@media (width <= 425px){
  width: 100%;
}
}


`

const Image =styled.img`
  width: 40%;
  
    @media (width <= 425px) {
       display: none;
      
    }
`


