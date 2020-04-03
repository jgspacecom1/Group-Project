import React from "react";
import TopBar from "../Components/TopBar";
import BottomCount from "../Components/BottomCount";
import Paper from '@material-ui/core/Paper';
import GarbageCards from "../Components/GarbageCards";
import BackButton from "../Components/BackButton";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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

export default function GarbageRecycle(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <header>
                <TopBar/>
            </header>
            <main>
                <CssBaseline/>
                <Paper square className={classes.paper}>
                    <div>
                        <BackButton/>
                    </div>
                    <GarbageCards/>
                </Paper>
            </main>
            <footer>
                <BottomCount/>
            </footer>
        </React.Fragment>
    );
}