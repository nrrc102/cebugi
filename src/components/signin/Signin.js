import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {emailSignInStart, facebookSignInStart, googleSignInStart} from './../../redux/user/user.actions';

import {FacebookButton, GoogleButton, LoginButton} from '../forms/button/Button';
import {PasswordForm, FormInput} from './../forms/forminput/FormInput';
import AuthWrapper from './../authwrapper/AuthWrapper';
import './styles.scss';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {Typography} from '@material-ui/core'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }

  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const handleFacebookSignIn = () => {
    dispatch(facebookSignInStart());
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
        <div className="socialSignin">
            <div className="row">
              <GoogleButton onClick={handleGoogleSignIn}>
                Login with Google
                </GoogleButton>
            </div>
           
          </div>
          <Typography
            align="center"
            color="textSecondary"
            variant="body1"
            style={{marginTop: '20px', fontSize: '1.5rem'}}
            >
                or login with email address
            </Typography>
          <FormInput
            value={email}
            handleChange={e => setEmail(e.target.value)}
          />

          <PasswordForm
            value={password}
            handleChange={e => setPassword(e.target.value)}
          />

          <LoginButton>
            LogIn
          </LoginButton>
          <FacebookButton onClick={handleFacebookSignIn}>
                Login with Facebook
              </FacebookButton>

          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;