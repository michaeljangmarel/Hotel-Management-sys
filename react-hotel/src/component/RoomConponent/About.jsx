import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
            Welcom To UB Hotel
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="src/assets/images-500x500.jpg"
                alt="Hotel Image"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-4">
                Welcome to our luxurious hotel, where comfort meets elegance. We
                are dedicated to providing you with the best experience during
                your stay. Our hotel offers a variety of rooms, excellent
                service, and an atmosphere that makes you feel at home.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                From the moment you arrive, our staff will ensure your needs are
                met, whether you are here for business or leisure. We have
                state-of-the-art facilities, gourmet dining, and stunning views
                that make your stay unforgettable.
              </p>
              <p className="text-lg text-gray-600">
                We pride ourselves on delivering personalized service and
                ensuring every guest leaves with a smile. Thank you for choosing
                us, and we look forward to welcoming you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
