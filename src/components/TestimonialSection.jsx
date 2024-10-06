'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

const TestimonialSection = () => {
  const testimonialData = [
    { id: 1, title: 'Your next credit card', tickets: '24', image: 'https://plus.unsplash.com/premium_photo-1681533650863-6a3cd8a77977?q=80&w=1729&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Get rewards instantly', tickets: '15', image: 'https://media.istockphoto.com/id/1289221809/photo/woman-using-cashback-app-on-phone.jpg?s=1024x1024&w=is&k=20&c=-NJ0C_OCG0zRSZPme9TzjDAz7pW4dNkoEQCTExHyNB4=' },
    { id: 3, title: 'Exclusive deals', tickets: '30', image: 'https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, title: 'Your next events tickets here', tickets: '24', image: 'https://media.istockphoto.com/id/1130434203/photo/rear-view-of-sitting-audience.jpg?s=1024x1024&w=is&k=20&c=7ofKG5GgvZM7ncAFjCJACp1GQIKcdx5xZ_qOh4e4l-w=' },
    { id: 5, title: 'Order meals during events', tickets: '15', image: 'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="bg-white text-black py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-black text-white p-6 rounded-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Left section with text */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold">{testimonial.title}</h2>
                <p className="text-xl md:text-3xl font-semibold text-yellow-500">
                  gets you <span className="text-4xl">{testimonial.tickets} free*</span> tickets!
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg hover:bg-red-600">
                  Apply Now
                </button>
                <p className="text-sm text-gray-400">*T&Cs Apply</p>
              </div>

              {/* Right section with image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={testimonial.image}
                  alt="Credit Card"
                  className="w-full md:w-3/4 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;



