// import '~/styles/smartphone.css'
import React, { useState, useRef } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Image } from "~/components/Image";
import seongjaeIMG from "~/styles/images/me/seongjae.jpeg";
import seongjaeMP4 from "~/styles/images/me/seongjae.mp4";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import StepConnector from "@material-ui/core/StepConnector";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import GroupIcon from "@material-ui/icons/Group";
import Check from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Footer from "~/components/Footer";
import { firebase } from "~/libs/index";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import WebIcon from "@material-ui/icons/Web";
import LinearProgress from "@material-ui/core/LinearProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// -- Image --
import betriverLogo from "~/styles/images/projects/betriever_logo.jpeg";
import betriverApp from "~/styles/images/projects/betriever_app2.png";
import ajm from "~/styles/images/projects/ajm.jpeg";
import ajm1 from "~/styles/images/projects/ajm2.png";
import candy from "~/styles/images/projects/candy2.jpeg";
import candy1 from "~/styles/images/projects/candy.jpeg";
import alcose from "~/styles/images/projects/alcose1.png";
import alcose1 from "~/styles/images/projects/alcose2.png";
import fastcampus from "~/styles/images/projects/fastcampus.png";
import fastcampus1 from "~/styles/images/projects/fastcampus2.png";
import newdata from "~/styles/images/projects/newdata.png";
import newdata1 from "~/styles/images/projects/newdata2.png";
import washfriends from "~/styles/images/projects/washfriends.png";
import washfriends1 from "~/styles/images/projects/washfriends2.png";
import washpeople from "~/styles/images/projects/washpeople.png";
import washpeople1 from "~/styles/images/projects/washpeople2.png";
import washstory from "~/styles/images/projects/washstory.png";
import washstory1 from "~/styles/images/projects/washstory2.png";
import washfresh from "~/styles/images/projects/washfresh.png";
import washfresh1 from "~/styles/images/projects/washfresh2.png";
import yonsei from "~/styles/images/projects/yonsei.png";
import yonsei1 from "~/styles/images/projects/yonsei2.png";
import cubensys from "~/styles/images/projects/cubensys.png";
import cubensys1 from "~/styles/images/projects/cubensys2.png";
import def from "~/styles/images/projects/def.png";
import def1 from "~/styles/images/projects/def2.png";
import friendsstudy from "~/styles/images/projects/fs.jpeg";
import friendsstudy1 from "~/styles/images/projects/fs1.jpeg";
import sos from "~/styles/images/projects/sos1.jpeg";
import sos1 from "~/styles/images/projects/sos2.jpeg";
import newvis from "~/styles/images/projects/newvis.png";
import newvis1 from "~/styles/images/projects/newvis2.PNG";
// import wapos from '~/styles/images/projects/wapos.png';
import voice from "~/styles/images/projects/voice.png";
import voice1 from "~/styles/images/projects/voice2.png";
import baro from "~/styles/images/projects/baro.png";
import baro1 from "~/styles/images/projects/baro2.png";
import firstcuola from "~/styles/images/projects/firstcuola.png";
import firstcuola1 from "~/styles/images/projects/firstcuola2.png";
import yfintech from "~/styles/images/projects/yfintech.png";
import yfintech1 from "~/styles/images/projects/yfintech2.png";
import impactus from "~/styles/images/projects/impactus.png";
import impactus2 from "~/styles/images/projects/impactus2.png";
// -- Image --

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  appBarRoot: {
    position: "-webkit-sticky" /* Safari */,
    position: "sticky",
    flexGrow: 1,
    top: 0,
    zIndex: 99,
  },
  appBar: {
    border: "none",
    boxShadow: "none",
    position: "relative",
    color: theme.palette.primary.light,
    margin: "auto",
    "& p": {
      color: theme.palette.common.black,
      marginLeft: "1vw",
      marginRight: "1vw",
      fontSize: "1.25rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& p": {
        fontSize: ".75rem",
      },
    },
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    position: "relative",
    margin: 0,
    padding: 0,
    // width: '100vw',
    // height: '100vh',
  },
  about: {
    background: theme.palette.secondary.main,
  },
  aboutWrap: {
    paddingTop: "7vh",
    textAlign: "left",
    maxWidth: "1080px",
    margin: "auto",
    "& video": {
      width: "100%",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3vh",
      maxWidth: "100%",
    },
  },
  aboutTitle: {
    textAlign: "center",
    color: theme.palette.common.white,
    "& img": {
      borderRadius: "50%",
      width: "150px",
      height: "auto",
    },
    "& h5": {
      color: theme.palette.secondary.dark,
    },
    // [theme.breakpoints.down('sm')]: {
    //   textAlign: 'center'
    // }
  },
  aboutContent: {
    paddingTop: "3vh",
    color: theme.palette.common.white,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3vw",
      paddingRight: "3vw",
      "& h2": {
        fontSize: "1rem",
      },
      "& p": {
        fontSize: ".75rem",
      },
    },
  },
  aboutIconWrap: {
    display: "inline-block",
    cursor: "pointer",
    margin: ".5rem",
    color: theme.palette.common.white,
  },
  aboutInterest: {
    marginTop: "3vh",
    marginBottom: "3vh",
    "& h5": {
      fontWeight: "700",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      "& h5": {
        fontSize: "1.5rem",
      },
      "& h6": {
        fontSize: ".75rem",
      },
    },
  },
  skill: {
    background: theme.palette.secondary.light,
  },
  skillWrap: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
    maxWidth: "980px",
    margin: "auto",
    textAlign: "center",
    color: theme.palette.common.white,
    "& h3": {
      paddingBottom: "2vh",
    },
    "& h5": {
      paddingTop: "2vh",
    },
  },
  skillItem: {
    paddingTop: "3vh",
    "& img": {
      margin: ".25rem",
    },
  },
  skillSmImage: {
    width: 40,
    height: 40,
    diplay: "inline",
    position: "relative",
  },
  project: {
    background: theme.palette.secondary.main,
  },
  projectWrap: {
    paddingtop: "3vh",
    paddingTop: "7vh",
    paddingBottom: "7vh",
    width: "100%",
    maxWidth: "980px",
    margin: "auto",
    textAlign: "center",
    color: theme.palette.common.white,
    "& h3": {
      paddingBottom: "5vh",
    },
    "& h5": {
      paddingTop: "2vh",
    },
  },
  projectTitle: {
    textAlign: "left",
    fontWeight: "700",
    color: theme.palette.primary.main,
  },
  projectStepWrap: {
    width: "980px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& strong": {
      fontSize: "1rem",
      fontWeight: 800,
    },
  },
  projectImage: {
    position: "relative",
    width: "200px",
    height: "400px",
    // maxHeight: '450px',
    border: "5px solid #000",
    borderRadius: "30px",
    marginLeft: ".25vw",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: 0,
    },
  },
  projectSmImage: {
    position: "relative",
  },
  projectSpecImage: {
    position: "relative",
  },
  projectDetail: {
    marginTop: "1.25vh",
    fontSize: "1rem",
    textAlign: "left",
  },
  experience: {
    background: theme.palette.secondary.light,
  },
  experienceWrap: {
    width: "980px",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    margin: "auto",
    textAlign: "center",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& h3": {
      paddingBottom: "5vh",
    },
    "& h5": {
      paddingTop: "2vh",
    },
    "& .MuiStepLabel-active": {
      fontSize: "1.25rem",
    },
  },
  contact: {
    background: theme.palette.secondary.main,
  },
  contactWrap: {
    width: "980px",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    margin: "auto",
    textAlign: "center",
    color: theme.palette.common.white,
    "& h3": {
      paddingBottom: "5vh",
    },
    "& h5": {
      paddingTop: "2vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btn: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: "150px",
    height: "50px",
    color: theme.palette.secondary.dark,
    fontWeight: "800",
  },
  contactContent: {
    // height: '10vh'
  },
  smNone: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileHorizontalWrapper: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      overflow: "auto",
    },
  },
}));

