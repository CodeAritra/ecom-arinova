import React, { useEffect, useState } from "react";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  joined: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: "Delivered" | "Processing" | "Cancelled";
  items: number;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProfilePage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const user: UserInfo = {
    name: "Aritra Dhank",
    email: "aritra@example.com",
    phone: "+91 9876543210",
    address: "Kolkata, West Bengal, India",
    joined: "Jan 2024",
  };

  const orders: Order[] = [
    {
      id: "ORD123",
      date: "2025-10-28",
      total: 1999,
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD124",
      date: "2025-11-01",
      total: 1299,
      status: "Processing",
      items: 1,
    },
  ];

  const wishlist: WishlistItem[] = [
    {
      id: "W1",
      name: "Noise Smartwatch X200",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1660827857058-48419a156675?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "W2",
      name: "Nike Air Zoom Pegasus 40",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1662411198835-c5a151d2af9e?auto=format&fit=crop&w=765&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 transition-all">
      <div className="max-w-6xl mx-auto bg-base-100 rounded-3xl shadow-xl overflow-hidden">
        {/* HEADER SECTION */}
        <div className="bg-primary text-white p-8 flex flex-col sm:flex-row items-center gap-6 relative">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-sm opacity-90">{user.email}</p>
            <p className="text-sm opacity-90">{user.phone}</p>
            <p className="mt-2 text-sm opacity-80">
              Member since {user.joined}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-outline btn-sm text-white hover:bg-white hover:text-primary transition-all">
              Edit Profile
            </button>
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-sm bg-white text-primary hover:bg-slate-100 transition"
              title="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.485-8.485h1M3.515 12.515h1m12.02 5.657l.707.707m-11.314 0l.707-.707M16.243 7.757l.707-.707M7.757 16.243l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707 8 8 0 1017.293 13.293z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="p-6 space-y-10">
          {/* USER INFO */}
          <section className="card bg-base-200 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium text-base-content/70">
                    Full Name:
                  </span>{" "}
                  {user.name}
                </p>
                <p>
                  <span className="font-medium text-base-content/70">
                    Email:
                  </span>{" "}
                  {user.email}
                </p>
                <p>
                  <span className="font-medium text-base-content/70">
                    Phone:
                  </span>{" "}
                  {user.phone}
                </p>
                <p>
                  <span className="font-medium text-base-content/70">
                    Address:
                  </span>{" "}
                  {user.address}
                </p>
              </div>
            </div>
          </section>

          {/* ORDER HISTORY */}
          <section className="card bg-base-200 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>
              <div className="overflow-x-auto rounded-lg">
                <table className="table w-full">
                  <thead>
                    <tr className="bg-base-300 text-base-content/70">
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Total (₹)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-base-100 transition"
                      >
                        <td className="font-semibold">{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.items}</td>
                        <td>₹{order.total}</td>
                        <td>
                          <span
                            className={`badge ${
                              order.status === "Delivered"
                                ? "badge-success"
                                : order.status === "Processing"
                                ? "badge-warning"
                                : "badge-error"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* WISHLIST */}
          <section className="card bg-base-200 shadow-md border border-base-300">
            <div className="card-body">
              <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="card hover:bg-base-100 hover:shadow-xl transition-all duration-300 border-2 border-base-300"
                  >
                    <figure className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-48 w-full object-cover rounded-t-xl"
                      />
                      <div className="absolute top-2 right-2 badge badge-secondary text-xs p-2">
                        Wishlist
                      </div>
                    </figure>
                    <div className="card-body">
                      <h3 className="font-semibold text-base-content">
                        {item.name}
                      </h3>
                      <p className="text-primary font-bold text-lg">
                        ₹{item.price}
                      </p>
                      <div className="card-actions justify-end mt-2">
                        <button className="btn btn-sm btn-primary rounded-full">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
