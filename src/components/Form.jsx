import React, { useState } from "react";
import Swal from 'sweetalert2';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill in all fields!',
        background: '#2a2a2a',
        color: '#ffffff',
        confirmButtonColor: '#A6BBCC',
      });
      return;
    }

    // Show success message
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting me. I will get back to you soon!',
      background: '#2a2a2a',
      color: '#ffffff',
      confirmButtonColor: '#A6BBCC',
      confirmButtonText: 'Great!'
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="text-[#FFFFFF] h-max flex justify-center w-full px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-8 sm:space-y-10">
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-base sm:text-lg md:text-xl text-[#FFFFFF] tracking-widest mb-2 opacity-50"
          >
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-[#FFFFFF] outline-none py-2 text-white text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-base sm:text-lg md:text-xl text-[#FFFFFF] tracking-widest mb-2 opacity-50"
          >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-[#FFFFFF] outline-none py-2 text-white text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-base sm:text-lg md:text-xl text-gray-400 tracking-widest mb-2 opacity-50"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-[#FFFFFF] outline-none py-2 resize-none text-[#FFFFFF] text-sm sm:text-base"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex flex-col items-center mt-6 sm:mt-8">
          <button
            type="button"
            onClick={handleSubmit}
            className="text-xl sm:text-2xl tracking-widest text-[#FFFFFF] cursor-pointer hover:text-[#A6BBCC] transition-colors"
          >
            SEND MESSAGE
          </button>
          <hr className="w-44 sm:w-52 border-t-2 border-[#FFFFFF] mt-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Form;






