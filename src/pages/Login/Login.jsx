import { useState } from "react";
import { loginUser } from "../../lib/api/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { getCurrentUser } from "../../lib/api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);
      dispatch(
        login({
          user: {
            name: data.name,
            email: data.email,
          },
          token: data.token,
        }),
      );
      localStorage.setItem("token", data.token);
      const currentUser = await getCurrentUser();
      console.log(currentUser);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      {error && <p>error</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
export default Login;
