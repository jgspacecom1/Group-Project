import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from "../Components/TopBar";
import LevelCard from "../Components/LevelCard";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import BackButton from "../Components/BackButton";
import Paper from '@material-ui/core/Paper';

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
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function LevelPage() {
    //css
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <header>
                <TopBar/>
            </header>
            <main>
                <Paper square className={classes.paper}>
                    <div>
                        <BackButton/>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            <LevelCard info={{imgURL: "https://source.unsplash.com/random", levelName: "First Level", levelContent: "This is for first level player."}}/>
                            <LevelCard info={{imgURL: "https://source.unsplash.com/random", levelName: "Second Level", levelContent: "This is for second level player."}}/>
                            <LevelCard info={{imgURL: "https://source.unsplash.com/random", levelName: "Third Level", levelContent: "This is for third level player."}}/>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </React.Fragment>
    );
}
