import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        padding: theme.spacing(2, 2, 0),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        zIndex: 10,
    },
    grow: {
        flexGrow: 1,
    },
    badge: {
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function MyCard() {
    const classes = useStyles();

    const [point, setPoint] = useState(0);
    const [num, setNum] = useState(0);

    const addPoint = () => {
        setPoint(point + 20);
        setNum(num + 1);
    };

    const clearPoint = () => {
        setPoint(0);
        setNum(0);
    };

    return (
        <React.Fragment>
            <div onClick={addPoint}>
                <Card className={classes.root}>
                    <div className={classes.badge}>
                        <Badge badgeContent={num} color="primary">
                        </Badge>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={"https://source.unsplash.com/random"}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="h4" color="textPrimary" component="p">
                            20 points
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" color="textSecondary" component="p">
                        {point} points
                    </Typography>
                    <div className={classes.grow} />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<DoneIcon />}
                        edge="end"
                        onClick={clearPoint}
                    >
                        Add
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
