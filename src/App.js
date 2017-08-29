import React, { Component } from 'react';
import './App.css'
import 'normalize.css'
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1,title: 'first todo'},
        {id:2,title: 'second todo'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index) => {
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      )
    })
    return (
      <div className="App">
        <h1>ToDoList</h1>
        <div className = "inputWrapper">
          {/*注意value后面不要加引号*/}
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
