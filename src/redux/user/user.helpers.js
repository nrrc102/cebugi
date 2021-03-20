import {auth, FacebookProvider} from './../../firebase/Utils';

export const handleResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/login'
    };

    return new Promise((resolve, reject) => {
       auth.sendPasswordResetEmail(email, config)
        .then(() => {
            resolve();
        })
        .catch(() => {
           const err = ['Email not found. Please try again.'];
           reject(err); 
        });
    });
};

export const handleChangePasswordAPI = (password) => {
    // const config = {
    //     url: 'http://localhost:3000/admin'
    // };
    return new Promise((resolve, reject) => {
         auth.currentUser.updatePassword(password)
         .then(() => {
             const success = ['Successfully Changed'];
             resolve(success);
         })
         .catch(() => {
             reject();
         })
    })
}

export const handleLinkAccount = () => {
    const user = auth.currentUser;
    // merge(user, FacebookProvider);
    merge(user);
}

const merge = (prevUser, provider) => {
    auth.signInWithPopup(provider)
    .then((user) => {
        const secAccCred = user.credential;
        auth.currentUser.delete()
        .then(() => {
            return prevUser.linkWithCredential(secAccCred);
        })
        .then(() => {
            auth.signInWithCredential(secAccCred);
            console.log('Linked with Facebook succesfully!');
        })
        
    })
    .catch((error) => {
        console.log(error)
    })
}


