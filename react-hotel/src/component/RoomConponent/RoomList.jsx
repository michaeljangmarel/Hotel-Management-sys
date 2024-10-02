import React, { useEffect, useState } from "react";
import { getAllRoom } from "../service/Room.service";
import { NavLink } from "react-router-dom";
import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ExclamationCircleIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";

const Roomlist = () => {
  const [Room, setRoom] = useState([]);
  const RoomDataReciever = () => {
    getAllRoom()
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  };

  // render
  useEffect(() => {
    RoomDataReciever();
  }, []);
  return (
    <>
      <div>
        {/* Featured Rooms Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
              Featured Rooms
            </h2>
            {JSON.stringify(Room) == "[]" ? (
              <div className="flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {Room.map((one) => (
                  <div
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                    key={one.id}
                  >
                    <img
                      src={one.imgUrl}
                       width={400}
                      height={300}
                      alt="Room 1"
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl text-green-400 mb-2 flex items-center">
                        <HomeIcon className="w-6 h-6 text-green-400 mr-2" />
                        UB - {one.roomName}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Enjoy a luxurious stay in our deluxe room with all
                        modern amenities.
                      </p>

                      <h4 className="flex items-center mb-2">
                        <BuildingOfficeIcon className="w-5 h-5 text-gray-500 mr-2" />
                        {one.floor} Floor
                      </h4>

                      <p className="flex items-center mt-3 mb-2">
                        <CurrencyDollarIcon className="w-5 h-5 text-gray-500 mr-2" />
                        Price - {one.price} $
                      </p>

                      <p className="flex items-center mt-3">
                        <HomeIcon className="w-5 h-5 text-gray-500 mr-2" />
                        Type - {one.roomType} Room
                      </p>

                      {one.available ? (
                        <NavLink
                          to={"/book/" + one.id}
                          className="inline-block bg-blue-600 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                        >
                          Book Now
                        </NavLink>
                      ) : (
                        <button className="mt-3 flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                          <ExclamationCircleIcon className="w-5 h-5 text-white mr-2" />
                          Room Not Available
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-400 py-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="text-lg mb-8">
            Book now and experience the best in hospitality.
          </p>
        </section>
      </div>
    </>
  );
};

export default Roomlist;



 