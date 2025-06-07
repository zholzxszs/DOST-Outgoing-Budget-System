import { useEffect, useRef } from 'react';

function OverlayOutgoing({ onClose }) {
  const popupRef = useRef(null);

  const handleDtsNoChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    e.target.value = value;
  };

  // Handle click outside the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking on overlay background
    >
      <div 
        ref={popupRef}
        className="w-[450px] max-w-full bg-white rounded-[30px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] p-8 flex flex-col space-y-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-2xl text-black/50 hover:text-black/70 transition-colors cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-sky-700/95 text-center">Outgoing Record</h2>

        {/* Route Dropdown */}
        <div className="mb-4 relative mt-4">
          <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
            Route
          </label>
          <div className="relative">
            <select
              className="text-xs w-full h-12 appearance-none pl-5 pr-10 rounded-full border-2 border-sky-700 text-sky-950 focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] bg-white"
            >
              <option value="" className="text-sky-700/70">Select Route</option>
              <option value="Accounting Unit" className="text-sky-950">Accounting Unit</option>
              <option value="JAD" className="text-sky-950">JAD</option>
            </select>
            {/* Dropdown Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg 
                className="h-4 w-4 text-sky-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* DTS No., Time, and JAD - Flex Row */}
        <div className="flex flex-wrap gap-4 mt-1">
          {/* DTS No. */}
          <div className="flex-1 min-w-[140px] relative">
            <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
              DTS No.
            </label>
            <input
              type="text"
              placeholder="e.g. HR1111"
              className="text-xs w-full h-12 pl-5 pr-4 rounded-full border-2 border-sky-700 text-sky-950 placeholder:text-sky-700/70 focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] focus:text-sky-950 uppercase"
              pattern="[A-Z0-9]*"
              onInput={handleDtsNoChange}
              onKeyPress={(e) => {
                if (!/[a-zA-Z0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>

          {/* Time Dropdown */}
          <div className="flex-1 min-w-[100px] relative">
            <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
              Time
            </label>
            <div className="relative">
              <select
                className="text-xs w-full h-12 appearance-none pl-5 pr-10 rounded-full border-2 border-sky-700 text-sky-950 focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] bg-white"
              >
                <option value="" className="text-sky-700/70">Select Time</option>
                <option value="AM" className="text-sky-950">AM</option>
                <option value="PM" className="text-sky-950">PM</option>
                <option value="PM Late" className="text-sky-950">PM Late</option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg 
                  className="h-4 w-4 text-sky-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* JAD Dropdown */}
          <div className="flex-1 min-w-[120px] relative">
            <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
              JAD
            </label>
            <div className="relative">
              <select
                className="text-xs w-full h-12 appearance-none pl-5 pr-10 rounded-full border-2 border-sky-700 text-sky-950 focus:border-[#004077] focus:outline-none focus:ring-1 focus:ring-[#004077] bg-white"
              >
                <option value="" className="text-sky-700/70">Select Status</option>
                <option value="Received" className="text-sky-950">Received</option>
                <option value="Not Received" className="text-sky-950">Not Received</option>
              </select>
              {/* Dropdown Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg 
                  className="h-4 w-4 text-sky-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Remarks */}
        <div className="mt-4 mb-4 relative">
          <label className="absolute -top-2 left-5 bg-white px-1 text-sky-700 text-xs font-bold z-10">
            Remarks
          </label>
          <textarea
            placeholder="Enter Remarks"
            className="text-xs w-full h-24 rounded-[20px] border-2 border-sky-700 px-5 py-3 text-sky-950 placeholder:text-sky-700/70 focus:outline-none focus:ring-1 focus:ring-[#004077] focus:text-sky-950 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <button className="bg-sky-700/95 cursor-pointer hover:bg-sky-800 text-white text-sm font-medium rounded-2xl px-6 py-2 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default OverlayOutgoing;