import {auth} from './../../firebase/Utils';

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

// export const handleChangePasswordAPI = (email) => {
//     const config = {
//         url: 'http://localhost:3000/login/changepassword'
//     };
    
//     return new Promise((resolve, reject) => {
//         auth
//     })
// }