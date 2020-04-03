import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

//Use as a reference instead of importing directly.
const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
}));

export default function PaperBackground() {
    //css
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
            </Paper>
        </React.Fragment>
    );
}
