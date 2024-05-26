import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <header
      style={{
        display: "flex",
        padding: "12px 64px",
        justifyContent: "space-between",
      }}
    >
      <p>Hello {"User"}</p>
      <button
        onClick={() => {
          setUser("");
          localStorage.removeItem("user");
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
