import React from "react";
import { Container } from "semantic-ui-react";
import EventDashBoard from "./features/events/eventDashboard/EventDashboard";
import NavBar from "./features/nav/NavBar";
import Home from "./features/home/Home";
import EventDetailedPage from "./features/events/eventDetailed/EventDetailedPage";
import EventForm from "./features/events/eventForm/EventForm";
import { Route, Switch, useLocation } from "react-router-dom";
import ModalManager from "./common/modals/ModalManager";

function App() {
  const { key } = useLocation();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/(.+)"
        render={() => {
          return (
            <>
              <ModalManager />
              <NavBar />
              <Container className="main">
                <Route exact path="/events" component={EventDashBoard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route
                  path={["/createevent", "/manage/:id"]}
                  component={EventForm}
                  key={key}
                />
              </Container>
            </>
          );
        }}
      />
    </Switch>
  );
}

export default App;
