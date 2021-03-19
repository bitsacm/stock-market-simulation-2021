import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import TimerIcon from "@material-ui/icons/Timer";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  foot: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: "1"
  },
  icons: {
    padding: 0
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div width="90%" padding="1px">
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.foot}
      >
        <BottomNavigationAction
          label="Watchlist"
          value="watchlist"
          icon={<TimerIcon />}
          className={classes.icons}
          component={Link}
          to="/watchlist"
        />
        <BottomNavigationAction
          label="News"
          value="news"
          icon={<DescriptionOutlinedIcon />}
          className={classes.icons}
          component={Link}
          to="/news"
        />
        <BottomNavigationAction
          label="Leaderboard"
          value="leaderboard"
          icon={<EqualizerIcon />}
          className={classes.icons}
          component={Link}
          to="/leaderboard"
        />
        <BottomNavigationAction
          label="Transactions"
          value="transactions"
          icon={<ImportExportOutlinedIcon />}
          className={classes.icons}
          component={Link}
          to="/transactions"
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonOutlineOutlinedIcon />}
          className={classes.icons}
          component={Link}
          to="/portfolio"
        />
      </BottomNavigation>
    </div>
  );
}
