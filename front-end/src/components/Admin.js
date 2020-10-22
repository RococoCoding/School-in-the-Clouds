import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../store/actions/userActions';
import { getTodo, deleteTodo } from '../store/actions/todoActions';

const Admin = props => {

    useEffect(() => {
        props.getUsers()
        props.getTodo()
    }, []);

    const history = useHistory();

    console.log(props.todos);

    return (
        <div className="header">
            <div className="all-users">
            <h2>All Users You Can Control</h2>
                {
                    props.users.map(user => {
                        return (
                            <div>
                                <p>Username:{user.username}</p>
                                <p>Password:{user.password}</p>
                                <p>Role:{user.role}</p>
                                <button onClick={() =>props.deleteUser(user.id)}>Delete</button>   
                            </div>
                        )
                    })
                }
            <div className="all-todos">
            <h2>All Todos</h2>
                {
                    props.todos.map(todo => {
                        return (
                            <div>
                                <p>Title:{todo.title}</p>
                                <p>Description:{todo.description}</p>
                                <button onClick={() => history.push('/create-todo')}>Create Todo</button>
                                <button onClick={() => history.push('/change-todo')}>Change Todo</button>
                                <button onClick={() =>props.deleteTodo(todo.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.userReducer.users,
        todos: state.todoReducer.todos
    }
}
export default connect(mapStateToProps, { getUsers, deleteUser, getTodo, deleteTodo })(Admin);