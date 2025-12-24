import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

import { useState, useEffect, useRef } from "react";


function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  useEffect(() => {
    let todoString = localStorage.getItem("Todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }

  const handleEdit = (e, id) => {
    let t = Todos.filter(i => i.id == id)
    setTodo(t[0].Todo)
    let newTodos = Todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()

  }
  const handleDelete = (e, id) => {
    let newTodos = Todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
        saveToLS()


  }
  const handleAdd = () => {
    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }])
    setTodo("")
    console.log(Todos)
        saveToLS()

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = Todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...Todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
        saveToLS()


  }

  return (
    <>
      <Navbar />
      <div className=" container bg-violet-200 mx-auto my-4 rounded-2xl min-h-[80vh] p-5">
        <div className="todo">


          <h1>Add Todos</h1>
          <input onChange={handleChange} value={Todo} className=" bg-white  rounded-xs w-80" type="text" />
          <button onClick={handleAdd} className="font-semibold py-1 rounded-md mx-2 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Add</button>
        </div>
        <h2 className="font-semibold my-2">Your Todos</h2>
        {Todos.length === 0 && <div>No todos display here</div>}
        {Todos.map(item => {

          return <div key={item.id} className="todos flex w-1/2 justify-between my-3">
            <div className="flex gap-10 my-1">
              <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} id="" />

              <div className={item.isCompleted ? "line-through" : ""}>{item.Todo}</div>
            </div>
            <div className="button">
              <button onClick={(e) => { handleEdit(e, item.id) }} className="font-semibold py-1 rounded-md mx-1 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Edit</button>
              <button onClick={(e) => { handleDelete(e, item.id) }} className="font-semibold py-1 rounded-md mx-1 hover:bg-violet-800 cursor-pointer px-4 w-fit bg-violet-700 text-white">Delete</button>
            </div>
          </div>
        })}
      </div>
    </>
  )
}
export default App
