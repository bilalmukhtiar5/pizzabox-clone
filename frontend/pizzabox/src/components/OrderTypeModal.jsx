import React, { useState } from 'react'


const OrderTypeModal = () => {
    const [orderType, setOrderType] = useState(null);
    const [location, setLocation] = useState("");
    const [serviceArea, setServiceArea] = useState("");

  const handleCurrentLocation = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
      });
    } else {
      alert("Geolocation not supported!");
    }
  };

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">Select Your Order Type</h2>

        {/* Order Type Buttons */}
        {!orderType && (
          <div className="flex gap-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setOrderType("delivery")}
            >
              Delivery
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setOrderType("pickup")}
            >
              Pickup
            </button>
          </div>
        )}

        {/* Delivery Options */}
        {orderType === "delivery" && (
          <div className="mt-4 space-y-3">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              onClick={handleCurrentLocation}
            >
              Use Current Location
            </button>

            <input
              type="text"
              placeholder="Enter City (e.g. Peshawar)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 w-full rounded"
            />

            <select
              className="border p-2 w-full rounded"
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
            >
              <option value="">Select Area</option>
              <option value="Hayatabad">Hayatabad</option>
              <option value="Saddar">Saddar</option>
              <option value="University Road">University Road</option>
              <option value="Ring Road">Ring Road</option>
            </select>
          </div>
        )}

        {/* Pickup Info */}
        {orderType === "pickup" && (
          <p className="mt-4 text-gray-600">
            You selected <b>Pickup</b>. Visit our main branch in Peshawar.
          </p>
        )}
      </div>
    </div>
  )
}

export default OrderTypeModal