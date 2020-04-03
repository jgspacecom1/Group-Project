import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import LensIcon from '@material-ui/icons/Lens';
const useStyles = makeStyles((theme) => ({
    badge: {
        '& > *': {
            margin: theme.spacing(1),
        },
        zIndex: 1,
    },
}));

export default function MyBadge() {
    const classes = useStyles();

    const [num, setNum] = useState(4);

    return (
        <div className={classes.badge}>
            <Badge badgeContent={num} color="primary">
                <LensIcon />
            </Badge>
        </div>
    );
}
