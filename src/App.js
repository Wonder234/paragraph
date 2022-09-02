import {useState} from 'react'
import './App.css';

function App() {
  const[task,setask]=useState({
    username:"",
    firstname:"",
    secondname:"",
  })
  function addfunction(event){
    event.preventDefault()
  }
  return (
  
<div>
  <div>
<h1> WONDER</h1>

  </div>
  <span>sign up</span>
  <br/>

  firstname:<input type="text" name="firstname" value={task.firstname} className="firstname" onChange={addfunction}/> <br/>
  secondname: <input type="text" name="secondname" value={task.secondname} className="secondname" onChange={addfunction}/><br/>

 username:<input type="text" name="username" value={task.username} className='username'onChange={addfunction}/>
 
 <section>
  
 </section>





</div>
  );
}

export default App;
