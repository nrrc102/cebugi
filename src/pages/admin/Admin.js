import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addLguStart, fetchLguStart, deleteLguStart} from './../../redux/lgu/lgu.actions';
import Remove from './../../assets/remove.svg'
import './styles.scss';

//components
import FormSelect from './../../components/forms/formselect/FormSelect';
import Button from './../../components/forms/button/Button';
import Modal from './../../components/modal/Modal';
import {
  NameInput, 
  FormInput, 
  PositionInput, 
  StreetInput, 
  BarangayInput,
  ZipCOdeInput,
  PasswordForm} from './../../components/forms/forminput/FormInput';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tablecell: {
    fontSize: '2rem',
    fontWeight: 400
},
  cells: {
  fontSize: '1.6rem',
  fontWeight: 400
}
});

  const mapState = ({lguData}) => ({
    lgu: lguData.lgu
  });

export default function Admin() {
    const {lgu} = useSelector(mapState);
    const dispatch = useDispatch();  
    const classes = useStyles();
    const [hideModal, setHideModal] = useState(true);
    const [sex, setSex] = useState('Male');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [street, setStreet] = useState('');
    const [barangay, setBarangay] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    useEffect(() => {
      dispatch(
        fetchLguStart()
      );
    }, []);

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal,
      };
    
    const resetForm =() => {
      setHideModal(true);
      setSex('Male');
      setName('');
      setPosition('');
      setStreet('');
      setBarangay('');
      setZipCode('');
      setEmail('');
      setPassword('');
    };
    
      const handleSubmit = e => {
        e.preventDefault();
    
        dispatch(
          addLguStart({
            sex,
            name,
            position,
            street,
            barangay,
            zipCode,
            email,
            password  
          })
        );
        resetForm();
      };

  return(
    <div className="admin">
      <div className="callToActions">
      <ul>
        <li>
          <Button 
          onClick={() => toggleModal()}
          >
            Create an Account
          </Button>
        </li>
      </ul>
    </div>

    <Modal {...configModal}>
      <div className="addNewProductForm">
        <form 
        onSubmit={handleSubmit}
        >

          <h2>
            Create an Account
          </h2>
          <NameInput
            value={name}
            handleChange={e => setName(e.target.value)}
          />
          <PositionInput
            value={position}
            handleChange={e => setPosition(e.target.value)}
          />
          <FormSelect
            options={[{
              value: "Male",
              name: "Male"
            }, {
              value: "Female",
              name: "Female"
            }]}
            handleChange={e => setSex(e.target.value)}
          />
          <StreetInput
            value={street}
            handleChange={e => setStreet(e.target.value)}
          />
           <BarangayInput
            value={barangay}
            handleChange={e => setBarangay(e.target.value)}
          />
          <ZipCOdeInput
            value={zipCode}
            handleChange={e => setZipCode(e.target.value)}
          />
          <FormInput
            value={email}
            handleChange={e => setEmail(e.target.value)}
          />
          <PasswordForm
            value={password}
            handleChange={e => setPassword(e.target.value)}
          />

          {/* <CKEDitor
            onChange={evt => setProductDesc(evt.editor.getData())}
          />  */}

          <br />

          <Button type="submit">
            Create
          </Button>

        </form>
      </div>
    </Modal>
    <div className="manageLgu">
    <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablecell} >Name</TableCell>
              <TableCell className={classes.tablecell}>Position</TableCell>
              <TableCell className={classes.tablecell}>Street</TableCell>
              <TableCell className={classes.tablecell}>Barangay</TableCell>
              <TableCell className={classes.tablecell}>Zipcode</TableCell>
              <TableCell className={classes.tablecell}>Sex</TableCell>
              <TableCell className={classes.tablecell}>Email</TableCell>
              <TableCell className={classes.tablecell}>Password</TableCell>
              <TableCell className={classes.tablecell}>Action</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {lgu.map((lgu, index) => {
                const {
                  name,
                  position,
                  street,
                  barangay,
                  zipCode,
                  sex,
                  email,
                  password,
                  documentID
                } = lgu
                return (
                     <TableRow key={index}>
                        <TableCell className={classes.tablecell} component="th" scope="row">
                        {name}
                         </TableCell>
                         <TableCell className={classes.cells}>{position}</TableCell>
                         <TableCell className={classes.cells}>{street}</TableCell>
                         <TableCell className={classes.cells}>{barangay}</TableCell>
                         <TableCell className={classes.cells}>{zipCode}</TableCell>
                         <TableCell className={classes.cells}>{sex}</TableCell>
                         <TableCell className={classes.cells}>{email}</TableCell>
                         <TableCell className={classes.cells}>{password}</TableCell>
                       {/* <Button onClick={() => dispatch(deleteLguStart(documentID))}>
                         Delete
                       </Button> */}
                         <img src={Remove}  onClick={() => dispatch(deleteLguStart(documentID))} />
                  </TableRow>
                 )
              })}
            </TableBody>
        </Table>
      </TableContainer>
     </div>
   </div>
  )
            }