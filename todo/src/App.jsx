import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
function App() {

  const [todo,settodo]=useState(" ")
  const [todos,settodos]=useState([])
  // const [edit,setedit]=useState('')

  const handleadd = ()=>{
    if(todo.length >1){
      settodos([...todos,todo])
    settodo(" ")
    }else{
      alert('please enter')
    }
  }
  
  const handleremove = (index)=>{
    const upload = todos.filter((d,i)=>i !==index)
    settodos(upload)

  }

//   const handleupload = (index,items) =>{

//  setedit(index)
//  settodo(items)


//   }


  console.log(todo);
  return (
    <div>
    <div className='d-flex flex-column align-items-center justify-content-center border-danger border rounded' style={{height:'75vh',marginLeft:'420px',marginRight:'420px',marginTop:'40px'}}>
      <h2 className='mt-5 text-danger' >ToDo List</h2>
    <div className='d-flex align-items-center justify-content-center  ' style={{height:'75vh',marginLeft:'120px',marginRight:'80px'}}>
      <input className='form-control   bg-dark text-white ms-5'type="text" placeholder='Enter' value={todo} onChange={(e)=>settodo(e.target.value)} />
    <button className='btn btn-success me-5' onClick={handleadd} style={{marginLeft:'20px'}}>Add</button>
    </div>

<div className='  'style={{marginBottom:'220px',marginRight:'420px'}}>
  {
    todos?.map((items,index)=>(

    //   <form >
    //   <ul>
        
    //     <li >
    //     </li>
    //   </ul>
    // </form>
    <h4>
          {items} <button className='btn ' onClick={ ()=>{handleremove(index)}}><i style={{color:'red'}} class="fa-solid fa-trash "></i> </button> 
             <button className='btn'><i style={{color:'blue'}} class="fa-solid fa-pen-to-square"></i></button>
    </h4>

    ))


  }
</div>




    </div>




    </div>
  )
}

export default App
