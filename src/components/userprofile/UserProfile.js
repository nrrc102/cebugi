import React from 'react'
import './styles.scss';
import userIMG from './../../assets/user.png';

export default function UserProfile(props) {
    const {currentUser} = props;
    const {name} = currentUser;

    return (
        <div className="userProfile">
            <ul>
                <li>
                    <div className="img">
                        <img src={userIMG}/>
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        {name && name}
                    </span>
                </li>
            </ul>
        </div>
    );
}
