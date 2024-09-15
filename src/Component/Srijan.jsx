import React, { useState } from "react";

const BinLookup = () => {
  const [bin, setBin] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchBinDetails = async () => {
    try {
      const res = await fetch("https://drlabapis.onrender.com/api/bin?bin="+bin);
      const data = await res.json();

      console.log(data);
      
      
      if (res.ok) {
        setResponse(data);
        setError(null);
      } else {
        setError("Failed to fetch bin details");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div>
      <h1>Bin Lookup</h1>
      <input
        type="text"
        value={bin}
        onChange={(e) => setBin(e.target.value)}
        placeholder="Enter bin number"
      />
      <button onClick={fetchBinDetails}>Lookup BIN</button>

      {response && (
        <div>
          <h3>Bin Details:</h3>
          <p>Status: {response.status}</p>
          <p>Type: {response.type}</p>
          <p>Scheme: {response.scheme}</p>
          <p>Tier: {response.tier}</p>
          <p>Country: {response.country}</p>
          <p>Issuer: {response.issuer}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default BinLookup;