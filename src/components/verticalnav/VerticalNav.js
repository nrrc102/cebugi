import React from 'react';
import {useSelector} from 'react-redux';
import UserProfile from './../userprofile/UserProfile';
import './styles.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  })

export default function VerticalNav({children}) {
    const {currentUser} = useSelector(mapState);

    const configUserProfile = {
        currentUser
    }

    return (
        <div className="verticalNav">

            <UserProfile {...configUserProfile}/>
            <div className="menu">
                {children}
            </div>
        </div>
    );
}
