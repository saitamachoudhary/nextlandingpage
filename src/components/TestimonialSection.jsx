import React from "react";

const testimonials = [
  {
    logo: "https://cdn.evbstatic.com/s3-build/fe/build/images/caebfb773df2d86560078a89ea1718d2-mamas-nightmarket.svg",
    company: "MAMA's Nightmarket",
    quote:
      "For people coming to our event outside of San Francisco, nearly 70% of our attendees say they found it on Eventbrite.",
  },
  {
    logo: "https://cdn.evbstatic.com/s3-build/fe/build/images/a7f5cc2f20ebf4b2044c38d1a63866d2-Seed-talks.svg",
    company: "Seed Talks",
    quote:
      "The conversion rate on Eventbrite was 20% better than other ticketing platforms…plus the automated emails generate a lot of new sales each time we post a new event.",
  },
  {
    logo: "https://cdn.evbstatic.com/s3-build/fe/build/images/759f69873f707c14793eb7baa0e56a32-something-dope-for-the-people.svg",
    company: "Something Dope for the People",
    quote:
      "We rely on Eventbrite for its discoverability and we're gaining followers. I can't think of an event where it wouldn't make sense to be using Eventbrite's marketing tools.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Hear what our organizers are saying
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={testimonial.logo}
                alt={testimonial.company}
                className="h-12 w-12 mb-4 rounded-full"
              />
              <p className="text-lg font-medium text-gray-900">
                {testimonial.quote}
              </p>
              <p className="mt-4 text-base font-semibold text-indigo-600">
                {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
