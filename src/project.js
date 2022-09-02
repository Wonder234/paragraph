import {useState} from 'react'
import operatingSystem from './arrays'

function Project() {
const[task,setask]=useState(0)
const[values,setvalue]=useState([])
function submit(event){
  event.preventDefault()
  let amount=parseInt(task)
  if(task <= 0){
    amount =1
  }
  if (task> 8){
    amount =8
  }
  setvalue(operatingSystem.slice(0,amount))
  

  

}
  return (
    <div>
      <nav className='head'>WONDER</nav>
      <br />
      <form  onSubmit={submit} className="form">
        <label htmlFor="amount" className='label'>paragraphs : </label>
    <input type="number" name="amount" id="amount" value={task} onChange={e=>setask(e.target.value)} className="num" />
    <button type="submit"className='submit'   > generate</button>
    </form>  
    <div>
      {values.map((item,index)=>{
        return <p key={index} className="paragraph">
{item}
        </p>
      })}
      </div> 
    </div>
  )
}

export default Project