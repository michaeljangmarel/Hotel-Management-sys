import React, { useEffect, useState } from 'react';
import { getHistoryRecord } from '../service/Reservation';
import { BackspaceIcon, ClockIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

const AdminViewRecord = () => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getHistoryRecord()
      .then((res) => setReservation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="text-center mt-4 mb-3 text-2xl font-bold">
        History
        <Link to="/admin-view">
          <BackspaceIcon className="h-6 w-6 inline ml-2" />
        </Link>
      </h2>

      <div className="overflow-x-auto px-4">
        <table className="min-w-full border-collapse border border-gray-300 bg-white ">
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
                Check-In Date
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Check-Out Date
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

      <section className="bg-orange-300 py-16 mt-5 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">The History Record on</h2>
        <p className="text-lg mb-8">
          THE UB Hotel Team
          <br />
          © 2024 UB Hotel. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default AdminViewRecord;
