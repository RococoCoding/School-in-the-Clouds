import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../store/actions/master';

export const Volunteer =({getTodos, todos, deleteTodo}) => {

   const history = useHistory();
//    const { push } = useHistory();

    useEffect(() => {
        getTodos()
    }, [getTodos]);

    return (
              <div>   
                 <div className="header">
                 <h2>Tasks that need <em>your</em> help completing...</h2>
                </div>
                    <div className="todo-display">
                        {
                            todos.map(todo => {
                                return (
                                    <div>
                                        <p>Title:{todo.title}</p>
                                        <p>Description:{todo.description}</p>
                                        <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                                    </div>
                                )
                            })
                        }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        todos: state.adminReducer.todos
    }
}
export default connect(mapStateToProps, {getTodos, deleteTodo})(Volunteer);

