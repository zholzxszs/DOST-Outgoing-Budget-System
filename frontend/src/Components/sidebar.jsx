import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-full text-white flex flex-col" style={{backgroundColor: '#1460A2'}}>
      {/* User Name */}
      <div className="py-4 text-center text-sm font-bold mt-10" style={{ backgroundColor: '#1068B5'}}>
        Sheriel Mae Gapasin
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-6 py-8 space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded"
        >
          <div className='flex justify-center'>
            <img src="/dashboardIcon.svg" alt="Dashboard Icon" />
            <span className="text-base">Dashboard</span>
          </div>
        </Link>

        <Link
          to="/incoming"
          className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded"
        >
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Incoming Documents</span>
        </Link>

        <Link
          to="/outgoing"
          className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded"
        >
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Outgoing Documents</span>
        </Link>
      </nav>

      {/* Footer Links */}
      <div className="px-6 py-6 space-y-4">
        <Link
          to="/profile"
          className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded"
        >
          <div className="w-4 h-4 bg-white rounded-full" />
          <span className="text-base">Profile</span>
        </Link>

        <Link
          to="/logout"
          className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded"
        >
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
