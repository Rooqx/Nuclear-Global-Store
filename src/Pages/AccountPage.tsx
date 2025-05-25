import { useState } from "react";

const AccountPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "profile" | "orders" | "addresses"
  >("profile");

  // Static demo data
  const user = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    joined: "January 2023",
    orders: [
      {
        id: "ORD-1234",
        date: "2024-03-15",
        items: ["UltraBook Pro Laptop", "Wireless Mouse"],
        total: "600,000",
        status: "Delivered",
      },
    ],
    addresses: [
      {
        street: "123 Ikeja Street",
        city: " Lagos",
        state: "Lagos",
        zip: "10001",
        isPrimary: true,
      },
    ],
  };

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Side Navigation */}
        <div className="w-full space-y-2 md:w-64">
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h2 className="mb-4 text-lg font-bold">My Account</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left p-3 rounded-lg ${
                  activeTab === "profile"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left p-3 rounded-lg ${
                  activeTab === "orders"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                My Orders
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full text-left p-3 rounded-lg ${
                  activeTab === "addresses"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                Address Book
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
              <h2 className="mb-6 text-2xl font-bold">Profile Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
                    <span className="text-2xl text-gray-400">SJ</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    Upload Photo
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm text-gray-500">
                      Full Name
                    </label>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-500">
                      Email
                    </label>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-500">
                      Joined Since
                    </label>
                    <p className="font-medium">{user.joined}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
              <h2 className="mb-6 text-2xl font-bold">Order History</h2>
              <div className="space-y-4">
                {user.orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 transition-colors border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Order #{order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                        {order.status}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {order.items.join(", ")}
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-medium">₦{order.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Add New Address
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {user.addresses.map((address, index) => (
                  <div key={index} className="relative p-4 border rounded-lg">
                    {address.isPrimary && (
                      <span className="absolute px-2 py-1 text-sm text-blue-800 bg-blue-100 rounded top-2 right-2">
                        Primary
                      </span>
                    )}
                    <div className="space-y-1">
                      <p className="font-medium">{address.street}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                      <button className="text-sm text-red-600 hover:text-red-700">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-md p-6 bg-white rounded-xl">
            <h3 className="mb-4 text-xl font-bold">Add New Address</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Street Address
                </label>
                <input className="w-full p-2 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">City</label>
                  <input className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    ZIP Code
                  </label>
                  <input className="w-full p-2 border rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
