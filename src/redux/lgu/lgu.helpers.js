import {firestore} from './../../firebase/Utils';

export const handleAddLgu = lgu => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('lgu')
            .doc()
            .set(lgu)
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleFetchLgu = ({filterType}) => {
    return new Promise((resolve, reject) => {

        let ref =  firestore.collection('lgu').orderBy('createdDate');

        if(filterType) ref = ref.where('sex', '==', filterType)

            ref
            .get()
            .then(snapshot => {
                const lguArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(lguArray);
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleDeleteLgu = documentID =>{
    return new Promise((resolve,reject) => {
        firestore
            .collection('lgu')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve(); 
            })
            .catch(err => {
                reject(err)
            })
    });
}

export const handleFetchLguT = (lguID) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('lgu')
        .doc(lguID)
        .get()
        .then(snapshot => {
  
          if (snapshot.exists) {
            resolve({
              ...snapshot.data(),
              documentID: lguID
            });
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }