import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updatePasswordStart, resetUserState} from './../../redux/user/user.actions';
import {useHistory} from 'react-router-dom';
// import './styles.scss';

import AuthWrapper from './../authwrapper/AuthWrapper';
import {NewPasswordForm}  from './../forms/forminput/FormInput';
import Button from './../forms/button/Button';

const mapState = ({user}) => ({
    updatePasswordSucess: user.updatePasswordSucess,
    userErr: user.userErr
});

const ChangePassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {updatePasswordSucess, userErr} = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(updatePasswordSucess){
            dispatch(resetUserState());
            history.push('/login');
        }
    }, [updatePasswordSucess]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0){
            setErrors(userErr);
        }
    }, [userErr]);
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updatePasswordStart({password}));
    }
        
        const configAuthWrapper = {
            headline: 'Set New Password'
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
                        <NewPasswordForm value={password} handleChange={e => setPassword(e.target.value)} />
                        {/* <FormInput type="password" name="password" value={confirmPassword} placeholder="Confirm Password" handleChange={e => setConfirmPassword(e.target.value)} /> */}
                        <Button type="submit">Change</Button>
                    </form>
                </div>
            </AuthWrapper>
        );
    }

export default ChangePassword;

