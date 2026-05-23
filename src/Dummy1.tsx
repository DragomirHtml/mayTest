import { Link, NavLink, Outlet } from "react-router-dom";

export const Dummy1 = () => {
  return (
    <>
      <nav>
        <Link to="/dummy2">На первую страницу</Link>
        <NavLink to="/dummy3">На вторую страницу</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Dummy1;