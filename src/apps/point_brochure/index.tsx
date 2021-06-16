import * as React from "react";
import {
    makeStyles,
    createStyles,
    withStyles,
    Theme,
} from "@material-ui/core/styles";
import CircularProgress, {
    CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const DEFAULT_DATA = {
    tasks:[

    ],
    brochures:[
        {
            name: "",
            reward:[
                {
                    points: 100,
                    gift: "礼物"
                }
            ]
        }
    ]
}

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.light,
        },
    }),
)(LinearProgress);

// Inspired by the former Facebook spinners.
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        padding: {
            padding: theme.spacing(2)
        },
        actions: {
            display: "flex",
            justifyContent: "space-between"
        }
    }),
);


const RewardBoard = () => {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.padding} component={Paper}>
                <Typography variant="h5"><CardGiftcardIcon />一杯奶茶</Typography>
                <Typography variant="caption">120/200</Typography>
                <br />
                <BorderLinearProgress variant="determinate" value={50} />
                <br />
                <div className={classes.actions}>
                    <Button startIcon={<KeyboardArrowLeftIcon />}></Button>
                    <Button endIcon={<NavigateNextIcon />} >上一个</Button>
                </div>
            </Card>
        </>
    );
};

const TaskList = () => {
    return null;
};

// TODO 积分手册工具
const App = () => {
    return (
        <>
            <RewardBoard />
            <TaskList />
        </>
    );
};

export default App;
