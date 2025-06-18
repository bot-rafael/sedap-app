import { CgNotes } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { BiError, BiDetail } from 'react-icons/bi';
import { useState } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function SidebarMenu() {
  const [activeMainMenu, setActiveMainMenu] = useState('menu-1');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMainClick = (menuId) => {
    setActiveMainMenu(menuId);
    setActiveSubMenu(''); // Reset sub menu
    setDropdownOpen(false); // Optional: Tutup dropdown jika pindah menu
  };

  const handleSubClick = (subId) => {
    setActiveMainMenu('menu-4'); // Asumsikan menu dropdown punya ID khusus
    setActiveSubMenu(subId);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setActiveMainMenu('menu-4');
  };

  return (
    <div id="sidebar-menu" className="mt-10 px-2 space-y-1">
      <ul className="space-y-3">
        <li>
          <NavLink
            to="/"
            className={`hover:text-hijau flex items-center rounded-xl p-4 font-medium ${activeMainMenu === 'menu-1' ? 'bg-green-100 font-extrabold' : ''}`}
            onClick={() => handleMainClick('menu-1')}
            aria-selected={activeMainMenu === 'menu-1'}
          >
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/orders"
            className={`hover:text-hijau flex items-center rounded-xl p-4 font-medium ${activeMainMenu === 'menu-2' ? 'bg-green-100 font-extrabold' : ''}`}
            onClick={() => handleMainClick('menu-2')}
            aria-selected={activeMainMenu === 'menu-2'}
          >
            <BiDetail className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/customers"
            className={`hover:text-hijau flex items-center rounded-xl p-4 font-medium ${activeMainMenu === 'menu-3' ? 'bg-green-100 font-extrabold' : ''}`}
            onClick={() => handleMainClick('menu-3')}
            aria-selected={activeMainMenu === 'menu-3'}
          >
            <RiCustomerService2Fill className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users"
            className={`hover:text-hijau flex items-center rounded-xl p-4 font-medium ${activeMainMenu === 'menu-4' ? 'bg-green-100 font-extrabold' : ''}`}
            onClick={() => handleMainClick('menu-4')}
            aria-selected={activeMainMenu === 'menu-4'}
          >
            <FaUsers className="mr-4 text-xl" />
            User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/notes"
            className={`hover:text-hijau flex items-center rounded-xl p-4 font-medium ${activeMainMenu === 'menu-5' ? 'bg-green-100 font-extrabold' : ''}`}
            onClick={() => handleMainClick('menu-5')}
            aria-selected={activeMainMenu === 'menu-5'}
          >
            <CgNotes className="mr-4 text-xl" />
            Notes
          </NavLink>
        </li>

        <li>
          <div className={`hover:text-yellow-600 flex items-center rounded-lg p-3 font-medium text-base cursor-pointer transition-all ${activeMainMenu === 'menu-4' ? 'bg-yellow-100' : ''}`} onClick={toggleDropdown}>
            <BiError className="mr-3 text-2xl" />
            Errors
          </div>

          {isDropdownOpen && (
            <ul className="pl-6 pr-2 space-y-1">
              {[
                { code: '400', label: 'Bad Request' },
                { code: '401', label: 'Unauthorized' },
                { code: '403', label: 'Forbidden' },
              ].map(({ code, label }) => (
                <li key={code}>
                  <NavLink
                    to={`/error-${code}`}
                    className={`hover:text-red-600 flex items-center gap-3 rounded-lg px-4 py-2 font-medium text-sm transition-all ${activeSubMenu === `error-${code}` ? 'bg-red-100 font-semibold' : ''}`}
                    onClick={() => handleSubClick(`error-${code}`)}
                    aria-selected={activeSubMenu === `error-${code}`}
                  >
                    <GoArrowRight className="text-lg" />
                    Error {code}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
