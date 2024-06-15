import React from 'react'
import pool1 from '../assets/images/pool1.jpg'

const ServiceReq = () => {
  return (
    <div id='service-request'>
      <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${pool1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Request A Repair</h1>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-lg p-8 mt-8">
        <p className="mb-4">
          Whether you're a current weekly customer and need additional assistance with your pool and spa needs, or if you're not a current customer and would like to have your pool and spa equipment repaired, Sparkle would love to help.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Please use the form below to submit your repair appointment request and we will reach out to you within two business days.
        </p>
        <p className="mb-4 text-sm text-red-500">
          Important: If you require a repair and believe you are covered by warranty, please submit a <a href="#" className="text-blue-500 underline">Warranty Request</a>.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Name <span className="text-red-500">*</span></label>
            <div className="flex">
              <input type="text" placeholder="First Name" className="w-1/2 p-2 border border-gray-300 rounded mr-2" required />
              <input type="text" placeholder="Last Name" className="w-1/2 p-2 border border-gray-300 rounded" required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Code</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Phone <span className="text-red-500">*</span></label>
            <input type="tel" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Customer Email Address <span className="text-red-500">*</span></label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Defective Part <span className="text-red-500">*</span></label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description of Problem <span className="text-red-500">*</span></label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-[100px] bg-blue-500 text-white p-2 rounded-3xl hover:bg-white hover:text-gray-600 hover:ring-4 hover:ring-blue-600 hover:font-semibold">Submit</button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default ServiceReq