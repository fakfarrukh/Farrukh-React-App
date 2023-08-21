import React, { useState } from "react"
import '../UI/Signup.css'
import { Signup } from "../Services/LoginServices";




const SignUp:React.FC = () =>{
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastNamel] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
   
    const handlFirstNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(event.target.value);
      }; 
    const handlLastNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastNamel(event.target.value);
      }; 
    const handleemailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setemail(event.target.value);
      }; 
     const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
      };

      
      const handleSignup = () => {
        Signup(FirstName,LastName,email,password)
          .then((response) => {
            
            console.log('Signup successful:', response.data);
            // Do something after successful signup
            alert("Data save succesfully")
            
          })
          .catch((error) => {
            console.error('Error signing up:', error);
          });
      };
    return <div>



        
 <html lang="en">
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Login Form Demo</title>
   </head>
   <body>
     <div className="login-wrapper">
      <form onSubmit={handleSignup}  action="" className="form">
        <h2>make Account</h2>
        <div className="input-group">
          <input
            type='text'
            value={FirstName}
            onChange={handlFirstNameChange}
            name="loginUser"
            id="loginUser" required />
          <label htmlFor="loginUser">First Name</label>
        </div>
         <div className="input-group">
          <input
            type='text'
            value={LastName}
            onChange={handlLastNameChange}
            name="loginUser"
            id="loginUser" required />
          <label htmlFor="loginUser">Last Name</label>
        </div>
        <div className="input-group">
          <input
            type='text'
            value={email}
            onChange={handleemailChange}
            name="loginUser"
            id="loginUser" required />
          <label htmlFor="loginUser">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <button  className="submit-btn" type='submit'>SignUp</button>
      </form>
    </div>
  </body>
</html>

    </div>
}
export default SignUp