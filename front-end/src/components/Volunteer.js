import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodo, deleteTodo } from "../store/actions/todoActions";
// import { axiosWithAuth } from '../store/utils/axiosWithAuth';

const Volunteer = props => {

    useEffect(() => {
      props.getTodo()
    }, []);

    const history = useHistory();

    console.log(props);

    return (
              <div>   
                 <div className="header">
                 <h2>Todos that need your attention...</h2>
                </div>
                    <div className="todo-display">
                        {
                             props.todos.map(todo => {
                                return (
                                    <div>
                                        <p>Title:{todo.title}</p>
                                        <p>Description:{todo.description}</p>
                                        <button onClick={() =>props.deleteTodo(todo.id)}>Delete</button>
                                    </div>
                                )
                            })
                        }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        todos: state.todoReducer.todos
    }
}
export default connect(mapStateToProps, { getTodo, deleteTodo })(Volunteer);

