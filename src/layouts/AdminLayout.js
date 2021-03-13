import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signOutUserStart } from './../redux/user/user.actions';
// import PropTypes from 'prop-types';

import Header from './../components/header/index';
import VerticalNav from './../components/verticalnav/VerticalNav';
import Footer from './../components/footer/Footer';

const AdminLayout = props => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return(
        <div className="adminLayout">
            <Header {...props}/>
            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to="/admin">
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/lgu">
                                    LGU
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacttracing">
                                    Contact Tracing
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/changepassword">
                                    Change Password
                                </Link>
                            </li> */}
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
    );
}

export default AdminLayout;
