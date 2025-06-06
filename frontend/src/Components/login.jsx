import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    console.log('Login attempt:', { username, password });

    // Simulate successful login
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="flex w-full max-w-3xl h-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(20,96,162,0.70)_0%,_#1460A2_100%)] flex items-center justify-center p-6">
          <img src="https://placehold.co/129x129" alt="Logo" className="w-32 h-32" />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">Log In</h2>

          <div className="mb-6">
            <label className="font-bold block text-sky-700 mb-2 text-xs">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full h-10 px-4 rounded-full border-2 border-sky-700 placeholder:text-sky-950/50 text-xs"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sky-700 font-bold mb-2 text-xs">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-10 px-4 rounded-full border-2 border-sky-700 placeholder:text-sky-950/50 text-xs"
            />
          </div>

          <div className="flex items-center mb-8">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="mr-1 text-sky-700 w-3 h-3"
            />
            <label className="text-xs text-sky-700">Show Password</label>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-26 h-8 bg-sky-700 text-white font-semibold rounded-2xl hover:bg-sky-800 transition text-sm cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
