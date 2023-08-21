// src/pages/Home.tsx
import React, { useState } from 'react';
import '../UI/Login.css'
import {  useNavigate } from 'react-router-dom';
import { getPosts } from '../Services/LoginServices';
import { useDispatch } from 'react-redux';


interface log{
    Email: string,
    Password: string
}
const Login: React.FC = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const [log, postdata] = React.useState<log[] | null>(null);

        const dispatch = useDispatch();

   React.useEffect(() => {

    
  
         getPosts().then((response) => {
               postdata(response.data);
          });
         
        }, []);

 
        const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
          setUsername(event.target.value);
        };
      
        const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
          setPassword(event.target.value);
        };
      
        const handleSubmit = (event: { preventDefault: () => void; }) => {
          event.preventDefault();
          console.log('Username:', username);
          console.log('Password:', password);
          debugger
          if(log && log.find(x => x.Email === username && x.Password === password)){
            const fetchedData1 = log;
            dispatch({ type: 'Store_Login_Data', payload: fetchedData1 });
                navigate('/Home')
           }else{
            alert("username or passeord incorrect")
           }
          }
        
    const handlesignup = ()=>{
      navigate('/Signup')
    }
  return <div>

  <html lang="en">
    <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Login Form Demo</title>
   </head>
   <body>
     <div className="login-wrapper">
      <form onSubmit={handleSubmit} action="" className="form">
        <h2>Login</h2>
        <div className="input-group">
          <input
            type='text'
            value={username}
            onChange={handleUsernameChange}
            name="loginUser"
            id="loginUser" required />
          <label htmlFor="loginUser">User Name</label>
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
        <div className='button-div'>
        <button  className="submit-btn" type='submit'>Login</button>
        <button  className="btn" onClick={handlesignup} >Signup</button>
        </div>
      </form>
    </div>
  </body>
</html>

 </div>
};

export default Login;
