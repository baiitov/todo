import React from 'react'
import './TodoList.css'

const TodoList = ({ data, setData }) => {
	const deleteHandler = (e) => {
		setData(data.filter((el) => el.id !== e.target.id))
	}
	const checkHandler = (e) => {
		setData(
			data.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		)
	}
	return (
		<ul>
			{data.map((el) => (
				<li className='list' key={el.id}>
					<div className={el.completed ? 'done' : 'task'}>
                    <input
							type='checkbox'
							id={el.id}
							onChange={checkHandler}
							checked={el.completed}
						/>
						<p>
							{el.value}
						</p>
						{el.data}
                      
					</div>
                    <button className='btn' id={el.id} onClick={deleteHandler}>
						delete
					</button>
					
					
				</li>
			))}
		</ul>
	)
}

export default TodoList
