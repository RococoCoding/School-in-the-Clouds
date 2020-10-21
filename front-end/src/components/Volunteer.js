import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../store/actions/master';

export const Volunteer = () => {
    const tasks = useSelector(state => state.studentReducer.todos);
    //const loading = useSelector(state => state.sReducer.isLoading);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    return (
              <div>   
                 <div className='top'>
                 <h2>Tasks that need <em>your</em> help completing...</h2>
                </div>
                    <div className='bot'>
                    {tasks.map(todos => {
                        return (
                            <ul>
                            <div className='tasks' key={todos.id} >
                                {/* <h2>Task Title:</h2> */}
                                <h3 className='upp'>{todos.title}</h3>
                                {/* <h4>Task Descirption:</h4> */}
                                <p>{todos.description}</p>
                            </div>
                            </ul>
                        );
                    })}
            </div>
        </div>
    )
}

