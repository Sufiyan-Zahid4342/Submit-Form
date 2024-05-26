import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAPI, APIS } from "../apis/config";

const Login = (props) => {
  const { setIsLoggedIn } = props;

  const [login, setLogin] = useState({ email: "", password: "" });

  const [login_api, loading] = useAPI(APIS.login);

  function handleChange(e) {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  }

  async function handleSubmit() {
    try {
      const { data } = await login_api({
        username: login.email,
        password: login.password,
      });

      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      console.log("Error in login page", err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <section
        style={{
          borderRadius: 4,
          border: "1px solid #dcdcdc",
          padding: 32,
          width: 400,
        }}
      >
        <h2 className="text-center">Login</h2>
        <div>
          <label className="form-label">Email: </label>
          <input
            name="email"
            className="form-input"
            placeholder="Username or email"
            value={login.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label className="form-label">Password</label>
          <input
            name="password"
            className="form-input"
            placeholder="Password"
            type="password"
            value={login.password}
            onChange={handleChange}
          />
        </div>

        <Button
          style={{ margin: "24px auto 0 auto", width: 100, display: "block" }}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Login"}
        </Button>

        <Link to={{ pathname: "/register" }}>
          <p style={{ margin: "12px 0 0 0", textAlign: "right" }}>
            Create New Account
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Login;
