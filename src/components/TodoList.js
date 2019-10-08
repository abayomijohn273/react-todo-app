import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    {
                        items.map(item=> <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} />)
                    }
                    <button type="button" onClick={clearList} className="btn btn-block text-capitalize mt-5 btn-danger">Clear List</button>
                </ul>
            </div>
        )
    }
}

export default TodoList