const CssTextField = withStyles({
  color: "#fff !important",
  root: {
    "& placeholder": {
      color: "#272935",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red",
      "&:placeholder": {
        color: "#272935",
      },
    },
    "& .MuiOutlinedInput-root": {
      background: "#fff",
      color: "#272935",
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  },
})(TextField);

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(254,255,204) 0%, rgb(204,204,0) 50%, rgb(0,0,0) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, rgb(254,255,204) 0%, rgb(204,204,0) 50%, rgb(0,0,0) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, rgb(254,255,204) 0%, rgb(204,204,0) 50%, rgb(0,0,0) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Check />,
    2: <Check />,
    3: <Check />,
    4: <GroupIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

export default function Home(props) {
  const classes = useStyles();
  const sectionRef = useRef([null, null, null, null, null]);
  const [state, setState] = useState({
    name: "",
    contact: "",
    content: "",
    alertMsg: "",
    snackbarMsg: "",
    snackbarOpen: false,
    loading: false,
  });
  const mobile = useMediaQuery("(max-width:568px)");

  const onNavClick = (index) => {
    if (sectionRef && sectionRef.current[index]) {
      sectionRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const onClickIcon = (value) => {
    window.open(value);
  };

  const onInputChange = (event) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  const onAlertChange = () => {
    setState({
      ...state,
      alertMsg: "",
    });
  };

  const handleSnackbar = () => {
    setState((prev) => ({
      ...prev,
      snackbarOpen: !state.snackbarOpen,
    }));
  };

  const onSend = () => {
    if (!state.name || !state.contact || !state.content) {
      setState({
        ...state,
        alertMsg: "모든 정보를 채워주세요.",
      });
      return;
    }
    setState({
      ...state,
      loading: true,
    });
    firebase
      .firestore()
      .collection("contact")
      .add({
        name: state.name || "",
        contact: state.contact || "",
        content: state.content || "",
        timestamp: new Date().getTime(),
      })
      .then(() => {
        setState((prev) => ({
          ...prev,
          snackbarOpen: true,
          snackbarMsg: "정상적으로 등록되었습니다.",
          name: "",
          contact: "",
          content: "",
          alertMsg: "",
        }));
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert("데이터를 저장하는데 오류가 있습니다.");
      })
      .finally(() => {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={state.snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbar}
        message={state.snackbarMsg}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <AppBar className={classes.appBarRoot} position="static">
        <Toolbar className={classes.appBar}>
          <Typography
            variant={"subtitle2"}
            component={"p"}
            onClick={() => {
              onNavClick(0);
            }}
          >
            About
          </Typography>
          <Typography
            variant={"subtitle2"}
            component={"p"}
            onClick={() => {
              onNavClick(1);
            }}
          >
            Skills
          </Typography>
          <Typography
            variant={"subtitle2"}
            component={"p"}
            onClick={() => {
              onNavClick(2);
            }}
          >
            Projects
          </Typography>
          <Typography
            variant={"subtitle2"}
            component={"p"}
            onClick={() => {
              onNavClick(3);
            }}
          >
            Experiences
          </Typography>
          <Typography
            variant={"subtitle2"}
            component={"p"}
            onClick={() => {
              onNavClick(4);
            }}
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        ref={(el) => (sectionRef.current[0] = el)}
        className={`${classes.about} ${classes.section}`}
      >
        <Grid container className={classes.aboutWrap}>
          <Grid item xs={12} sm={4} className={classes.aboutTitle}>
            <Image src={seongjaeIMG} alt="about seongjae" />
            <Typography variant={"h4"} component={"h4"}>
              Seongjae Moon
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              Software Engineer
            </Typography>
            <IconButton
              onClick={() => {
                onClickIcon("https://github.com/SeongJaeMoon");
              }}
              aria-label="github"
              component="span"
              className={classes.aboutIconWrap}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onClickIcon("mailto:seongjae.m@gmail.com");
              }}
              aria-label="email"
              component="span"
              className={classes.aboutIconWrap}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onClickIcon("https://www.instagram.com/clear219");
              }}
              aria-label="instagram"
              component="span"
              className={classes.aboutIconWrap}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={8}>
            <video muted autoPlay={!mobile} controls={mobile}>
              <source src={seongjaeMP4} type="video/mp4" />
            </video>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.aboutContent}>
            <Typography variant={"subtitle1"} component={"p"}>
              Hi, I’m Seongjae Moon, currently working at BE10 as a CEO.
              <br className={classes.smNone} />I have a Bachelor of Computer
              Science and Engineering of GIS.
              <br />
              <br />
              Previously, I worked at programming instructor from FastCampus
              that teached about web development, web scraping with python and
              growth hacking. And worked as a Software Engineer (Member of
              Research Engineer) at WashFriends in the solution R&amp;D team and
              worked at IMPACTUS(Member of FullStack Engineer).
              <br className={classes.smNone} />
              At my day job, I develop business websites and cross-platform
              mobile apps. I also freelance when I can,
              <br className={classes.smNone} />
              mostly building custom websites and apps that you can’t get from a
              template.
              <br />
              <br />
              My interests life in solving problems related to business
              automation software systems.
            </Typography>
            <Grid container className={classes.aboutInterest}>
              <Grid item xs={12} sm={3}>
                <Typography variant={"h5"} component={"h5"}>
                  Interests
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  Business Automation
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  Cloud Computing
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  Software Engineering
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  Machine Learning
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant={"h5"} component={"h5"}>
                  Education
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  <SchoolOutlinedIcon /> SSangyong Web Developer Training
                  Course, 2018
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  <SchoolOutlinedIcon /> Bachelor of Engineering, 2018
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant={"h5"} component={"h5"}>
                  Prize
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  <EmojiEventsOutlinedIcon />
                  Capstone design of colleage in 2018, Grand prize
                </Typography>
                <Typography variant={"subtitle1"} component={"h6"}>
                  <EmojiEventsOutlinedIcon /> Seoul mobile platform contest in
                  2017, 3rd
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        ref={(el) => (sectionRef.current[1] = el)}
        className={`${classes.skill} ${classes.section}`}
      >
        <Grid container className={classes.skillWrap}>
          <Grid item xs={12} sm={12}>
            <Typography variant={"h3"} component={"h3"}>
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              Javascript
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="reactjs"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                alt="nextjs"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                alt="vuejs"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg"
                alt="nuxtjs"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg"
                alt="webpack"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              Python
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain-wordmark.svg"
                alt="django"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg"
                alt="flask"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              Databases
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                alt="postgresql"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                alt="mongodb"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                alt="mysql"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              Cloud
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
                alt="firebase"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg"
                alt="gcp"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
                alt="aws"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              DevOps
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                alt="docker"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg"
                alt="jenkins"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                alt="github"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.skillItem}>
            <Typography variant={"h4"} component={"h4"}>
              Tools
            </Typography>
            <Typography variant={"h5"} component={"h5"}>
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg"
                alt="slack"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg"
                alt="trello"
                className={classes.skillSmImage}
              />
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg"
                alt="google workspace"
                className={classes.skillSmImage}
              />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div
        ref={(el) => (sectionRef.current[2] = el)}
        className={`${classes.project} ${classes.section}`}
      >
        <Grid container className={classes.projectWrap}>
          <Grid item xs={12} sm={12}>
            <Typography variant={"h3"} component={"h3"}>
              Projects
            </Typography>
          </Grid>
          <Stepper orientation="vertical">
            <Step active key={"impactus"}>
              <StepLabel className={classes.projectTitle}>
                영상 스트리밍 사이트 개발
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={impactus}
                      alt="Impactus"
                    />
                    <Image
                      className={classes.projectImage}
                      src={impactus2}
                      alt="Impactus"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1.5M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of B2C video streaming
                      platform. This project includes an website, and a
                      back-office site. It was developed using the React and
                      various external open source libraries. This Project is
                      managed on a private github. More details can be found on
                      the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://impactus.kr");
                        }}
                        aria-label="impactus"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"CreativeVoice"}>
              <StepLabel className={classes.projectTitle}>
                음성 녹음 사이트 개발
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={voice}
                      alt="CreativeVoice"
                    />
                    <Image
                      className={classes.projectImage}
                      src={voice1}
                      alt="CreativeVoice"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 3W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of voice recorder site.
                      This project includes an recoding website and a
                      back-office site. Also, it was developed using React and
                      WebRTC spec. This Project is managed on a private github.
                      More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://creative-voice.com");
                        }}
                        aria-label="creative-voice"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"BaroLaundry"}>
              <StepLabel className={classes.projectTitle}>바로세탁</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={baro}
                      alt="바로세탁"
                    />
                    <Image
                      className={classes.projectImage}
                      src={baro1}
                      alt="바로세탁"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: In progress
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, App platform, Admin
                      Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="ReactNative"
                        src="https://img.shields.io/badge/-ReactNative-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="Android"
                        src="https://img.shields.io/badge/Android-6DB33F?style=flat-square&logo=Android&logoColor=white"
                      />
                      <Image
                        alt="ios"
                        src="https://img.shields.io/badge/ios-000?style=flat-square&logo=apple&logoColor=white"
                      />
                      <Image
                        alt="GCP"
                        src="https://img.shields.io/badge/-GCP-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Fastlane"
                        src="https://img.shields.io/badge/-Fastlane-008BF3?style=flat-square&logo=Fastlane&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of B2C delivery
                      platform. This project includes an app, and a back-office
                      site. It was developed using the ReactNative and various
                      external open source libraries. This Project is managed on
                      a private github.
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"KIOSK"}>
              <StepLabel className={classes.projectTitle}>
                셀프빨래방 키오스크 S/W 개발
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={newvis}
                      alt="셀프빨래방 키오스크"
                    />
                    <Image
                      className={classes.projectImage}
                      src={newvis1}
                      alt="셀프빨래방 키오스크"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: In progress
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Kiosk, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="Electron"
                        src="https://img.shields.io/badge/-Electron-2f3241?style=flat-square&logo=Electron&logoColor=white"
                      />
                      <Image
                        alt="Vue"
                        src="https://img.shields.io/badge/-Vue-42b983?style=flat-square&logo=Vue.js&logoColor=white"
                      />
                      <Image
                        alt="Nuxt"
                        src="https://img.shields.io/badge/-Nuxt-00DC82?style=flat-square&logo=Nuxt.js&logoColor=white"
                      />
                      <Image
                        alt="Python"
                        src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white"
                      />
                      <Image
                        alt="Flask"
                        src="https://img.shields.io/badge/-Flask-3EAAAF?style=flat-square&logo=Flask&logoColor=white"
                      />
                      <Image
                        alt="django"
                        src="https://img.shields.io/badge/-django-0C4B33?style=flat-square&logo=Django&logoColor=white"
                      />
                      <Image
                        alt="PostgreSQL"
                        src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white"
                      />
                      <Image
                        alt="Nginx"
                        src="https://img.shields.io/badge/nginx-099639?style=flat-square&logo=nginx&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="GCP"
                        src="https://img.shields.io/badge/-GCP-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
                      />
                      <Image
                        alt="Linux"
                        src="https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=black"
                      />
                      <Image
                        alt="Docker"
                        src="https://img.shields.io/badge/-docker-007bff?style=flat-square&logo=Docker&logoColor=white"
                      />
                      <Image
                        alt="Jenkins"
                        src="https://img.shields.io/badge/-jenkins-fd7e14?style=flat-square&logo=Jenkins&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of Self-Laundromat
                      unmanned system with kiosk. This project includes an
                      kiosk, pwa and a back-office site. Also, it was developed
                      using various fullstack develpoment options. This Project
                      is managed on a private github. More details can be found
                      on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://washfriends.com/product/kiosk");
                        }}
                        aria-label="kiosk"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"WashSOS"}>
              <StepLabel className={classes.projectTitle}>워시SOS</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={sos}
                      alt="워시SOS"
                    />
                    <Image
                      className={classes.projectImage}
                      src={sos1}
                      alt="워시SOS"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: In progress
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: App platform, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="ReactNative"
                        src="https://img.shields.io/badge/-ReactNative-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="Android"
                        src="https://img.shields.io/badge/Android-6DB33F?style=flat-square&logo=Android&logoColor=white"
                      />
                      <Image
                        alt="ios"
                        src="https://img.shields.io/badge/ios-000?style=flat-square&logo=apple&logoColor=white"
                      />
                      <Image
                        alt="GCP"
                        src="https://img.shields.io/badge/-GCP-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Fastlane"
                        src="https://img.shields.io/badge/-Fastlane-008BF3?style=flat-square&logo=Fastlane&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of A/S platform. This
                      project includes an app, and a back-office site. It was
                      developed using the ReactNative and various external open
                      source libraries. This Project is managed on a private
                      github. More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon(
                            "https://apps.apple.com/no/app/%EC%9B%8C%EC%8B%9Csos/id1501615572?l=ko",
                          );
                        }}
                        aria-label="washsos"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"FriendsStudy"}>
              <StepLabel className={classes.projectTitle}>
                프렌즈스터디
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={friendsstudy}
                      alt="프렌즈스터디"
                    />
                    <Image
                      className={classes.projectImage}
                      src={friendsstudy1}
                      alt="프렌즈스터디"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 6M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 70%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, App platform, Kiosk,
                      Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="ReactNative"
                        src="https://img.shields.io/badge/-ReactNative-45b8d8?style=flat-square&logo=React&logoColor=white"
                      />
                      <Image
                        alt="Nextjs"
                        src="https://img.shields.io/badge/-Next-181717?style=flat-square&logo=Next.js&logoColor=white"
                      />
                      <Image
                        alt="Java"
                        src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"
                      />
                      <Image
                        alt="mongodb"
                        src="https://img.shields.io/badge/MongoDB-13aa52?style=flat-square&logo=MongoDB&logoColor=white"
                      />
                      <Image
                        alt="Nginx"
                        src="https://img.shields.io/badge/nginx-099639?style=flat-square&logo=nginx&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="GCP"
                        src="https://img.shields.io/badge/-GCP-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
                      />
                      <Image
                        alt="Linux"
                        src="https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=Linux&logoColor=black"
                      />
                      <Image
                        alt="Docker"
                        src="https://img.shields.io/badge/-docker-007bff?style=flat-square&logo=Docker&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="CodePush"
                        src="https://img.shields.io/badge/-CodePush-3078d0?style=flat-square&logo=code&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of business platform
                      solution. This project includes a kiosk, an app, and a
                      back-office site. The kiosk and app were developed using
                      the ReactNative and backend using node.js with mongodb.
                      This Project is managed on a private github. More details
                      can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://friendsstudy.com");
                        }}
                        aria-label="friendsstudy.com"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"DEF"}>
              <StepLabel className={classes.projectTitle}>
                디지털 이코노미 포럼
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={def}
                      alt="디지털 이코노미 포럼"
                    />
                    <Image
                      className={classes.projectImage}
                      src={def1}
                      alt="디지털 이코노미 포럼"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 3W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      node.js with ejs. More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://digitaleconomy.co.kr/");
                        }}
                        aria-label="digitaleconomy.co.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"CubeNsys"}>
              <StepLabel className={classes.projectTitle}>큐브엔시스</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={cubensys}
                      alt="큐브엔시스"
                    />
                    <Image
                      className={classes.projectImage}
                      src={cubensys1}
                      alt="큐브엔시스"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="PHP"
                        src="https://img.shields.io/badge/PHP-4F5B93?style=flat-square&logo=PHP&logoColor=white"
                      />
                      <Image
                        alt="MySQL"
                        src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=Mysql&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the php
                      and mysql. More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("http://cubensys.co.kr");
                        }}
                        aria-label="cubensys.co.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"yonsei"}>
              <StepLabel className={classes.projectTitle}>
                연세대학교 이경태 교수
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={yonsei}
                      alt="연세대학교 이경태 교수 사이트"
                    />
                    <Image
                      className={classes.projectImage}
                      src={yonsei1}
                      alt="연세대학교 이경태 교수 사이트"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 2W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://yonsei-lkt.web.app");
                        }}
                        aria-label="washfresh.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"WashFresh"}>
              <StepLabel className={classes.projectTitle}>워시프레쉬</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={washfresh}
                      alt="워시프레쉬"
                    />
                    <Image
                      className={classes.projectImage}
                      src={washfresh1}
                      alt="워시프레쉬"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 3W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://washfresh.kr");
                        }}
                        aria-label="washfresh.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"WashFriends"}>
              <StepLabel className={classes.projectTitle}>워시프렌즈</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={washfriends}
                      alt="워시프렌즈"
                    />
                    <Image
                      className={classes.projectImage}
                      src={washfriends1}
                      alt="워시프렌즈"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://washfriends.com");
                        }}
                        aria-label="washfriends.com"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"WashPeople"}>
              <StepLabel className={classes.projectTitle}>워시피플</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={washpeople}
                      alt="워시피플"
                    />
                    <Image
                      className={classes.projectImage}
                      src={washpeople1}
                      alt="워시피플"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://washpeople.co.kr");
                        }}
                        aria-label="washpeople.co.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"WashStory"}>
              <StepLabel className={classes.projectTitle}>워시스토리</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={washstory}
                      alt="워시스토리"
                    />
                    <Image
                      className={classes.projectImage}
                      src={washstory1}
                      alt="워시스토리"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Landingpage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://washstory.net");
                        }}
                        aria-label="washstory.net"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"NewData"}>
              <StepLabel className={classes.projectTitle}>뉴데이타</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={newdata}
                      alt="뉴데이타"
                    />
                    <Image
                      className={classes.projectImage}
                      src={newdata1}
                      alt="뉴데이타"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Landingpage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://newdata.co.kr");
                        }}
                        aria-label="newdata.co.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"Firstcuola"}>
              <StepLabel className={classes.projectTitle}>퍼스트학원</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={firstcuola}
                      alt="퍼스트학원"
                    />
                    <Image
                      className={classes.projectImage}
                      src={firstcuola1}
                      alt="퍼스트학원"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Landingpage, Admin Back-office
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                      <Image
                        alt="GoogleAnalytics"
                        src="https://img.shields.io/badge/-GA-ffc107?style=flat-square&logo=GoogleAnalytics&logoColor=orange"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site was developed using the
                      express backend with ejs. More details can be found on the
                      this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://firstscuola.com");
                        }}
                        aria-label="firstscuola.com"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"FastCampus"}>
              <StepLabel className={classes.projectTitle}>
                패스트캠퍼스
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={fastcampus}
                      alt="패스트캠퍼스 강의"
                    />
                    <Image
                      className={classes.projectImage}
                      src={fastcampus1}
                      alt="패스트캠퍼스 강의"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 2Y
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Online course, Growth hacking, Open
                      source
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="Python"
                        src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white"
                      />
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      Programming instructor at FastCampus in Gangnam. I teaches
                      HTML5, CSS3, Javascript, Python. More details can be found
                      on the my
                      <IconButton
                        onClick={() => {
                          onClickIcon(
                            "https://github.com/SeongJaeMoon/FastCampusWebPythonBasic",
                          );
                        }}
                        aria-label="github"
                        component="span"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"YFintech"}>
              <StepLabel className={classes.projectTitle}>
                연세 핀테크
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={yfintech}
                      alt="연세 핀테크"
                    />
                    <Image
                      className={classes.projectImage}
                      src={yfintech1}
                      alt="연세 핀테크"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 1W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://yfintech.web.app");
                        }}
                        aria-label="yfintech.web.app"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"Alcose"}>
              <StepLabel className={classes.projectTitle}>알코즈</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={alcose}
                      alt="알코즈"
                    />
                    <Image
                      className={classes.projectImage}
                      src={alcose1}
                      alt="알코즈"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 2W
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Homepage
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="html5"
                        src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                      />
                      <Image
                        alt="javascript"
                        src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=black"
                      />
                      <Image
                        alt="css3"
                        src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                      />
                      <Image
                        alt="jQuery"
                        src="https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jquery&logoColor=blue"
                      />
                      <Image
                        alt="PHP"
                        src="https://img.shields.io/badge/PHP-4F5B93?style=flat-square&logo=PHP&logoColor=white"
                      />
                      <Image
                        alt="MySQL"
                        src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=Mysql&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of promotional purpose
                      outsourcing website. This site is supported only mobile
                      device. Also, this application was developed using the php
                      and mysql. More details can be found on the this
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://test-newdata.web.app");
                        }}
                        aria-label="test-newdata.co.kr"
                        component="span"
                      >
                        <WebIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"CANDY"}>
              <StepLabel className={classes.projectTitle}>
                캔디다이어리
              </StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={candy}
                      alt="캔디다이어리"
                    />
                    <Image
                      className={classes.projectImage}
                      src={candy1}
                      alt="캔디다이어리"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 3M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Android app
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="Java"
                        src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"
                      />
                      <Image
                        alt="Android"
                        src="https://img.shields.io/badge/Android-6DB33F?style=flat-square&logo=Android&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of academic project.
                      This app is primarily for diet management. Also, this
                      application was developed using the Firebase platform and
                      various external open source libraries. More details can
                      be found on the my
                      <IconButton
                        onClick={() => {
                          onClickIcon(
                            "https://github.com/SeongJaeMoon/CandyDiary",
                          );
                        }}
                        aria-label="candydiary"
                        component="span"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"AJM"}>
              <StepLabel className={classes.projectTitle}>안전모</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={ajm}
                      alt="안전모"
                    />
                    <Image
                      className={classes.projectImage}
                      src={ajm1}
                      alt="안전모"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 5M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Android app
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="Java"
                        src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"
                      />
                      <Image
                        alt="Android"
                        src="https://img.shields.io/badge/Android-6DB33F?style=flat-square&logo=Android&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of a capstone design at
                      the university. It was developed to create a safe cycling
                      culture for bicycle users in Seoul. This app is primarily
                      for location-based voice guidance. Also, this application
                      was developed using the Firebase platform and various
                      external open source libraries. This open source project
                      was won 3rd at the Seoul mobile platform contest in 2017
                      and was won 1st at the capstone design prize at the
                      university in 2017. More details can be found on the my
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://github.com/SeongJaeMoon/AJM");
                        }}
                        aria-label="ajm"
                        component="span"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
            <Step active key={"Betriver"}>
              <StepLabel className={classes.projectTitle}>비트리버</StepLabel>
              <StepContent className={classes.projectStepWrap}>
                <Grid container>
                  <Grid item xs={12} sm={7}>
                    <Image
                      className={classes.projectImage}
                      src={betriverLogo}
                      alt="비트리버"
                    />
                    <Image
                      className={classes.projectImage}
                      src={betriverApp}
                      alt="비트리버"
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Elapsed time</strong>: 5M
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Participation rate</strong>: 100%
                    </Typography>
                    <Typography variant={"subtitle1"} component={"h6"}>
                      <strong>Type</strong>: Android app
                    </Typography>
                    <Box className={classes.projectSpecImage}>
                      <Image
                        alt="Java"
                        src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"
                      />
                      <Image
                        alt="Android"
                        src="https://img.shields.io/badge/Android-6DB33F?style=flat-square&logo=Android&logoColor=white"
                      />
                      <Image
                        alt="Firebase"
                        src="https://img.shields.io/badge/-Firebase-FCC624?style=flat-square&logo=Firebase&logoColor=white"
                      />
                      <Image
                        alt="Github"
                        src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"
                      />
                    </Box>
                    <Typography
                      variant={"subtitle2"}
                      component={"p"}
                      className={classes.projectDetail}
                    >
                      This project was developed as part of a capstone design at
                      the university. It is a shopping helper application that
                      uses beacon. The user who installed the application is
                      recognized by using the beacon. Only physical store
                      visitors can create photos and post reviews, and upload
                      them to your feed. In addition, it is implemented so that
                      users can chat with each other while beacons are
                      recognized in real time. This application was developed
                      for the academic use of IOT service. Also, this
                      application was developed using the Firebase platform and
                      various external open source libraries. More details can
                      be found on the my
                      <IconButton
                        onClick={() => {
                          onClickIcon("https://github.com/SeongJaeMoon/Beshop");
                        }}
                        aria-label="betriever"
                        component="span"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
          </Stepper>
        </Grid>
      </div>
      <div
        ref={(el) => (sectionRef.current[3] = el)}
        className={`${classes.experience} ${classes.section}`}
      >
        <Grid container className={classes.experienceWrap}>
          <Grid item xs={12} sm={12}>
            <Typography variant={"h3"} component={"h3"}>
              Expreiences
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            className={classes.mobileHorizontalWrapper}
          >
            <Stepper
              orientation={"horizontal"}
              alternativeLabel
              connector={<ColorlibConnector />}
            >
              <Step active key={"ssangyong"}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  Trainee
                </StepLabel>
                <Typography variant={"subtitle2"} component={"p"}>
                  2017-2018 &middot; SSangyong
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}>
                  Java &amp; Python Web developer training course
                  <br />
                  [Completion]
                </Typography>
              </Step>
              <Step active key={"fastcampus"}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  Programming Instructor
                </StepLabel>
                <Typography variant={"subtitle2"} component={"p"}>
                  2018-2020 &middot; FastCampus
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}>
                  Web &amp; Python basic course
                  <br />
                  [Completion]
                </Typography>
              </Step>
              <Step active key={"newdata"}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  Research Engineer
                </StepLabel>
                <Typography variant={"subtitle2"} component={"p"}>
                  2019~2021 &middot; NewData
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}>
                  KIOSK &amp; App Solution R&amp;D
                  <br />
                  [Completion]
                </Typography>
              </Step>
              <Step active key={"impactus"}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  FullStack Engineer
                </StepLabel>
                <Typography variant={"subtitle2"} component={"p"}>
                  2021~2022 &middot; IMPACTUS
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}>
                  Platform development team
                  <br />
                  [Completion]
                </Typography>
              </Step>
              <Step active key={"BE10"}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>CEO</StepLabel>
                <Typography variant={"subtitle2"} component={"p"}>
                  2022~ &middot; BE10
                </Typography>
                <Typography variant={"subtitle2"} component={"p"}>
                  Founder
                  <br />
                  [Current]
                </Typography>
              </Step>
            </Stepper>
          </Grid>
        </Grid>
      </div>
      <div
        ref={(el) => (sectionRef.current[4] = el)}
        className={`${classes.contact} ${classes.section}`}
      >
        <Grid container className={classes.contactWrap}>
          <Grid item xs={12} sm={12}>
            <Typography variant={"h3"} component={"h3"}>
              Contact
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <form className={classes.form} noValidate autoComplete="off">
              <Box p={1}>
                <CssTextField
                  label="성명"
                  value={state.name}
                  fullWidth
                  variant="outlined"
                  onChange={onInputChange}
                  id="name"
                />
              </Box>
              <Box p={1}>
                <CssTextField
                  label="연락처"
                  value={state.contact}
                  fullWidth
                  variant="outlined"
                  onChange={onInputChange}
                  id="contact"
                />
              </Box>
              <Box p={1}>
                <CssTextField
                  className={classes.contactContent}
                  label="내용"
                  value={state.content}
                  fullWidth
                  multiline
                  variant="outlined"
                  onChange={onInputChange}
                  id="content"
                />
              </Box>
              <Box p={1}>
                {state.alertMsg && (
                  <Alert onClose={onAlertChange} severity="error">
                    {state.alertMsg}
                  </Alert>
                )}
                {state.loading && <LinearProgress color="secondary" />}
                <Button
                  onClick={onSend}
                  color="primary"
                  className={classes.btn}
                  variant="contained"
                >
                  Send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
