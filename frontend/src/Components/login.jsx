import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });

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
          <h2 className="text-2xl font-bold text-sky-700 mb-10 text-center">Log In</h2>

          <div className="mb-8 relative">
            <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-10 pl-5.5 pr-4 rounded-full border-2 border-sky-700 placeholder:text-sky-950/50 text-[10px] focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] focus:[border-width:1px]"
            />
          </div>

          <div className="relative mb-2">
            <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-10 pl-5.5 pr-4 rounded-full border-2 border-sky-700 placeholder:text-sky-950/50 text-[10px] focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] focus:[border-width:1px]"
            />
          </div>

          <div className="flex items-center mb-8 ml-3">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="mr-1 text-sky-700 w-3 h-3"
            />
            <label className="text-[10px] text-sky-700">Show Password</label>
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
