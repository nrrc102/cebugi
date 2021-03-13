import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import {checkUserIsAdmin} from './../utils/index';

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const useAdminAuth = props => {
    const {currentUser} = useSelector(mapState);
    const history = useHistory();
    // const navigate = useNavigate();

    useEffect(() => {
        if(!checkUserIsAdmin(currentUser)){
            history.push('/login');
            // navigate('/login');
        }
    }, [currentUser]);

    return currentUser;
}

export default useAdminAuth;