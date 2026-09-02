import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "../../context/useAuth";
import "./Auth.css";

function Login() {
  const { isLoggedIn, login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate("/", { replace: true });
  }, [isLoggedIn, navigate]);

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.password) nextErrors.password = "Password is required.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const result = login(form);
    if (!result.success) {
      setErrors({ form: result.error });
      return;
    }
    navigate(location.state?.from?.pathname || "/", { replace: true });
  };

  return <main className="auth-page"><section className="auth-card"><Link className="auth-logo" to="/login">Cine<span>Book</span></Link><div className="auth-heading"><h1>Welcome back</h1><p>Sign in to book your next experience.</p></div>{location.state?.registered && <p className="success-message">Account created successfully. Please sign in.</p>}<form noValidate onSubmit={submit}>
    {errors.form && <p className="form-error" role="alert">{errors.form}</p>}
    <label>Email address<div className="input-wrap"><Mail size={18} /><input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} aria-invalid={Boolean(errors.email)} placeholder="you@example.com" /></div>{errors.email && <small className="field-error">{errors.email}</small>}</label>
    <label>Password<div className="input-wrap"><LockKeyhole size={18} /><input type={showPassword ? "text" : "password"} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} aria-invalid={Boolean(errors.password)} placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>{errors.password && <small className="field-error">{errors.password}</small>}</label>
    <button className="auth-submit" type="submit">Sign In</button>
  </form><p className="auth-switch">New to CineBook? <Link to="/register">Create an account</Link></p></section></main>;
}

export default Login;
