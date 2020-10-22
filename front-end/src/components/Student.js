import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVolunteers } from '../store/actions/userActions';

const Student = props => {
   

    useEffect(() => {
        props.getVolunteers()
    }, []);

    const history = useHistory();

    return (
        <div className="header">
            <div className="all-volunteers">
               <h2>Available Volunteers</h2>
                {
                    props.volunteers.map(volunteer => {
                        return (
                            <div>
                                <p>Username:{volunteer.username}</p>
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
        volunteers: state.userReducer.volunteers
    }
}
export default connect(mapStateToProps, { getVolunteers })(Student);