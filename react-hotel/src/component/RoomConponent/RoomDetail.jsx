import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneRoom } from "../service/Room.service";
import { getLoggedUserData } from "../service/token/TokenSession";
import { BookingAsign } from "../service/Reservation";
import { BackspaceIcon } from "@heroicons/react/16/solid";
import * as Yup from "yup";

const RoomDetail = () => {
  const { id } = useParams();
  let user = getLoggedUserData();
  const [RoomDetail, setRoomDetail] = useState({});
  const [checkInDate, setCheckIn] = useState("");
  const [checkOutDate, setCheckout] = useState("");
  const [roomId, setRoomId] = useState();
  const [guestId] = useState(user);
  const navigator = useNavigate();

  // Validation schema
  const validationSchema = Yup.object({
    checkInDate: Yup.date()
      .required("Check-in date is required")
      .min(new Date(), "Check-in date cannot be in the past"),
    checkOutDate: Yup.date()
      .required("Check-out date is required")
      .min(Yup.ref("checkInDate"), "Check-out date cannot be before check-in date"),
  });

  const BookRoom = (e) => {
    e.preventDefault();

    // Create an object with the current form values
    const data = { checkInDate, checkOutDate };

    // Validate form data
    validationSchema
      .validate(data)
      .then(() => {
        // If validation passes, proceed with booking
        const bookingData = { guestId, roomId, checkInDate, checkOutDate };
        BookingAsign(bookingData)
          .then((res) => {
            alert(res.data);
            navigator("/my-reservation");
          })
          .catch((err) => console.log(err));
      })
      .catch((validationError) => {
        // Show validation errors
        alert(validationError.message);
      });
  };

  useEffect(() => {
    getOneRoom(id)
      .then((res) => {
        setRoomDetail(res.data);
        setRoomId(res.data.id);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div key={RoomDetail.id} className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Room Image */}
          <Link to="/service">
            <BackspaceIcon className="w-10 h-10 ml-4 mt-4" />
          </Link>
          <img
            src={RoomDetail.imgUrl}
            alt="Room"
            className="w-full h-60 md:h-80 lg:h-96 object-cover"
          />

          {/* Room Details */}
          <div className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              UB - {RoomDetail.roomName}
            </h2>
            <p className="text-gray-600 mb-4">
              A spacious room with a beautiful view, comfortable bed, and free WiFi.
            </p>
            <p>Room Type - {RoomDetail.roomType} Room</p>
            <p>Floor - {RoomDetail.floor}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg md:text-xl font-bold text-gray-700">
                Price: ${RoomDetail.price}/night
              </p>
            </div>

            {/* Booking Form */}
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Room Booking
              </h2>
              <form onSubmit={BookRoom}>
                {/* Check-in Input */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="checkInDate"
                  >
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkInDate"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    value={checkInDate}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* Check-out Input */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="checkOutDate"
                  >
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkOutDate"
                    min={checkInDate || new Date().toISOString().split("T")[0]}
                    onChange={(e) => setCheckout(e.target.value)}
                    value={checkOutDate}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
