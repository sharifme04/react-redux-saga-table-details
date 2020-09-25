import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { templatesRequested } from "./app/actions/templates";
import TemplateOverview from "./app/components/TemplateOverview";
import TemplateDetails from "./app/components/TemplateDetails";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates);
  useEffect(() => {
    dispatch(templatesRequested());
  }, [dispatch]);

  return (
    <div className="container  mt-2">
      {templates?.error ? (
        <div className="alert alert-danger">
          <strong>Error!Reload again!! </strong>
          {templates?.error?.message}
        </div>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <TemplateOverview {...templates} {...props} />}
          />
          <Route
            path="/:templateId"
            render={(props) => <TemplateDetails {...templates} {...props} />}
          />
        </Switch>
      )}
    </div>
  );
}

export default App;
