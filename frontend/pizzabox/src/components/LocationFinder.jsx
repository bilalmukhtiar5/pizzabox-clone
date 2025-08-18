import React, { useEffect, useState } from "react";


export default function LocationFinder() {
    const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

    useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setLocation({ lat, lng });

          // fetch address using free API
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await res.json();
            setAddress(data.display_name);
          } catch (err) {
            setError("Could not fetch address");
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation not supported in this browser.");
    }
  }, []);

  return (
     <div className="p-3">
      <h5>User Location</h5>
      {location && (
        <p>
          Latitude: {location.lat} <br />
          Longitude: {location.lng}
        </p>
      )}
      {address && <p><strong>Address:</strong> {address}</p>}
      {error && <p className="text-danger">Error: {error}</p>}
    </div>
  )
}
