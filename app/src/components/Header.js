import React, {
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; // alpha,
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    flexGrow: 1,
    top: 0,
    zIndex: 99,
  },
  appBar: {
    border: 'none',
    boxShadow: 'none',
    position: 'relative',
    color: theme.palette.primary.light,
    maxWidth: '1080px',
    margin: 'auto',
    '& p': {
      color: theme.palette.common.black,
      marginLeft: '1vw',
      marginRight: '1vw',
      fontSize: '1.25rem',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  grow: {
    flexGrow: 1
  },
}));

export default function Header(props) {

  const classes = useStyles();
  const [overlay, setOverlay] = useState(false);
  
  useEffect(() => {
    return () => {};
  }, []);

  const onChangeOverlay = () => {
    setOverlay(!overlay);
  }

  const onNavClick = (index) => {

  }

  return (
    <div className={classes.root}>
      <AppBar 
        position="static" 
        className={classes.appBar}>
        <Toolbar>
          <Typography variant={"subtitle2"} component={'p'}>
            Seongjae Moon
          </Typography>
          <div className={classes.grow}/>
          <Typography variant={"subtitle2"} component={'p'} onClick={() => {onNavClick(0)}}>
            About
          </Typography>
          <Typography variant={"subtitle2"} component={'p'} onClick={() => {onNavClick(1)}}>
            Skill
          </Typography>
          <Typography variant={"subtitle2"} component={'p'} onClick={() => {onNavClick(2)}}>
            Project
          </Typography>
          <Typography variant={"subtitle2"} component={'p'} onClick={() => {onNavClick(3)}}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};