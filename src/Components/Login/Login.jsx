import { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../../App";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful sign-up
    if (!isLogin) {
      // saving user data to localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      // console.log("Sign-Up Data:", formData);

      // Show a success message
      setSuccessMessage("Sign-up successful. You can now log in.");
    } else {
      // Implement login logic here
      // console.log("Login Data:", formData);
      const userJSON = localStorage.getItem("user");
      const user = JSON.parse(userJSON);

      if (
        (user.email === formData.email) &
        (user.password === formData.password)
      ) {
        // console.log("matched");
        setLoggedInUser("user-valid");
        setSuccessMessage("Login successful.");
      } else {
        // setLoggedInUser(false);
        setSuccessMessage("Email or password may not valid");
      }

      // Show a success message
    }

    // Reset the form data
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{isLogin ? "Login" : "Sign Up"}</h2>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>
              <p className="mt-3">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={toggleAuthMode}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
