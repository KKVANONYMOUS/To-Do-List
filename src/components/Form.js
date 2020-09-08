import React  from 'react'
import '../App.css'

const Form=({setInputText,todos,setTodos,inputText,setstatus})=>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ])
        setInputText("")
        
    }
    const changeStatus=(e)=>{
        setstatus(e.target.value)
    }

        return (
            <div className="center"> 
              <form className="inputForm">
                  <input value={inputText} type='text' onChange={inputTextHandler}></input>
                  <button  onClick={submitHandler} type="submit"><i className='fa fa-plus fa-lg'></i></button>
                </form> 
                <div className="select">
                <select onChange={changeStatus}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='incompleted'>Incompleted</option>
                </select>  
                </div>
            </div>
        )
    
}

export default Form
