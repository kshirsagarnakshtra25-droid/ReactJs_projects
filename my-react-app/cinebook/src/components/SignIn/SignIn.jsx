import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./SignIn.css";

function SignIn() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();

    // Check email
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    // Check password
    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    setLoading(true);

    // Call backend login
    const result = await login(
      email.trim(),
      password
    );

    setLoading(false);

    // Login failed
    if (!result.success) {

      alert(result.message);

      return;
    }

    // Login successful
    alert("Login successful! 🎉");

    // Go to CineBook home page
    navigate("/");

  };


  return (

    <div className="signin-page">

      <div className="signin-card">

        {/* LOGO */}

        <div className="signin-logo">
          Cine<span>Book</span>
        </div>


        {/* ICON */}

        <div className="signin-icon">
          🎬
        </div>


        {/* TITLE */}

        <h1>
          Welcome to CineBook
        </h1>


        <p className="signin-description">
          Sign in to explore movies, events,
          plays, sports and activities.
        </p>


        {/* FORM */}

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

          </div>


          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

          </div>


          {/* SIGN IN BUTTON */}

          <button
            type="submit"
            className="signin-submit"
            disabled={loading}
          >

            {loading
              ? "Signing In..."
              : "Sign In →"
            }

          </button>

        </form>


        {/* SECURITY MESSAGE */}

        <div className="signin-note">
          🔒 Your account is securely
          authenticated with CineBook.
        </div>

      </div>

    </div>

  );
}

export default SignIn;