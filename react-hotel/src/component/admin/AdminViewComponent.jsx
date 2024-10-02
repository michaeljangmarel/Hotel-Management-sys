import React, { useEffect, useState } from "react";
import {
  deleteReservation,
  getAllReservationInfo,
  getCheckTrue,
} from "../service/Reservation";
import { Link, useNavigate } from "react-router-dom";
import { getAllRoom } from "../service/Room.service";
import {
  CalendarDateRangeIcon,
  CheckCircleIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/16/solid";

const AdminViewComponent = () => {
  const [reservation, setReserve] = useState([]);
  const [room, setRoom] = useState([]);
  const navigator = useNavigate();

  const ReservationDataReciever = () => {
    getAllReservationInfo()
      .then((res) => setReserve(res.data))
      .catch((err) => console.log(err));
  };

  const getTrue = (id) => {
    getCheckTrue(id)
      .then((res) => {
        alert("Done.");
        navigator("/admin-record");
      })
      .catch((err) => console.log(err));
  };

  const deleteRow = (id) => {
    deleteReservation(id)
      .then((res) => {
        alert("Deleted");
        navigator("/admin-record");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    ReservationDataReciever();
    getAllRoom()
      .then((res) => setRoom(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <div className="mt-3 text-center mb-3">
          <h1 className="text-2xl font-bold">Admin View</h1>
          <Link to="/admin-record" className="text-blue-600">
          Tap to View History
            <CalendarDateRangeIcon className="w-10 h-10 text-green-400 mr-2" />
          </Link>
        </div>

        {/* Reservation Table */}
        <table className="min-w-full border-collapse border border-gray-300 bg-white text-sm sm:text-base">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                ID
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Name
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Email
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Phone
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Room Info
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Check-In
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Check-Out
              </th>
              <th className="border border-gray-300 p-2 text-left font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reservation.map((one) => (
              <tr key={one.id} className="even:bg-gray-100">
                <td className="border border-gray-300 p-2">{one.id}</td>
                <td className="border border-gray-300 p-2">
                  {one.name.toUpperCase()}
                </td>
                <td className="border border-gray-300 p-2">{one.email}</td>
                <td className="border border-gray-300 p-2">{one.phone}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center">
                    <img
                      src={one.imgUrl}
                      alt="Room"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <p>Floor - {one.floor}</p>
                      <p className="text-sm text-gray-500">
                        Type - {one.roomType}
                      </p>
                      <p className="text-sm text-gray-500">UB - {one.roomName}</p>
                      <p className="text-sm text-gray-500">{one.price} $</p>
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">{one.checkInDate}</td>
                <td className="border border-gray-300 p-2">{one.checkOutDate}</td>
                <td className="border border-gray-300 p-2">
                  {one.available ? (
                    <button
                      onClick={() => deleteRow(one.id)}
                      className="bg-red-500 hover:bg-red-700 w-full text-white font-bold py-1 px-4 rounded"
                    >
                      <TrashIcon className="w-5 h-5 inline" /> Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => getTrue(one.roomId)}
                      className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-1 px-4 rounded"
                    >
                      <CheckCircleIcon className="w-5 h-5 inline" /> Check out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Room Table */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Room Name</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Floor</th>
              <th className="px-4 py-2 border border-gray-300">Type</th>
              <th className="px-4 py-2 border border-gray-300">Available</th>
            </tr>
          </thead>
          <tbody>
            {room.map((one) => (
              <tr key={one.id}>
                <td className="px-4 py-2 border border-gray-300">{one.id}</td>
                <td className="px-4 py-2 border border-gray-300">{one.roomName}</td>
                <td className="px-4 py-2 border border-gray-300">{one.price}</td>
                <td className="px-4 py-2 border border-gray-300">{one.floor}</td>
                <td className="px-4 py-2 border border-gray-300">{one.roomType}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {one.available ? (
                    <CheckCircleIcon className="w-6 h-6 text-green-500 inline" />
                  ) : (
                    <XCircleIcon className="w-6 h-6 text-red-500 inline" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminViewComponent;
