import React from "react";
import { List, Image } from "semantic-ui-react";
import userImg from "../../../assets/user.png";

const EventListAttendee = ({ attendee = [] }) => {
  const { photoURL } = attendee;
  return (
    <>
      <List.Item>
        <Image size="mini" circular src={photoURL || userImg} />
      </List.Item>
    </>
  );
};
export default EventListAttendee;
