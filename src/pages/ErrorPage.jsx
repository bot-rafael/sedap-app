import { FaFacebook, FaTwitter, FaPinterest, FaGooglePlusG } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ErrorPage({ code, description, backTo = '/', buttonLabel = 'Go Back to Dashboard' }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center relative overflow-hidden px-6 py-12 sm:px-8 md:px-10">
      {/* Background SVG animasi kecil */}
      <svg
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-10 animate-pulse pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        <circle fill="#34D399" cx="30" cy="30" r="20">
          <animate attributeName="r" values="20;25;20" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle fill="#3B82F6" cx="70" cy="35" r="15">
          <animate attributeName="cy" values="35;40;35" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle fill="#EF4444" cx="50" cy="70" r="10">
          <animate attributeName="r" values="10;13;10" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Konten utama */}
      <div className="relative z-10 mb-8">
        <h1 className="text-[80px] sm:text-[100px] md:text-[120px] font-extrabold text-gray-800 leading-none">Oops!</h1>
        <h2 className="text-[72px] sm:text-[100px] md:text-[120px] font-extrabold text-gray-600 leading-none">{code}</h2>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 mb-4 max-w-md">{description}</p>
      </div>

      <Link to={backTo} className="relative z-10 inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
        {buttonLabel}
      </Link>

      {/* Sosial Media Icons */}
      <div className="relative z-10 flex justify-center space-x-4 mt-8 text-gray-400 text-2xl">
        <a href="#" className="hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-red-600">
          <FaPinterest />
        </a>
        <a href="#" className="hover:text-red-400">
          <FaGooglePlusG />
        </a>
      </div>
    </div>
  );
}
