import React, { useState } from 'react';
import OverlayIncoming from './overlayIncoming.jsx';

function Incoming() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("May");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // 👈 Controls the modal

  const documents = [
    { date: "May 27 2025 | 12:00 PM", dtsNo: "TOS5968", time: "AM", remarks: "n/a" },
    { date: "May 26 2025 | 10:00 AM", dtsNo: "ORD6233", time: "PM", remarks: "n/a" },
    { date: "May 25 2025 | 9:00 AM", dtsNo: "ORD6143", time: "PM LATE", remarks: "SCHOLARS_2nd Tranche" },
    { date: "May 24 2025 | 8:30 AM", dtsNo: "HR6446", time: "AM", remarks: "SCHOLARS_2nd Tranche" },
    { date: "May 23 2025 | 8:00 AM", dtsNo: "FO6373", time: "AM", remarks: "SCHOLARS_2nd Tranche" }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());

  const filteredDocuments = documents.filter(doc =>
    doc.dtsNo.toLowerCase().includes(searchTerm.toLowerCase()) &&
    doc.date.includes(selectedMonth) &&
    doc.date.includes(selectedYear)
  );

  const ActionButtons = () => (
    <div className="flex gap-2 justify-center items-center">
      <button className="w-7 h-7 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer">
        <img src="./viewIcon.svg" alt="View Icon" className="w-3 h-3" />
      </button>
      <button className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center cursor-pointer">
        <img src="./editIcon.svg" alt="Edit Icon" className="w-3 h-3" />
      </button>
      <button className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer">
        <img src="./archiveIcon.svg" alt="Archive Icon" className="w-3 h-3" />
      </button>
    </div>
  );

  return (
    <div className="p-4 mt-5 relative">
      {/* Overlay Incoming Modal */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <OverlayIncoming onClose={() => setShowOverlay(false)} />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-end mb-4 gap-3">
        <div className="w-96 h-11 bg-neutral-100 text-xs rounded-2xl shadow-sm border border-sky-700 flex items-center px-4 text-sky-950/50 relative">
          <input
            type="text"
            placeholder="Search for DTS No."
            className="w-full bg-transparent outline-none text-sky-950"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src="./searchIcon.svg" alt="Search Icon" className='w-5 h-5'/>
        </div>

        {/* Month dropdown */}
        <div className="relative">
          <button 
            className="w-30 h-11 bg-sky-700/95 rounded-2xl shadow-sm flex items-center justify-left px-4 text-white text-sm font-semibold cursor-pointer"
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            {selectedMonth}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg 
                        className="h-4 w-4 text-white"
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
          </button>
          {isMonthDropdownOpen && (
            <div className="absolute z-10 mt-1 w-32 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {months.map((month, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 hover:bg-sky-100 cursor-pointer ${
                    month === selectedMonth ? "bg-sky-200" : ""
                  }`}
                  onClick={() => {
                    setSelectedMonth(month);
                    setIsMonthDropdownOpen(false);
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year dropdown */}
        <div className="relative">
          <button 
            className="w-20 h-11 bg-sky-700/95 rounded-2xl shadow-sm flex items-center justify-left px-4 text-white text-sm font-semibold cursor-pointer"
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
          >
            {selectedYear}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg 
                        className="h-4 w-4 text-white"
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
          </button>
          {isYearDropdownOpen && (
            <div className="absolute z-10 mt-1 w-24 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {years.map((year, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 hover:bg-sky-100 cursor-pointer ${
                    year === selectedYear ? "bg-sky-200" : ""
                  }`}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsYearDropdownOpen(false);
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Record Button */}
        <button
          onClick={() => setShowOverlay(true)}
          className="w-35 h-11 bg-sky-700/95 rounded-2xl shadow-sm flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
        >
          <img src="./addIcon.svg" alt="Add Icon" className='mr-0.5'/>
          Add Record
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <div className="bg-sky-700 h-9 flex items-center rounded-lg px-4 text-white font-bold">
          <div className="w-40 text-center">DATE</div>
          <div className="w-50 text-center">DTS NO.</div>
          <div className="w-46 text-center">TIME</div>
          <div className="flex-1 text-center">REMARKS</div>
          <div className="w-48 ml-auto text-center">ACTIONS</div>
        </div>

        <div className="divide-y divide-sky-700/50 text-sm">
          {filteredDocuments.map((doc, index) => (
            <div key={index} className="h-12 flex items-center px-4 text-xs">
              <div className="w-40 text-stone-950 text-center">{doc.date}</div>
              <div className="w-50 text-stone-950 text-center font-bold">{doc.dtsNo}</div>
              <div className="w-46 text-stone-950 text-center">{doc.time}</div>
              <div className="flex-1 text-stone-950 text-center">{doc.remarks}</div>
              <div className="w-48 ml-auto">
                <ActionButtons />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Incoming;
