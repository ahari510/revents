import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events = [] }) => {
  return (
    <>
      {events.map((event, idx) => {
        return <EventListItem key={idx} event={event} />;
      })}
    </>
  );
};
export default EventList;
