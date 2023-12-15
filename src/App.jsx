import { Outlet, NavLink } from "react-router-dom";
import './App.css'
const App = () => {
  return (
    <>
      <nav className="container flex mx-auto justify-between py-5 px-10">
        <div className="text-[25px] font-bold text-gray-700">My Blogs</div>
        <ul className="flex space-x-10 text-gray-700">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="container flex mx-auto py-5 px-10">
        <Outlet />
      </div>
    </>
  );
}

export default App;
