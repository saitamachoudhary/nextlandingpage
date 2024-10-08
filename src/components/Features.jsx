'use client';
import React, { useState } from 'react';

const events = [
    {
        name: "Music Festival",
        date: "October 20, 2024",
        description: "Join us for an exciting evening of live music!",
        imgSrc: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        moreDetails: "This is a grand musical event featuring several top artists and bands. Enjoy food stalls, games, and a fantastic crowd.",
    },
    {
        name: "Art Workshop",
        date: "November 5, 2024",
        description: "Learn to create beautiful art pieces with our experts.",
        imgSrc: "https://images.unsplash.com/photo-1513738260158-30e559c10093?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        moreDetails: "In this workshop, professional artists will guide you through hands-on experience in painting, sketching, and mixed media.",
    },
];

const Events = () => {
    const [hoveredEvent, setHoveredEvent] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredEvent(index);
    };

    const handleMouseLeave = () => {
        setHoveredEvent(null);
    };
    return (
        <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">Upcoming Events</h3>
            <div className="grid grid-cols-1 gap-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={event.imgSrc} alt={event.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h4 className="text-xl font-bold mb-2">{event.name}</h4>
                            <p className="text-gray-600 mb-1">{event.date}</p>
                            <p className="text-gray-700">{event.description}</p>
                        </div>

                        {/* Hover effect content */}
                        {hoveredEvent === index && (
                            <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-6 flex flex-col justify-center items-center">
                                <h4 className="text-2xl font-bold mb-2">{event.name}</h4>
                                <p className="mb-4">{event.moreDetails}</p>
                                <a
                                    href="#"
                                    className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded transition-colors"
                                >
                                    Register Now
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const activities = [
  { 
    name: "Team Building", 
    description: "Engage in fun activities with your team.", 
    icon: "🛠️",
    details: "Team building activities include relay races, problem-solving challenges, and more to foster collaboration and communication."
  },
  { 
    name: "Yoga", 
    description: "Relax and rejuvenate with our yoga sessions.", 
    icon: "🧘", 
    details: "Our yoga sessions are designed for all levels, focusing on mindfulness, breathing techniques, and flexibility." 
  },
  { 
    name: "Hiking", 
    description: "Explore beautiful trails with guided hikes.", 
    icon: "🥾", 
    details: "Guided hikes cover scenic routes that range from easy to challenging, suitable for nature lovers of all ages."
  },
];

const ActivitiesMenu = () => {
  const [expandedActivity, setExpandedActivity] = useState(null);

  const toggleExpand = (index) => {
    setExpandedActivity(expandedActivity === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-6">Activities Menu</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-around space-x-4 cursor-pointer" onClick={() => toggleExpand(index)}>
              <span className="text-3xl">{activity.icon}</span>
              <div>
                <h4 className="text-xl font-bold mb-1">{activity.name}</h4>
                <p className="text-gray-700">{activity.description}</p>
              </div>
              <span className="ml-auto text-gray-500">{expandedActivity === index ? "−" : "+"}</span>
            </div>

            {/* Expandable section for additional details */}
            {expandedActivity === index && (
              <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-700">{activity.details}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const foodItems = [
    { 
      name: "Grilled Chicken", 
      description: "Served with a side of vegetables.", 
      imgSrc: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      category: "Main Course", 
      recommended: true 
    },
    { 
      name: "Vegan Salad", 
      description: "A mix of fresh organic greens.", 
      imgSrc: "https://images.unsplash.com/photo-1633311151183-c92c4e306e5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      category: "Appetizers", 
      recommended: false 
    },
    { 
      name: "Chocolate Cake", 
      description: "Delicious and rich dessert.", 
      imgSrc: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      category: "Desserts", 
      recommended: true 
    },
  ];
  
  const FoodMenu = () => {
    // Assign a distinct background color for each category
    const categoryColors = {
      "Appetizers": "bg-green-100",
      "Main Course": "bg-yellow-100",
      "Desserts": "bg-pink-100",
    };
  
    return (
      <div className="mb-12">
        <h3 className="text-3xl font-semibold mb-6">Food Menu</h3>
        <ul className="space-y-4">
          {foodItems.map((item, index) => (
            <li 
              key={index} 
              className={`flex lg:flex-row md:flex-row sm:flex-row flex-col items-center space-x-4 p-4 rounded-lg shadow-lg ${categoryColors[item.category]}`}
            >
              <img 
                src={item.imgSrc} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-full border-2 border-gray-300" 
              />
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm font-semibold text-gray-600">{item.category}</p>
              </div>
              {item.recommended && (
                <span className="bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  Chef's Recommendation
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

const Pricing = () => {
    return (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Pricing</h3>
            <p className="text-lg text-gray-700 mb-4">
                <strong>No Price for Host</strong> - Enjoy all events and services free of charge as a host!
            </p>
            <p className="text-gray-600">
                We believe in making your experience as enjoyable and worry-free as possible.
            </p>
        </div>
    );
};
const Features = () => {
    return (
        <section className="bg-gray-100 py-12 text-black">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-8">Our Features</h2>
                <p className="text-lg mb-12">Explore our exciting events, activities, and food offerings with zero hosting costs!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Events and Activities */}
                    <div>
                        <Events />
                        <ActivitiesMenu />
                    </div>

                    {/* Right Column: Food Menu and Pricing */}
                    <div>
                        <FoodMenu />
                        <Pricing />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features