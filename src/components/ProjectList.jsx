import React, { useCallback, useEffect, useState } from "react";
// import blogs from '../data/blog.json'
import AddAppointment from "./AddAppointment";
import Search from "./Search";
import BookingItem from "./BookingItem";
import Pagination from "./Pagination";

export default function ProjectList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  const displayArtProject = () => {
    const artInfo = data.filter((info) => info.categories === "art");
    setFilteredData(artInfo);
    setData(artInfo);
  };
  const displayTechProject = () => {
    const techInfo = data.filter((info) => info.categories === "tech");
    setFilteredData(techInfo);
    setData(techInfo);
  };
  const displayOtherProject = () => {
    const otherInfo = data.filter((info) => info.categories === "other");
    setFilteredData(otherInfo);
    setData(otherInfo);
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
      <Pagination />
      <div className="mx-6 mt-2 grid grid-cols-4 gap-4">
        {filteredData.map((project) => (
          <BookingItem
            key={project.id}
            booking={project}
            remove={cancelBooking}
            art={displayArtProject}
            tech={displayTechProject}
            other={displayOtherProject}
          />
        ))}
      </div>

      <AddAppointment />
    </>
  );
}
