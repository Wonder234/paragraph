import {useState} from 'react'

function Signup() {
const[value,setvalue]=useState({
    firstname:"",
    secondname:"",
    username:"",
    password:"",
    confirm:"",
    email:"",
    sex:"",
    checkers:false,

     

})
function setting(event){
    event.preventDefault()
    const{name,value,checked,type}=event.target
    setvalue(prev=>{
        return{
            ...prev,[name]:type==="checkbox"? checked :value
        }
    })

}
function submit(){
alert("sign up successful")
}
  return (
    <div>
         <h2 className='head'>  WONDER</h2>
    <br />
    <h4 className='signup'>sign up</h4>
    
    <form onSubmit={submit} className="form">
<input type="text" name='firstname' placeholder='firstname' value={value.firstname} onChange={setting} /><br />
<input type="text" name='secondname' placeholder='secodname'value={value.secondname} onChange={setting} /><br />
<input type="text" name='username' placeholder="choose your username"  value={value.username}onChange={setting} /><br />
<input type="email" name="email" placeholder='your email' value={value.email}onChange={setting}   /><br />
<input type="password" name="password" placeholder='choose your password' value={value.password} onChange={setting} /><br />
<input type="password" name="confirm" placeholder='re-type password' value={value.confirm}onChange={setting}   /><br />
<input type="checkbox" name="checkers" id="checkers" checked={value.checkers} onChange={setting} />
<label htmlFor="checkers"> Are you friendly?</label>
<fieldset className='field'>
    <legend>sex</legend>
    <input type="radio" name="sex" id="male" value="male" checked={value.sex ==="male"} onChange={setting} />
    <label htmlFor="male">male</label>
    <br />
    <input type="radio" name="sex" id="female" value="female" checked={value.sex ==="female"} onChange={setting} />
    <label htmlFor="female">female</label>
</fieldset>

 <button className='btn'>  SUBMIT</button>
    </form>
    
    </div>
  )
}

export default Signup