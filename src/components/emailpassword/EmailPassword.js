import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetPasswordStart, resetUserState} from './../../redux/user/user.actions';
import {useHistory} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import './styles.scss';

import AuthWrapper from './../authwrapper/AuthWrapper';
import FormInput from './../forms/forminput/FormInput';
import Button from './../forms/button/Button';

const mapState = ({user}) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
});

const EmailPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const navigate = useNavigate();
    const {resetPasswordSuccess, userErr} = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(resetPasswordSuccess){
            dispatch(resetUserState());
            history.push('/login');
            // navigate('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0){
            setErrors(userErr);
        }
    }, [userErr]);
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({email}));
    }
        
        const configAuthWrapper = {
            headline: 'Reset Password'
        };

        return(
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <form onSubmit={handleSubmit}>
                        <FormInput type="email" name="email" value={email} placeholder="Email" handleChange={e => setEmail(e.target.value)} />
                        <Button type="submit">Reset</Button>
                    </form>
                </div>
            </AuthWrapper>
        );
    }

export default EmailPassword;