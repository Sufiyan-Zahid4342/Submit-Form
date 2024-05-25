import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
  }

  function handleSubmit() {
    console.log(login);
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
        <h2 className="text-center">Register</h2>
        <div>
          <label className="form-label">Username: </label>
          <input
            name="username"
            className="form-input"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
        </div>
        <br />
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
          style={{ margin: "24px auto 0 auto", display: "block" }}
          onClick={handleSubmit}
        >
          Create new account
        </Button>

        <Link to={{ pathname: "/login" }}>
          <p style={{ margin: "12px 0 0 0", textAlign: "right" }}>
            Back to Login
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Register;
