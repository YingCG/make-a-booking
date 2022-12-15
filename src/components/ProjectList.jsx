import React, { useCallback, useEffect, useState } from "react";
// import blogs from '../data/blog.json'
import AddAppointment from "./AddAppointment";
import Search from "./Search";
import BookingItem from "./BookingItem";
import Pagination from "./Pagination";

export default function ProjectList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const displayArtProject = () => {
    setFilteredData((info) => info.filter(info.categories === "art"));
  };
  const displayTechProject = () => {
    setFilteredData((info) => info.filter(info.categories === "tech"));
  };
  const displayOtherProject = () => {
    setFilteredData((info) => info.filter(info.categories === "other"));
  };

  // const fetchData = useCallback(() => {
  //     fetch('./data/blog.json')
  //     .then (response => response.json())
  //     .then(info => {
  //       setData(info)
  //     })
  //   },[]
  // )

  // useEffect(() => {
  //   fetchData()
  // },[fetchData])

  const cancelBooking = (bookingID) => {
    const updateInfo = data.filter((booking) => booking.id !== bookingID);
    setFilteredData(updateInfo);
    setData(updateInfo);
  };

  const searchProject = (text) => {
    setFilteredData(
      data.filter((booking) => booking.title.toLowerCase().includes(text))
    );
  };

  useEffect(() => {
    fetch("./data/blog.json")
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setFilteredData(info);
      });
  }, []);

  return (
    <>
      <div className="flex content-center mt-10 justify-between py-6 m-4">
        <h1 className="text-3xl justify-center">Current projects</h1>
        <Search search={searchProject} />
      </div>

      <div className="mx-6 mt-2 grid grid-cols-4 gap-4">
        {filteredData.map((project) => (
          <BookingItem
            key={project.id}
            booking={project}
            remove={cancelBooking}
          />
        ))}
      </div>

      <AddAppointment />
    </>
  );
}
