import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'
// import {useNavigate, useParams} from 'react-router-dom'
import {fetchLguStart} from '../../redux/lgu/lgu.actions';
import Lgu from './lgu/index';
import FormSelect from './../forms/formselect/FormSelect';
import './styles.scss';

const mapState = ({lguData}) => ({
    lgu: lguData.lgu
});

export default function LguResults() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const navigate = useNavigate();
    const {filterType} = useParams();
    const {lgu} = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchLguStart({filterType})
        )
    }, [filterType]);

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/search/${nextFilter}`);
        // navigate(`/search/${nextFilter}`);
    };

    if(!Array.isArray(lgu)) return null;

    if(lgu.length < 1){
        return(
         <div className="lgu">
            <p>
                No Search Results.
            </p>
         </div>
        )
     };

     const configFilters = {
        defaultValue: filterType,
        options: [{
            name: 'Show all',
            value: ''
        },{
            name: 'Male',
            value: 'Male'
        },{
            name: 'Female',
            value: 'Female'
        }],
        handleChange: handleFilter
     };

    return (
        <div className="lgus">
            <h1>
                Browse LGU
            </h1>
            
            <FormSelect {...configFilters}/>
           <div className="lguResults">
           {lgu.map((lgu, pos) => {
                const {name, sex, email} = lgu;
                if(!name || !sex  || !email) return null; 

                const configLgu ={
                    name, 
                    sex,
                    email
                }
                return(
                    <Lgu {...configLgu}/>
                );
            })}
           </div>
        </div>
    );
}
