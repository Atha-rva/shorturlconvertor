import React, { useState } from "react";
import axios from "axios";

const ShortUrlConverter = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShorten = async () => {
    if (!longUrl) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${longUrl}`);
      setShortUrl(response.data);
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Short URL Converter</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleShorten} disabled={loading} style={{ padding: "10px 20px" }}>
        {loading ? "Shortening..." : "Shorten"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortUrl && (
        <p>
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default ShortUrlConverter;
