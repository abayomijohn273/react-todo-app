import React, {useState} from 'react';
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid"
const App = () => {
  const [items, setItems] = useState([])
  const [id, setId] = useState(uuid())
  const [item, setItem] = useState("")
  const [editItem, setEditItem] = useState(false)

  //a function that will reveal the chaages

  const handleChange = (e) =>{
    let val = e.target.value
    setItem(val)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: id,
      title: item

    }

    console.log(newItem)
    const updatedItems = [...items, newItem]

    setItems(updatedItems)
    setItem("")
    setId(uuid())
    setEditItem(false)
  }
  const clearList = () => {
    setItems([])
  }
  const handleDelete = (id) => {
    const filteredItem = items.filter(item => item.id !== id)
    setItems(filteredItem)
  }
  const handleEdit = (id) => {
    const filteredItem = items.filter(item => item.id !== id)

    const selectedItem = items.find(item => item.id === id)
    setItems(filteredItem)
    setItem(selectedItem.title)
    setEditItem(!editItem)
    setId(id)
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            Todo Input
          </h3>
          <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={editItem}/>
          <TodoList items={items} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit}/>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
