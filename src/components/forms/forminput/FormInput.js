import React from 'react';
// import './styles.scss';

import {
    TextField,
    makeStyles,
    Typography
  } from '@material-ui/core';

  const useStyles = makeStyles({
    form:{
        fontWeight: 400,
        textAlign: 'left',
        outline: 'none',
        width: '100%',
        fontSize: '1.5rem',
        lineHeight: 1
    },
  });


export const FormInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className={classes.emailForm}> 
            {label && (
                <label>{label}</label>
            )}
        

            <TextField 
            type="email"
            name="email"
            variant="outlined"
            label="Email Address"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const PasswordForm = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}

            <TextField 
            type="password"
            name="password"
            variant="outlined"
            label="Password"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const ConfirmPasswordForm = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}

            <TextField 
            type="password"
            name="password"
            variant="outlined"
            label="Confirm Password"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const NameInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="name"
            variant="outlined"
            label="Full Name"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const PositionInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="position"
            variant="outlined"
            label="Position"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const SexInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="sex"
            variant="outlined"
            label="Sex"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const StreetInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="street"
            variant="outlined"
            label="Street"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const BarangayInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="barangay"
            variant="outlined"
            label="Barangay"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}

export const ZipCOdeInput = ({handleChange, label, ...otherProps}) => {
    const classes = useStyles();
    return (
        <div className="formRow"> 
            {label && (
                <label>{label}</label>
            )}
            <TextField 
            type="text"
            name="zipcode"
            variant="outlined"
            label="Zip Code"  
            margin="normal" 
            fullWidth 
            className={classes.form}
            onChange={handleChange} 
            {...otherProps} />
        </div>
    );
}




export default FormInput



