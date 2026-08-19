import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useAuth } from "../../context/useAuth";
import "./Auth.css";

function Register() {
  const { isLoggedIn, register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => { if (isLoggedIn) navigate("/", { replace: true }); }, [isLoggedIn, navigate]);
  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Enter your full name (at least 2 characters).";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (form.password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
    else if (!/[A-Z]/.test(form.password) || !/[a-z]/.test(form.password) || !/\d/.test(form.password)) nextErrors.password = "Use uppercase, lowercase, and a number.";
    if (!form.confirmPassword) nextErrors.confirmPassword = "Please confirm your password.";
    else if (form.confirmPassword !== form.password) nextErrors.confirmPassword = "Passwords do not match.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const result = register(form);
    if (!result.success) return setErrors({ form: result.error });
    navigate("/login", { replace: true, state: { registered: true } });
  };
  const input = (field, type, icon, placeholder, error) => <label>{field === "name" ? "Full name" : field === "email" ? "Email address" : field === "password" ? "Password" : "Confirm password"}<div className="input-wrap">{icon}<input type={type} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} aria-invalid={Boolean(error)} placeholder={placeholder} />{field !== "name" && field !== "email" && <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>}</div>{error && <small className="field-error">{error}</small>}</label>;
  return <main className="auth-page"><section className="auth-card"><Link className="auth-logo" to="/login">Cine<span>Book</span></Link><div className="auth-heading"><h1>Create your account</h1><p>Register now, then sign in to start booking.</p></div><form noValidate onSubmit={submit}>{errors.form && <p className="form-error" role="alert">{errors.form}</p>}{input("name", "text", <UserRound size={18} />, "Your full name", errors.name)}{input("email", "email", <Mail size={18} />, "you@example.com", errors.email)}{input("password", showPassword ? "text" : "password", <LockKeyhole size={18} />, "Minimum 8 characters", errors.password)}{input("confirmPassword", showPassword ? "text" : "password", <LockKeyhole size={18} />, "Repeat your password", errors.confirmPassword)}<p className="password-hint">Use 8+ characters with an uppercase letter, lowercase letter, and number.</p><button className="auth-submit" type="submit">Create Account</button></form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p></section></main>;
}

export default Register;
