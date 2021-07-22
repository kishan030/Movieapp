import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Login.css'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import Tab from '../tab/Tab'




function getModalStyle() {

    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${top}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Login() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [loginStatus, setloginStatus] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Tab></Tab>
        </div>
    );

    return (
        <div className='login'>
            {
                loginStatus === true ?
                    <div className='login_1'>
                        {/* <Button
                            color='primary'
                            variant='contained'
                        >
                            Book Show

                        </Button> */}

                        <Button
                            variant='contained'
                            color='default'
                        >
                            Logout
                        </Button>

                    </div>
                    :
                    <div className='login_2'>
                        <Button
                            variant='contained'
                            color='default'
                            onClick={handleOpen}
                        >
                            Login
                        </Button>
                    </div>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>

    )
}
