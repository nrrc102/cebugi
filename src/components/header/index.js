import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signOutUserStart} from './../../redux/user/user.actions';

import './styles.scss';

const mapState = ({user}) => ({
  currentUser: user.currentUser
});

const Header = ({props, className, onMobileNavOpen, ...rest }) => {
    const dispatch = useDispatch();
    const{currentUser} = useSelector(mapState);
;

    const signOut = () => {
      dispatch(signOutUserStart()); 
    };

    return(
        <header className="header">
          <div className="wrap">
            <div className="logo">
              <Link to="/">
                <h1>Cebugi</h1>
              {/* <img src={Logo} alt="Logo"/>   */}
              </Link>  
            </div>

            {/* <nav>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search">
                    Search
                  </Link>
                </li>
              </ul>
            </nav> */}

            <div className="callToActions">

              {currentUser && (
                <ul>
                  <li>
                   <Link to="/dashboard">
                     My Account
                   </Link>
                  </li>
                  <li>
                    <span onClick={() => signOut()}>LOGOUT</span>
                  </li>
                </ul>
              )}

              {!currentUser && (
                <ul>
                  <li>
                   <Link to="/registration">
                     Register
                   </Link>
                  </li>
                  <li>
                   <Link to="/login">
                     Login
                   </Link>
                  </li>
              </ul>

              )}
              
            </div>
          </div>
        </header>
    )
};

Header.defaultProps = {
  currentUser: null,
}

export default Header;