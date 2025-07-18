"use client";
import React, { useState } from "react";

const AddUserPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <div className="flex items-center mb-8">
        <button className="mr-2 text-2xl text-cyan-400 hover:text-cyan-500" onClick={() => window.history.back()}>
          &#8592;
        </button>
        <h1 className="text-2xl font-bold">Add New User</h1>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">User Name<span className="text-red-500">*</span></label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="User Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label className="block font-medium mb-1">Email Address<span className="text-red-500">*</span></label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="my-email@gmail.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+17735551234" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div>
          <label className="block font-medium mb-1">Role</label>
          <select name="role" value={form.role} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Password<span className="text-red-500">*</span></label>
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="md:col-span-2 flex gap-4 mt-4">
          <button type="button" className="flex-1 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100">Cancel</button>
          <button type="submit" className="flex-1 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-white font-medium">Save User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
