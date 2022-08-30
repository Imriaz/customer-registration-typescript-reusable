import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2d2e2d",
    height: "50px",
    padding: "0 20px",
    color: "white",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography style={{ textAlign: "left", fontSize: "12px" }}>
        Customer registration
      </Typography>
      <Typography style={{ textAlign: "right", fontSize: "16px" }}>
        X
      </Typography>
    </div>
  );
};
export default Header;
