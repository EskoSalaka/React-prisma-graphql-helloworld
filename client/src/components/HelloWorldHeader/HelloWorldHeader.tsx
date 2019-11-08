import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: "white"
    }
  })
);

type HWProps = {
  title: string;
  paragraph: string;
};

const HelloWorldHeader: FunctionComponent<HWProps> = ({ title, paragraph }) => {
  const classes = useStyles();
  return (
    <Box bgcolor="#512c62">
      <Typography variant="h2" className={classes.text}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {paragraph}
      </Typography>
    </Box>
  );
};

export default HelloWorldHeader;
