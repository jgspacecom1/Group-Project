import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BackButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton color={"primary"} aria-label="back">
                <ArrowBackIosIcon />
            </IconButton>
        </div>
    );
}
