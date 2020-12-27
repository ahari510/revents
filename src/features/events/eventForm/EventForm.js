import cuid from "cuid";
import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import useImg from "../../../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../EventAction";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import MySelectInput from "../../../common/form/MySelectInput";
import { categoryData } from "../../../api/CategoryOptions";
import MyDateInput from "../../../common/form/MyDateInput";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.events.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent || {
    title: "",
    category: "",
    venue: "",
    date: "",
    city: "",
    description: "",
    hostedBy: "",
    hostPhotoURL: "",
    attendees: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("you must provide title"),
    category: Yup.string().required("you must provide category"),
    city: Yup.string().required("you must provide city"),
    description: Yup.string().required("you must provide description"),
    venue: Yup.string().required("you must provide venue"),
  });
  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "suresh",
                  hostPhotoURL: useImg,
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />
            <MyTextInput name="title" placeholder="Event title" />

            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />

            <MyTextArea name="description" placeholder="Description" rows="3" />
            <Header sub color="teal" content="Event Location Details" />
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyDateInput
              name="date"
              placeholder="Event Date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d ,yyyy h:mm a"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content="submit"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              as={Link}
              to="/events"
              floated="right"
              content="cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
