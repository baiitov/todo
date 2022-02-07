import { useReducer, useState } from 'react'
import Modal from './Modal'
import'./TodoAdd.css'

function TodoAdd({onGetData}) {

    const [error, setError] =useState(false)
	const TodoReducer = (state, action) => {
		if (action.type === 'USER_TODO') {
			return {
				value: action.val,
				data: new Date().toLocaleDateString(),
			}
		}

		return {
			value: '',
			isValid: false,
		}
	}

	const [todostate, dispatchTodo] = useReducer(TodoReducer, {
		value: '',
		data: '',
		isValid: false,
	})

	const TodoHandler = (event) => {
		dispatchTodo({ type: 'USER_TODO', val: event.target.value })
	}

	const SubmitHandler = (event) => {
		event.preventDefault()
		const newData = {
			value: todostate.value,
			data: todostate.data,
			id: Math.random().toString(),
            completed : false
		}
        if(todostate.value.trim().length === 0){
          setError({
              title:'type something'
          })
            return
        }
      onGetData(newData)
	}
    const ErrorHandler=()=>{
		setError(null)
	}

	return (
		<>
        {error && <Modal title={error.title} onConfirm={ErrorHandler}/>}
	
		<form className='container' onSubmit={SubmitHandler}>
				<input className='inp' onChange={TodoHandler}></input>
				<button className='btn' type='submit'>ADD</button>
			</form>
	
			
		</>
	)
}

export default TodoAdd

