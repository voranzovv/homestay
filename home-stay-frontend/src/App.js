import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import RoomCard from "./components/roomCard";
import Navbar from "./components/navBar";
import roomData from "./data/RoomData.json";

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginTop: "50",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      {roomData.map((d) => (
        <RoomCard 
        key={d.id}
        className={classes.navbar} 
        CardImage={d.mainImage}
        CardTitle={d.name}
        CardSubtitle = {d.address}
        Description={d.description}

         />
      ))}
    </div>
  );
}
