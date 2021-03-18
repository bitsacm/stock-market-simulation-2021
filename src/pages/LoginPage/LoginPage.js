import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Image from "./Background.png";
import { withStyles } from "@material-ui/core/styles";
import acm from "./acm.png";
import apogee from "./apogee.png";
import sponsor from "./sponsor.png";
import { Component } from "react";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

const styles = (theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat"
  },
  image: {
    paddingTop: "30px"
  },
  bluePaper: {
    backgroundColor: "#035C7D",
    borderRadius: 5
  },
  login: {
    backgroundColor: "#1A73E9",
    size: "large",
    variant: "contained",
    padding: "20px",
    borderRadius: 6,
    fontSize: "16px",
    color: "white",
    marginTop: "6px"
  },
  loginMail: {
    marginTop: "6px",
    marginBottom: "30px",
    variant: "contained",
    backgroundColor: "white",
    borderRadius: 6
  },
  textField1: {
    backgroundColor: "#035C7D",
    borderRadius: 6,
    marginTop: "30px",
    borderColor: "white !important"
  },
  textField2: {
    backgroundColor: "#035C7D",
    borderRadius: 6,
    marginTop: "-10px",
    color: "white"
  },
  sms: {
    fontStyle: "RelishPro",
    fontWeight: 400,
    color: "black",
    fontSize: "28px"
  }
});

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container className={classes.root}>
          <img src={acm} alt="ACM Logo" className={classes.image} />
          <img src={apogee} alt="Apogee Logo" className={classes.image} />
          <center>
            <p className={classes.sms}>
              <b>STOCK MARKET SIMULATION</b>
            </p>
          </center>
          <Paper elevation={3} className={classes.bluePaper}>
            <Box m={3}>
              <CssTextField
                className={classes.textField1}
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
                InputLabelProps={{
                  style: { color: "#ffffff" }
                }}
              />
            </Box>
            <Box m={3}>
              <CssTextField
                className={classes.textField2}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: { color: "#ffffff" }
                }}
              />
            </Box>
            <Box m={3}>
              <Button type="submit" className={classes.login} fullWidth>
                <b>LOGIN</b>
              </Button>
            </Box>
            <Box m={3}>
              <Button className={classes.loginMail} fullWidth>
                Login Using BITS Mail
                <Box p={1}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M5.26599 9.765C5.73387 8.34945 6.63685 7.11781 7.84611 6.2458C9.05536 5.37378 10.5091 4.90594 12 4.909C13.69 4.909 15.218 5.509 16.418 6.491L19.91 3C17.782 1.145 15.055 0 12 0C7.26999 0 3.19799 2.698 1.23999 6.65L5.26599 9.765Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M16.0398 18.0131C14.9498 18.7161 13.5658 19.0911 11.9998 19.0911C10.5149 19.0941 9.06662 18.63 7.86005 17.7644C6.65349 16.8988 5.74976 15.6757 5.27682 14.2681L1.23682 17.3351C2.22806 19.3414 3.76208 21.0295 5.66464 22.2076C7.56719 23.3858 9.76202 24.0068 11.9998 24.0001C14.9328 24.0001 17.7348 22.9571 19.8338 21.0001L16.0408 18.0131H16.0398Z"
                        fill="#34A853"
                      />
                      <path
                        d="M19.834 21.0001C22.029 18.9521 23.454 15.9041 23.454 12.0001C23.454 11.2901 23.345 10.5271 23.182 9.81812H12V14.4551H18.436C18.119 16.0141 17.266 17.2211 16.041 18.0131L19.834 21.0001Z"
                        fill="#4A90E2"
                      />
                      <path
                        d="M5.27687 14.2679C5.03223 13.5368 4.90794 12.7708 4.90887 11.9999C4.90887 11.2179 5.03387 10.4669 5.26587 9.7649L1.23987 6.6499C0.41625 8.31259 -0.00832408 10.1444 -0.000127686 11.9999C-0.000127686 13.9199 0.444872 15.7299 1.23687 17.3349L5.27687 14.2679Z"
                        fill="#FBBC05"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 24)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
              </Button>
            </Box>
          </Paper>
          <img src={sponsor} alt="Sponsors" />
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LoginPage);
