import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVolunteers } from '../store/actions/master';

export const Student = () => {
   
    const [volunteers, setVolunteers] = useState();
    const history = useHistory();

    useEffect(() => {
        getVolunteers()
    }, [getVolunteers]);

    return (
        <div className="header">
            <div className="all-volunteers">
                {
                    volunteers.map(volunteer => {
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

function mapStateToProps(state) {
    return{
        volunteers: state.studentReducer.volunteers
    }
}
export default connect(mapStateToProps, {getVolunteers})(Student);