
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
  const [data,setData] = useState([])
   const dataHandler = (newData) =>{
       setData([...data,newData])
   }
   useEffect(()=>{
    const  localData = JSON.parse(localStorage.getItem('key'))
    setData(localData || [])
    console.log(localData);
  },[])
  
   useEffect(()=>{
     localStorage.setItem('key', JSON.stringify(data))
   },[data])
  

  return (
    <div className="App">
       <TodoAdd onGetData = {dataHandler}/>
       <TodoList data = {data} setData={setData}/>
    </div>
  );
}

export default App;

