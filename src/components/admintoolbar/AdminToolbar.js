import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {checkUserIsAdmin} from './../../utils/index';
import './styles.scss';

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

export default function AdminToolbar() {
    const {currentUser} = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if(!isAdmin) return null;

    return (
        <div className="adminToolbar">
            <ul>
                <li>
                    <Link to="/admin">
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}
