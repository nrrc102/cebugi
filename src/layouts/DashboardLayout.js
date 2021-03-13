import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signOutUserStart } from './../redux/user/user.actions';

import Header from './../components/header/index';
import VerticalNav from './../components/verticalnav/VerticalNav';
import Footer from './../components/footer/Footer';

export default function DashboardLayout(props) {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    }

    return (
        <div className="dashboardLayout">
            <Header {...props}/> 
            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="signOut" onClick={() => signOut()}>
                                    Sign Out
                                </span>
                            </li>
                        </ul>
                    </VerticalNav>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
