import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function BottomAppBar() {
    //snap bar
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = newState => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    //css
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <Typography variant={"h5"}>0 points</Typography>
                    </IconButton>
                    <div className={classes.grow} />
                    <IconButton edge="end" color="inherit" onClick={handleClick({ vertical: 'top', horizontal: 'center'})}>
                        <AddIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                autoHideDuration={1800}
                open={open}
                onClose={handleClose}
                message="Points added."
            />
        </React.Fragment>
    );
}
