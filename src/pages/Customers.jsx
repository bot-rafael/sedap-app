import { useState } from 'react';
import { FaUserFriends, FaMedal } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import customers from '../assets/data/customers.json';
import DashboardCard from '../components/DashboardCard';
import GenericForm from '../components/GenericForm';

export default function Customers() {
  const totalCustomers = customers.length;
  const goldMembers = customers.filter((c) => c.Loyalty === 'Gold').length;
  const silverMembers = customers.filter((c) => c.Loyalty === 'Silver').length;
  const bronzeMembers = customers.filter((c) => c.Loyalty === 'Bronze').length;

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle penambahan customer baru
  const handleAddCustomer = (newCustomer) => {
    customers.push(newCustomer); // Menambahkan customer baru ke daftar
    console.log('New Customer Added: ', newCustomer);
  };

  // Fields untuk form customer
  const customerFields = [
    { name: 'Customer ID', label: 'Customer ID', type: 'text', required: true },
    { name: 'Customer Name', label: 'Customer Name', type: 'text', required: true },
    { name: 'Email', label: 'Email', type: 'email', required: true },
    { name: 'Phone', label: 'Phone', type: 'text', required: true },
    { name: 'Loyalty', label: 'Loyalty', type: 'select', options: ['Bronze', 'Silver', 'Gold'], required: true },
  ];

  return (
    <div id="customers-container">
      <PageHeader title="Customers" breadcrumbs={['Dashboard', 'Customers']}>
        <div className="flex space-x-2">
          <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg text-sm font-medium" onClick={() => setIsFormVisible(true)}>
            Add Customer
          </button>
          <button id="export-button" className="bg-biru text-white px-4 py-2 rounded-lg text-sm font-medium">
            Export
          </button>
          <button id="back-button" className="bg-abu text-black px-4 py-2 rounded-lg text-sm font-medium">
            Kembali
          </button>
        </div>
      </PageHeader>

      {/* Gunakan GenericForm untuk menambah customer */}
      <GenericForm
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
        onSubmit={handleAddCustomer}
        fields={customerFields} // Kirim fields untuk customer
      />

      {/* Tampilan dashboard */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <DashboardCard icon={<FaUserFriends />} color="bg-green-500" count={totalCustomers} label="Total Customers" />
        <DashboardCard icon={<FaMedal />} color="bg-yellow-500" count={goldMembers} label="Gold Members" />
        <DashboardCard icon={<FaMedal />} color="bg-gray-500" count={silverMembers} label="Silver Members" />
        <DashboardCard icon={<FaMedal />} color="bg-amber-800" count={bronzeMembers} label="Bronze Members" />
      </div>

      {/* Tampilkan data customers */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {customers.map((customer) => (
          <div key={customer['Customer ID']} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">Customer ID: {customer['Customer ID']}</h2>
            <p className="text-sm text-gray-600">Name: {customer['Customer Name']}</p>
            <p className="text-sm text-gray-600">Email: {customer.Email}</p>
            <p className="text-sm text-gray-600">Phone: {customer.Phone}</p>
            <p className="text-sm text-gray-600">
              Loyalty: "<span className={`text-${customer.Loyalty === 'Gold' ? 'yellow' : customer.Loyalty === 'Silver' ? 'gray' : 'amber'}-600`}>{customer.Loyalty}</span>"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
