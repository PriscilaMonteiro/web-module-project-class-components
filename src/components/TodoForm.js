import React, { Component } from 'react'
import styles from '../styles/style.css'

export default class TodoForm extends Component {
  constructor(){
    super();
    this.state ={
      todoText: ''
    }
  }

  handleChanges = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
    this.setState({
      todoText: '',
    });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          id="todo-input" 
          name="todoText"
          type="text" 
          value={this.state.todoText} 
          onChange={this.handleChanges} 
          placeholder="..."/>
        <button className="addBtn">Add Todo</button>
        
    </form>
    )
  }
}



