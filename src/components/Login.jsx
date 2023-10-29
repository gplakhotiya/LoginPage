import styled from "styled-components"

const Login = () => {
  return (
    <Container>
      <div>
      <h1>Login</h1>

      </div>
      <Card>
        <div className="inputField">
          <label htmlFor="login">Login ID</label>
          <Input type="text" name="login" placeholder="Enter Login ID" />
        </div>

        <div className="inputField">
          <label htmlFor="password">Password</label>
          <Input type="text" name="password" placeholder="Enter Password" />
        </div>

        <div className="checkbox" >
          <input type="checkbox" name="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <div className="checkbox">
          <input type="checkbox" name="terms" />
          <label htmlFor="terms">Agree to <Span>Terms & Conditions</Span></label>
        </div>
      <Button>Login</Button>
       <div className="paragraph">
        <p> Don&rsquo;t have an account? <Span>Register Here</Span></p>
      </div>
      </Card>


    </Container>
  )
}

export default Login



const Container = styled.div`
    background-color:#FFFFFF ;
    width: 100%;
    display: flex;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    color: #04072F;
    gap:0.5rem;
    box-shadow:  0px 10px 40px 0px #00000029;
    border-radius:30px;

`

const Card = styled.div`
 display: flex;
  flex-direction: column;
   width: 80%;
   height: 100%;
   margin: auto;
   font-size: medium;
  gap: 1rem;

  
 
  .inputField{
    display: flex;
    flex-direction: column;
    gap:0.5rem; 
    font-weight: 600;
  }

  .checkbox{
    display: inline-block;
   
    color:#737B86;
    
  }
  .checkbox input{
    cursor: pointer;
    margin-right: 10px;
  }
  .paragraph{
  font-size: medium;
  margin:0 auto;
}

  @media (width <= 768px) { 
      font-size:small;
      
      .inputField{
          gap:0.1rem;
        }
  .checkbox input{
    margin-right: 5px;

  } 

.paragraph{
  font-size: small;
 
}
       
    }
`


const Button = styled.button`
color:white;
padding:10px 18px;
background: #1575A7;
font-size: 16px;
width: 55%;
height:44px;
border:none;
border-radius: 5px;
transition:0.4s background ease-in;
cursor: pointer;
margin:0 auto;
margin-top: 5%;


&:hover{
    background-color: blue;
    border: 1px solid black;
    color:black;
    transition:0.3s background ease-in;
}

`

const Input = styled.input`

  height:2rem;
   border:1px solid #04072F;
   box-shadow:  0px 10px 40px 0px #00000029;
  border-radius:5px;
  cursor: pointer;

&:hover{
  background-color: silver;
    transition:0.3s background ease-in;
}

      @media (width <= 768px) {
      
       font-size: small;
       height: 1.5rem;
    }
    

`

const Span = styled.span`
color: #F78719;
text-decoration: underline;
cursor: pointer;

`