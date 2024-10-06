import React from 'react';

const PromotionSection = () => {
  return (
    <div className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Promotion
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Promote your events in key locations at the top of the page and
            attract more attention from your audience.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Promote Your Event
          </button>
        </div>

        {/* Image */}
        <div>
          <img 
            src="your-image-url.jpg" 
            alt="Promote events"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
