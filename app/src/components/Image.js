import React, { 
  useState 
} from 'react';
import { Img } from 'react-image';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { motion } from "framer-motion";
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
  loadWrap: {
    display: 'inline-block'
  },
  icon: {
    position: 'absolute',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));

export function Image(props) {
  const { src, alt, className } = props;
  const classes = useStyles();
  
  return (
    <LazyLoad className={classes.loadWrap}>
      <Img
        className={className}
        src={src}
        alt={alt}
        loader={<CircularProgress className={classes.icon} color="primary"/>}
        unloader={<ErrorOutlineOutlinedIcon className={classes.icon} color="disabled"/>}
      />
    </LazyLoad>
  );
};


export function MotionImage(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  
  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
  
  return (
    <div className="App">
      <div
        className={`${pulsing ? "pulse" : ""} loadable`}
        style={{ width: "600px", background: "#ccc" }}
      >
        <motion.img
          initial={{ height: "16rem", opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? "16rem" : "auto",
            opacity: imageLoading ? 0 : 1
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
          src={props.src}
        />
      </div>
    </div>
  );
}