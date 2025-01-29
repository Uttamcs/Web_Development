import UserCard from "./Components/UserCard";
import "./App.css";
import uttam_pic from "./assets/uttam_pic.jpeg";
import shahrukh_pic from "./assets/shahrukhkhan.jpeg";
import ssr from "./assets/ssr.jpeg";

function App() {
  return (
    <div className="container">
      <UserCard
        name="Uttam Roy"
        desc="desc1"
        image={uttam_pic}
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="Shahrukh khan"
        desc="desc2"
        image={shahrukh_pic}
        style={{ "border-radius": "10px" }}
      />
      <UserCard
        name="Sir SSR"
        desc="desc3"
        image={ssr}
        style={{ "border-radius": "10px" }}
      />
    </div>
  );
}

export default App;
