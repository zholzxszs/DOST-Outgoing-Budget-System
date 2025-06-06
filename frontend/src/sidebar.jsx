import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-sky-700/95 text-white flex flex-col justify-between">
      {/* Header */}
      <div className="py-6 text-center text-lg font-bold border-b border-sky-500">
        Sheriel Mae Gapasin
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4 px-6 mt-10">
        <Link to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded">
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Dashboard</span>
        </Link>

        <Link to="/incoming" className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded">
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Incoming Documents</span>
        </Link>

        <Link to="/outgoing" className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded">
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Outgoing Documents</span>
        </Link>
      </nav>

      {/* Footer */}
      <div className="px-6 mb-10 mt-auto flex flex-col gap-4">
        <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded">
          <div className="w-4 h-4 bg-white rounded-full" />
          <span className="text-base">Profile</span>
        </Link>

        <Link to="/logout" className="flex items-center gap-3 p-2 hover:bg-sky-600 rounded">
          <div className="w-5 h-5 bg-white rounded-sm" />
          <span className="text-base">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
