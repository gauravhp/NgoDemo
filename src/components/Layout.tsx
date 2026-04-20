import { Link, NavLink, Outlet } from 'react-router-dom';
import { Home, Users, Heart, ShieldCheck } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
                <span className="text-xl font-bold text-gray-900 tracking-tight">NgoDemo</span>
              </Link>
              
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-rose-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </NavLink>
                
                <NavLink
                  to="/donor"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-rose-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donor
                </NavLink>
                
                <NavLink
                  to="/mother"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-rose-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <Users className="w-4 h-4 mr-2" />
                  Mother
                </NavLink>
                
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-rose-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Admin
                </NavLink>
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-rose-600 transition-colors shadow-sm">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NgoDemo. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
