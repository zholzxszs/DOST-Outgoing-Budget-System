import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    console.log('Logout clicked');
    // localStorage.removeItem('token');
    // navigate('/login');
  };

  return (
    <div 
      className="w-55 h-screen text-white flex flex-col"
      style={{ backgroundColor: '#1460A2' }}
    >
      {/* Top section - scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div
          className="py-2 text-center text-sm font-bold mt-10 mb-4"
          style={{ backgroundColor: '#1068B5' }}
        >
          Sheriel Mae Gapasin
        </div>

        <nav className="px-2 py-6 space-y-2">
          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
              isActive('/dashboard')
                ? 'bg-sky-700 border-l-4 border-white'
                : 'hover:bg-sky-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/dashboardIcon.svg"
                alt="Dashboard Icon"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
              <span className="text-xs">Dashboard</span>
            </div>
          </Link>

          {/* All Documents */}
          <Link
            to="/documents"
            className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
              isActive('/documents')
                ? 'bg-sky-700 border-l-4 border-white'
                : 'hover:bg-sky-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/documentIcon.svg"
                alt="Document Icon"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">All Documents</span>
            </div>
          </Link>

          {/* Incoming Documents */}
          <Link
            to="/incoming"
            className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
              isActive('/incoming')
                ? 'bg-sky-700 border-l-4 border-white'
                : 'hover:bg-sky-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/documentIcon.svg"
                alt="Document Icon"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">Incoming Documents</span>
            </div>
          </Link>

          {/* Outgoing Documents */}
          <Link
            to="/outgoing"
            className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
              isActive('/outgoing')
                ? 'bg-sky-700 border-l-4 border-white'
                : 'hover:bg-sky-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/documentIcon.svg"
                alt="Document Icon"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">Outgoing Documents</span>
            </div>
          </Link>

          {/* Archive */}
          <Link
            to="/archive"
            className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
              isActive('/archive')
                ? 'bg-sky-700 border-l-4 border-white'
                : 'hover:bg-sky-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/archiveIcon.svg"
                alt="Archive Icon"
                className="w-5 h-5"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg
                className="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">Archive</span>
            </div>
          </Link>
        </nav>
      </div>

      {/* Fixed bottom section - profile and logout */}
      <div className="px-2 py-4 space-y-2 bg-[#1460A2] sticky bottom-0">
        {/* Profile */}
        <Link
          to="/profile"
          className={`flex items-center gap-3 p-3 rounded transition-colors duration-200 ${
            isActive('/profile')
              ? 'bg-sky-700 border-l-4 border-white'
              : 'hover:bg-sky-600'
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src="/profileIcon.svg"
              alt="Profile Icon"
              className="w-5 h-5"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <svg
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Profile</span>
          </div>
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded hover:bg-sky-600 transition-colors duration-200 w-full text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src="/logoutIcon.svg"
              alt="Logout Icon"
              className="w-5 h-5"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <svg
              className="w-5 h-5 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;