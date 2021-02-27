// Dependencies
import React, { useState, useEffect } from "react";
import moment from "moment";

// Styles
import "./charts.scss";

// Components
import Footer from "../footer/footer";
import Header from "../header/header";
import Spinner from "../spinner/spinner";
import MainChart from "./chart-components/main-chart";

// Service
import usersService from "../../services/users-service";

const Charts = ({ match }) => {
  const usersApi = new usersService();

  const [statistics, setStatistics] = useState({
    name: null,
    stats: null,
    from: "",
    to: "",
    isLoading: true,
    error: { e: false, message: "" },
  });
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    const id = Number(match.params.id);

    if(isNaN(id) || id < 0 ) {
      return setStatistics(prevState => (
        { ...prevState, 
          error: { 
            e: true, 
            message: "Id is not valid"
          }, 
          isLoading: false 
        })
      );
    }

    usersApi
      .getPersonStats(id)
      .then(onPersonLoaded)
      .catch(onError);
  }, [])

  const onPersonLoaded = response => {
    const { isError } = response;
    if(isError) {
      setStatistics(prevState => (
        { ...prevState, 
          error: {
            e: true, 
            message: "Something went wrong..." 
          }, 
          isLoading: false 
        }
      ));
    } else {
      const { stats, names } = response;
      const name = `${names[0].name} ${names[0].last_name}`;
      setStatistics(prevState => ({ ...prevState, stats, name, isLoading: false }))
    }
  }

  const onError = () => {
    setStatistics(prevState => (
      { ...prevState, 
        error: { 
          e: true, 
          message: "Something went wrong..."
        }, 
        isLoading: false 
      }
    ))
  }

  const onFromChange = e => {
    setStatistics(prevState => (
      { ...prevState,
        from: e.target.value 
      }
    ))
  }

  const onToChange = e => {
    setStatistics(prevState => (
      { ...prevState, 
        to: e.target.value 
      }
    ))
  }

  const validateDate = (from, to) => {

    let checkFrom = moment(from, "YYYY-MM-DD").format("YYYY-MM-DD") === from;
    let checkTo = moment(to, "YYYY-MM-DD").format("YYYY-MM-DD") === to;

    if(!checkTo || !checkFrom) {
      setInputError("Invalid date format");
      return false;
    }
    setInputError("");
    return true;
  }

  const onFormSubmit = e => {
    e.preventDefault();

    const { id } = match.params;
    const { from, to } = statistics;
    
    if(!validateDate(from, to)) {
      return;
    }
    usersApi.getPersonStats(id, from, to).then(onPersonLoaded).catch(onError);
  }

  const { name, stats, isLoading, error, from, to } = statistics;

  const spinner = isLoading ? <Spinner /> : null;

  const main = !isLoading && !error.e ? 
    (
      <MainChart
        name={name}
        stats={stats}
        from={from}
        to={to}
        onFormSubmit={onFormSubmit}
        onFromChange={onFromChange}
        onToChange={onToChange}
        inputError={inputError}
      />
    ) : null;

  const err = error.e ? <span>{error.message}</span> : null;

  return (
    <div>
      <Header />
        {spinner}
        {main}
        {err}
      <Footer />
    </div>
  );
}

export default Charts;