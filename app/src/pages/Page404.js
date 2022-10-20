import React from 'react';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    top: '20vh'
  }
}))

export default function Page404() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WarningOutlinedIcon/>
      <Typography
        style={{ fontWeight: 700 }}
        variant="h5" 
        noWrap={false}>
        페이지가 존재하지 않습니다.
      </Typography>
      <Typography 
        variant="p" 
        noWrap={false}>
        링크를 잘못 입력하셨거나<br/>페이지가 삭제 또는 이동 되었을 수 있습니다.
      </Typography>
      <br/><br/>
      <Button
        color="primary"
        variant="outlined"
        to="/"
        component={Link}>
        홈으로 가기
      </Button>
    </div>
  );
}