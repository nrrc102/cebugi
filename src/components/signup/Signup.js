import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import {signUpUserStart} from './../../redux/user/user.actions';
import './styles.scss';

import {NameInput, FormInput, PasswordForm, ConfirmPasswordForm} from './../forms/forminput/FormInput';
import Button from './../forms/button/Button';
import AuthWrapper from './../authwrapper/AuthWrapper';

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const Signup = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const navigate = useNavigate();
    const {currentUser, userErr} = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    };

    useEffect(() => {
        if(currentUser){
            reset();
            history.push('/');
            // navigate('/');
        }

    }, [currentUser]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0){
            setErrors(userErr);
        }
        
    }, [userErr]);


    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
      
    }
        const configAuthWrapper ={
            headline: 'Create new account'
        };

        return(
            <AuthWrapper {...configAuthWrapper}>
                    <div className="formWrap">
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return(
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    <form onSubmit={handleFormSubmit}>
                        <NameInput
                         name="displayName"
                         value={displayName}
                         handleChange={e => 
                         setDisplayName(e.target.value)} />

                        <FormInput  
                        name="email" 
                        value={email} 
                        handleChange={e => setEmail(e.target.value)}/>

                        <PasswordForm 
                        name="password" 
                        value={password} 
                        handleChange={e => setPassword(e.target.value)}/>

                        <ConfirmPasswordForm
                        name="confirmPassword" 
                        value={confirmPassword} 
                        handleChange={e => setConfirmPassword(e.target.value)}/>

                        <Button type="submit">Register</Button>
                    </form>
                    </div>  
            </AuthWrapper> 
        );
}

export default Signup;