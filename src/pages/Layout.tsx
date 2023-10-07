import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
      {location.pathname.includes('/contact') ? (
        <></>
      ) : (
        <div data-dial-init className="fixed right-8 bottom-10">
          <Link
            to="/contact"
            className="text-white bg-blue-500 hover:bg-white transition-all duration-300 hover:text-blue-500 border-2 border-blue-500 focus:outline-none focus:ring-4 line focus:ring-blue-300 rounded-full text-xl font-body px-10 pb-2 pt-4 text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
