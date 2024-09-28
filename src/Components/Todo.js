import React, { useState } from 'react'

const Todo = () => {
    const [inputValue,setInputValue] = useState('')
    const [todos,setTodos] = useState([])
    console.log(inputValue)

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        setTodos([...todos,inputValue])
        setInputValue('')
    }

    const handleDelete = (index)=>{
       const newTodos = [...todos]
       newTodos.splice(index,1);
       setTodos(newTodos);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 m-auto'>          
                <form>
                    <input type='text' value={inputValue} onChange={handleChange}/>
                    <button className='btn btn-outline-success' onClick={handleSubmit}>Add</button>
                </form>
                <ul className='list-group'>
                    {todos.map((todo, index) => (
                    <li className='list-group-item mt-3 d-flex justify-content-between' key={index}>{todo}
                    <button className='btn btn-outline-danger' onClick={() =>handleDelete(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo