import React, { useEffect, useState } from "react";
import { getLoggedUserData } from "../service/token/TokenSession";
import {
  getCheckTrue,
  getCurrentReservationData,
} from "../service/Reservation";
import { Link, useNavigate } from "react-router-dom";
import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";

const RoomDetailUser = () => {
  const user = getLoggedUserData();
  const [reservaton, setReservation] = useState([]);
  const navigator = useNavigate();

  const checkOut = (id) =>
    getCheckTrue(id)
      .then((res) => navigator("/service"))
      .catch((err) => console.log(err));

  useEffect(() => {
    getCurrentReservationData(user)
      .then((res) => setReservation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        {/* Header with icon */}
        <div className="text-center mb-3 mt-5 p-3">
          <Link to="/user-record"className="text-blue-500">
            <CalendarDateRangeIcon className="h-10 text-green-400 mx-auto" />
            Tap to View History
          </Link>
        </div>

        {/* Reservation Table */}
        <table className="min-w-full border-collapse border border-gray-300 bg-white w-full max-w-6xl mx-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Email
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Phone
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Room Floor
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Room Type
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Room Price
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reservaton.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  <h2 className="text-red-600">
                    No Room Booked{" "}
                    <Link className="text-primary" to="/service">
                      ( Tap Here ){" "}
                    </Link>
                  </h2>
                </td>
              </tr>
            ) : (
              reservaton.map((one) => (
                <tr key={one.id} className="even:bg-gray-100">
                  <td className="border border-gray-300 p-2">{one.email}</td>
                  <td className="border border-gray-300 p-2">{one.phone}</td>
                  <td className="border border-gray-300 p-2">{one.floor}</td>
                  <td className="border border-gray-300 p-2">{one.roomType}</td>
                  <td className="border border-gray-300 p-2">{one.price} $</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {one.available ? (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded w-full">
                        Check Out Success
                      </button>
                    ) : (
                      <button
                        onClick={() => checkOut(one.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded w-full"
                      >
                        Check Out
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Thank You Section */}
      <div className="bg-white text-gray-900 py-10 px-6 sm:px-10 lg:px-20 mx-auto max-w-4xl shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Thank You!
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Dear {user.toUpperCase()},
        </p>

        <p className="text-lg leading-relaxed mb-4">
          We would like to take a moment to thank you for choosing to stay at
          our luxury hotel. Your trust in us means the world, and we hope we
          were able to make your stay both comfortable and memorable.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Should you have any feedback or further inquiries, please don’t
          hesitate to reach out. We look forward to welcoming you back in the
          near future.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Wishing you safe travels and a wonderful day ahead!
        </p>

        <p className="text-lg font-bold mt-6">Warm regards,</p>
        <p className="text-lg font-bold">The UB Hotel Team</p>
      </div>
    </>
  );
};

export default RoomDetailUser;
