import "./Online.css";
import { Link } from "react-router-dom";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={PF+user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <Link to={`/profile/:${user.username}`} style={{textDecoration: "none", color: "black"}}>
        <span className="rightbarUsername">{user.username}</span>
      </Link>
    </li>
  );
}