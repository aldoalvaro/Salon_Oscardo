import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        // Redirect ke dashboard utama jika berhasil
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Terjadi kesalahan");
        } else {
          setError(err.message || "Unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome     
      </h2>
      
      {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
      {loading && <div className="bg-blue-100 text-blue-600 p-3 rounded mb-4 text-sm animate-pulse">Sedang Memproses...</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">Username / Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="emilys"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#10b981] focus:border-[#10b981]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="emilyspass"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#10b981] focus:border-[#10b981]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#10b981] hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          {loading ? "Login..." : "Login"}
        </button>
      </form>
    </div>
  );
}