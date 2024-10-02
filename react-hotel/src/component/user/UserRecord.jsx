import React, { useEffect, useState } from "react";
import { getLoggedUserData } from "../service/token/TokenSession";
import { getUserHistory } from "../service/Reservation";
import { BackspaceIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const UserRecord = () => {
  const name = getLoggedUserData();
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getUserHistory(name)
      .then((res) => setReservation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="text-center mt-4 text-2xl font-bold">My History
        <Link to="/my-reservation">
        <BackspaceIcon  className="w-10 h-20"/>
        </Link>
      </h2>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-300 bg-white text-sm sm:text-base">
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
                Date
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Check Out
              </th>
            </tr>
          </thead>
          <tbody>
            {reservation.map((one) => (
              <tr key={one.id} className="even:bg-gray-100">
                <td className="border border-gray-300 p-2">{one.email}</td>
                <td className="border border-gray-300 p-2">{one.phone}</td>
                <td className="border border-gray-300 p-2">{one.floor}</td>
                <td className="border border-gray-300 p-2">{one.roomType}</td>
                <td className="border border-gray-300 p-2">{one.price} $</td>
                <td className="border border-gray-300 p-2">{one.checkInDate}</td>
                <td className="border border-gray-300 p-2">{one.checkOutDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="bg-green-300 py-16 mt-5 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Thanks For Choosing Us</h2>
        <p className="text-lg mb-8">THE UB Hotel Team</p>
        <p className="text-lg">&copy; 2024 UB Hotel. All rights reserved.</p>
      </section>
    </>
  );
};

export default UserRecord;
