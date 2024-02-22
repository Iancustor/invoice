"use client";
import InvoiceCompo from "@/components/InvoiceCompo";
import React, { useState } from "react";

function page() {
  const [personName, setPersonName] = useState("");
  const [productName, setProductName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmition(e) {
    e.preventDefault();
    // setting data to local storage
    localStorage.setItem("data", JSON.stringify(newProduct));

    handleInput();
    // console.log(id, title, price, quantity);
  }
  const id = Math.floor(Math.random() * 1000);
  // console.log(id);
  const newProduct = {
    id,
    personName,
    productName,
    title,
    price,
    quantity,
  };

  // const data = [];
  const data = JSON.parse(localStorage.getItem("data") ?? []);
  // console.log(data);


  function handleInput() {
    setTitle("");
    setPrice("");
    setQuantity("");
    setPersonName("");
    setProductName("");
  }
  return (
    <div className="flex bg-fuchsia-100  py-6 px-6">
      <div className="w-[32%] min-h-screen p-4">
        <form
          onSubmit={handleSubmition}
          action=""
          className=" px-7 bg-fuchsia-200 py-4 rounded-t-xl"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              To
            </label>
            <input
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Product Name
            </label>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Quantity
            </label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-[65%] min-h-screen p-4">
        <InvoiceCompo data={data} />
      </div>
    </div>
  );
}

export default page;
