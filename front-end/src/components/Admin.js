import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodos, deleteTodo, getAllUsers, deleteUser, toggleViewUser, toggleViewTasks } from '../store/actions/master';

export const Admin=({getTodos, todos, deleteTodo, getAllUsers, users, deleteUser, toggleViewTasks, toggleViewUser}) => {

    const history = useHistory();
    // const { push } = useHistory();

    useEffect(() => {
        getTodos()
        getAllUsers()
    }, [getTodos, getAllUsers]);

    return (
        <div className="header">
            <div className="all-users">
                {
                    users.map(user => {
                        return (
                            <div>
                                <p>Username:{user.username}</p>
                                <p>Password:{user.password}</p>
                                <p>Role:{user.role}</p>
                                <button onClick={() =>deleteUser(user.id)}>Delete</button>   
                            </div>
                        )
                    })
                }
            <div className="all-todos">
                {
                    todos.map(todo => {
                        return (
                            <div>
                                <p>Title:{todo.title}</p>
                                <p>Description:{todo.description}</p>
                                <button onClick={() => history.push('/create-todo')}>Create Todo</button>
                                <button onClick={() => history.push('/change-todo')}>Change Todo</button>
                                <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        users: state.adminReducer.users,
        todos: state.adminReducer.todos
    }
}
export default connect(mapStateToProps, {getAllUsers, deleteUser, getTodos, deleteTodo })(Admin);