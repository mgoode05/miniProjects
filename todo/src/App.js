import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: ['bake bread', 'wash feet'],
      inputFieldText: ''
    }
  }

  handleNewSubmit = (e) => {
    e.preventDefault();
    let newToDo = this.state.inputFieldText
    this.setState((prevState) => ({
      todos: [...prevState.todos, newToDo],
      inputFieldText: ''
    }))
  }

  updateFieldValue = (e) => {
    this.setState({
      inputFieldText: e.target.value
    })
  }

  removeTodo = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((item, idx) => idx !== index)
    }))
  }


  render() {
    return (
      <div>
      <h1>To Do</h1>
      <InputField updateFieldValue={this.updateFieldValue} 
                inputFieldText={this.state.inputFieldText}
                handleNewSubmit={this.handleNewSubmit}
              />
      <ToDoListItems todoItems={this.state.todos} removeTodo={this.removeTodo} />
      </div>      
    )
  }
}

const ToDoListItems = ({todoItems, removeTodo}) => (
  <ul>
    {todoItems.map((item, index) => <li onClick={ () => removeTodo(index)} key={index}>{item}</li>)}
  </ul>
)

const InputField = ({updateFieldValue, handleNewSubmit, inputFieldText}) => (
  <form onSubmit={(e) => handleNewSubmit(e)}>
    <input type='text' value={inputFieldText} onChange={(e) => updateFieldValue(e)} />
    <input type='submit' value="New Todo"/>
  </form>
)

export default App;
