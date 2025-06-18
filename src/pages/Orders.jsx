import { useState } from 'react';
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from 'react-icons/fa';
import orders from '../assets/data/orders.json';
import PageHeader from '../components/PageHeader';
import DashboardCard from '../components/DashboardCard';
import GenericForm from '../components/GenericForm';

export default function Orders() {
  const totalOrders = orders.length;
  const totalCompleted = orders.filter((order) => order.Status === 'Completed').length;
  const totalCancelled = orders.filter((order) => order.Status === 'Cancelled').length;
  const totalRevenue = orders
    .filter((order) => order.Status === 'Completed')
    .reduce((acc, order) => acc + order['Total Price'], 0)
    .toFixed(2);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddOrder = (newOrder) => {
    orders.push(newOrder);
    console.log("New Order Added: ", newOrder);
  };

  // Fields untuk form order
  const orderFields = [
    { name: 'Order ID', label: 'Order ID', type: 'text', required: true },
    { name: 'Customer Name', label: 'Customer Name', type: 'text', required: true },
    { name: 'Status', label: 'Status', type: 'select', options: ['Pending', 'Completed', 'Cancelled'], required: true },
    { name: 'Total Price', label: 'Total Price', type: 'number', required: true },
    { name: 'Order Date', label: 'Order Date', type: 'date', required: true }
  ];

  return (
    <div id="orders-container">
      <PageHeader title="Orders" breadcrumbs={['Dashboard', 'Orders']}>
        <div className="flex space-x-2">
          <button
            id="add-button"
            className="bg-hijau text-white px-4 py-2 rounded-lg text-sm font-medium"
            onClick={() => setIsFormVisible(true)}
          >
            Add Orders
          </button>
          <button id="export-button" className="bg-biru text-white px-4 py-2 rounded-lg text-sm font-medium">
            Export
          </button>
          <button id="back-button" className="bg-abu text-black px-4 py-2 rounded-lg text-sm font-medium">
            Kembali
          </button>
        </div>
      </PageHeader>

      {/* Gunakan GenericForm */}
      <GenericForm
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
        onSubmit={handleAddOrder}
        fields={orderFields} // Mengirim fields untuk order
      />

      {/* Tampilan dashboard */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <DashboardCard icon={<FaShoppingCart />} color="bg-green-600" count={totalOrders} label="Total Orders" />
        <DashboardCard icon={<FaTruck />} color="bg-blue-600" count={totalCompleted} label="Completed Orders" />
        <DashboardCard icon={<FaBan />} color="bg-red-600" count={totalCancelled} label="Cancelled Orders" />
        <DashboardCard icon={<FaDollarSign />} color="bg-yellow-600" count={`$.${totalRevenue}`} label="Total Revenue" />
      </div>

      {/* Tampilkan data orders */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {orders.map((order) => (
          <div key={order['Order ID']} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">Order ID: {order['Order ID']}</h2>
            <p className="text-sm text-gray-600">Customer: {order['Customer Name']}</p>
            <p className="text-sm text-gray-600">
              Status: "<span className={`text-${order.Status === 'Completed' ? 'green' : order.Status === 'Cancelled' ? 'red' : 'yellow'}-600`}>{order.Status}</span>"
            </p>
            <p className="text-sm text-gray-600">Total Price: ($).{order['Total Price']}</p>
            <p className="text-sm text-gray-600">Order Date: {order['Order Date']}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
