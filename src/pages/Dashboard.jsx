import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Dashboard" breadcrumbs={['Dashboard']}>
        <div className="flex space-x-2">
          <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg text-sm font-medium">
            Add
          </button>
          <button id="export-button" className="bg-biru text-white px-4 py-2 rounded-lg text-sm font-medium">
            Export
          </button>
          <button id="back-button" className="bg-abu text-black px-4 py-2 rounded-lg text-sm font-medium">
            Kembali
          </button>
        </div>
      </PageHeader>

      <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="orders-icon" className="text-3xl text-white bg-hijau rounded-full p-4">
            <FaShoppingCart />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">
              75
            </span>
            <span id="orders-text" className="text-gray-400">
              Total Orders
            </span>
          </div>
        </div>

        <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="delivered-icon" className="text-3xl text-white bg-biru rounded-full p-4">
            <FaTruck />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">
              175
            </span>
            <span id="delivered-text" className="text-gray-400">
              Total Delivered
            </span>
          </div>
        </div>

        <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="canceled-icon" className="text-3xl text-white bg-merah rounded-full p-4">
            <FaBan />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">
              40
            </span>
            <span id="canceled-text" className="text-gray-400">
              Total Canceled
            </span>
          </div>
        </div>

        <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="revenue-icon" className="text-3xl text-white bg-kuning rounded-full p-4">
            <FaDollarSign />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">
              Rp.128
            </span>
            <span id="revenue-text" className="text-gray-400">
              Total Revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
