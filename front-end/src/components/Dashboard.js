import React from 'react';
import { useSelector } from 'react-redux';
import { Admin } from './Admin';
import { Student } from './Student';
import { Volunteer } from './Volunteer';

const Dashboard = () => {
    const admin = useSelector(state => state.landingReducer.admin);
    const student = useSelector(state => state.landingReducer.student);
    const volunteer = useSelector(state => state.landingReducer.volunteer);

    return (
        <>
            {
                admin ? <Admin /> : null
            }

            {
                student ? <Student /> : null
            }

            {
                volunteer ? <Volunteer /> : null
            }
        </>
    )
}

export default Dashboard;