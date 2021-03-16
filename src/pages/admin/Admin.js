import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addLguStart, fetchLguStart, deleteLguStart} from './../../redux/lgu/lgu.actions';

import Modal from './../../components/modal/Modal';

import FormSelect from './../../components/forms/formselect/FormSelect';
import Button from './../../components/forms/button/Button';
import LoadMore from './../../components/loadmore/LoadMore';
import CKEDitor from 'ckeditor4-react';

import {
  NameInput, 
  FormInput, 
  PositionInput, 
  StreetInput, 
  BarangayInput,
  ZipCOdeInput,
  PasswordForm} from './../../components/forms/forminput/FormInput';

import './styles.scss';

  const mapState = ({lguData}) => ({
    lgu: lguData.lgu
  });

export default function Admin() {
    const {lgu} = useSelector(mapState);
    const dispatch = useDispatch();  
    const [hideModal, setHideModal] = useState(true);
    const [sex, setSex] = useState('Male');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [street, setStreet] = useState('');
    const [barangay, setBarangay] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {data, queryDoc, isLastPage} = lgu;

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
    
      const handleLoadMore = () => {
        dispatch(
          fetchLguStart({
            startAfterDoc: queryDoc,
            persistProducts: data
          })
        );
      };
    
      const configLoadMore = {
        onLoadMoreEvt: handleLoadMore,
      };

    return (
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
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <th>
                  <h1>Manage LGU</h1>
                </th>
              </tr>
              <tr>
                <td>
                  <table className="results" border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                      <td>
                        Name
                      </td>
                      <td>
                        Position
                      </td>
                      <td>
                        Street
                      </td>
                      <td>
                        Barangay
                      </td>
                      <td>
                        Zip Code
                      </td>
                      <td>
                        Sex
                      </td>
                      <td>
                        Email
                      </td>
                      <td>
                        Password
                      </td>
                      <td>
                        Action
                      </td>
                    </thead>
                    <tbody>
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
                         <tr>
                            <td key={index}>
                              {name}
                            </td>
                            <td>
                              {position}
                            </td>
                            <td>
                              {street}
                            </td>
                            <td>
                              {barangay}
                            </td>
                            <td>
                              {zipCode}
                            </td>
                            <td>
                              {sex}
                            </td>
                            <td>
                              {email}
                            </td>
                            <td>
                              {password}
                            </td>
                            <td>
                              <Button onClick={() => dispatch(deleteLguStart(documentID))}>
                                Delete
                              </Button>
                            </td>
                         </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
  
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {!isLastPage && (
                            <LoadMore {...configLoadMore} />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
