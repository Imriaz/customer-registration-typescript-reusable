import { makeStyles } from '@material-ui/core';
import Homepage from "./components/Homepage";

const useStyles = makeStyles({
  App: {
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Homepage />
    </div>
  );
}

export default App;
