import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));



export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="First name" required />
            <TextField id="standard-basic" label="Last name" required />
            <TextField id="standard-basic" label="Email" type='email' required />
            <TextField id="standard-basic" label="Password" type='password' required />
            <TextField id="standard-basic" label="Contact No" required />
            <Button variant="contained" color="primary">
                REGISTER
            </Button>
        </form>
    );
}
