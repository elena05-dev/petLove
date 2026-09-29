import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import AddPet from "../pages/AddPet/AddPet";
import Friends from "../pages/Friends/Friends";
import Login from "../pages/Login/Login";
import Notices from "../pages/Notices/Notices";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Header from "../components/Header/Header/Header";
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notices" element={<Notices />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/add-pet" element={<AddPet />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
