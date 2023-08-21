import React from 'react';
import { getPosts } from '../Services/LoginServices';
import '../UI/Home.css'
import { useSelector } from 'react-redux';

interface Post {
  Email: string;
  FirstName: string,
  LastName:string,
  Password: String
  // Add other properties if needed
}


const Home: React.FC = () => {
  const [post, setPost] = React.useState<Post[] | null>(null);
  debugger
  const dataArray1 = useSelector((state: any) => state.dataArray1);
  React.useEffect(() => {
    getPosts().then((response) => {
      setPost(response.data);
    });
    
  }, []);
  
  if (!post) return null;
  
  return (
    <div>
    
<html lang="en">
<head>
  <title>Attendance Dashboard | By Code Info</title>
 

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
</head>
<body>
  <div className="container">
    <nav>
      <ul>
        <li><a href="#" className="logo">
          <img src="./pic/logo.jpg"></img>
          <span className="nav-item">Admin</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-dashboard"></i>
          <span className="nav-item">Dashboard</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-comment"></i>
          <span className="nav-item">Message</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-database"></i>
          <span className="nav-item">Report</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-chart-bar"></i>
          <span className="nav-item">Attendance</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-cog"></i>
          <span className="nav-item">Setting</span>
        </a></li>

        <li><a href="#" className="logout">
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-item">Log out</span>
        </a></li>
      </ul>
    </nav>


    <section className="main">
      <div className="main-top">
        <h1>Attendance</h1>
        <i className="fas fa-user-cog"></i>
      </div>
      <div className="users">
    {
      post.map((data,index) =>{
        return  <div className="card">
    
        <h4>{data.FirstName + data.LastName}</h4>
        <p>{data.Email}</p>
        <div className="per">
         <table>
            <tr>
              <td><span>85%</span></td>
              <td><span>87%</span></td>
           </tr>
           <tr>
             <td>Month</td>
             <td>Year</td>
            </tr>
         </table>
         </div>
         <button>Profile</button>
       </div>
      } )
    }   
      </div>

      <section className="attendance">
        <div className="attendance-list">
          <h1>Attendance List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              
              </tr>
            </thead>
            <tbody>
              {
                post.map((data,index) => {
     return   <tr key={index}>
                <td>{index+1}</td>
                <td>{data.FirstName + data.LastName}</td>
                <td>{data.Email}</td>
                <td>{data.Password}</td>
              </tr>
                })
              }
              
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>

</body>
</html>




    </div>
  );
};

export default Home;
