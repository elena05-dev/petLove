import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getCurrentUser } from "./lib/api/auth";
import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";
import { login, refreshFinish } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log("AUTH:", auth);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function restoreUser() {
      try {
        const user = await getCurrentUser();
        console.log("CURRENT USER:", user);

        dispatch(
          login({
            user: {
              name: user.name,
              email: user.email,
            },
            token: user.token,
          }),
        );
      } finally {
        dispatch(refreshFinish());
      }
    }

    if (token) {
      restoreUser();
    } else {
      dispatch(refreshFinish());
    }
  }, []);

  return <AppRouter />;
}

export default App;
