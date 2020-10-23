import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTodo } from '../store/actions/todoActions';

const TodoList = props => {

  // useEffect(() => {
  //   props.getTodo()
  // }, []);

  const history = useHistory();

  return (
    <div className="todo-list">
      <h2>Updated Todo List:</h2>
      {
        props.todos.map(todo => {
          return (
            <div>
                <p>Title:{todo.title}</p>
                <p>Description:{todo.description}</p>
            </div>
        )})
      }
    
    </div>
  )
}

const mapStateToProps = state => {
  return{
    todos: state.todoReducer.todos
  }
}
export default connect(mapStateToProps, { getTodo })(TodoList);