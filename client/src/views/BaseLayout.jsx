import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Navbar";


export default function BaseLayout() {
  return (
    <>
    <NavigationBar />
    <Outlet />
    </>
  );
}
