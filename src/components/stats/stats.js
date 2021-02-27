// Dependencies
import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

// Styles
import "./stats.scss";

// Components
import Footer from "../footer/footer";
import Header from "../header/header";
import Spinner from "../spinner/spinner";
import Table from "./stats-components/table";

// Service
import usersService from "../../services/users-service";

const Stats = ({ history }) => {
  const usersApi = new usersService();

  const [usersTable, setUsersTable] = useState({
    list: null,
    page: 1,
    count: 1000,
    limit: 50,
    isError: false,
    isLoading: true
  })

  useEffect(() => {
    usersApi
      .getPeople(usersTable.page)
      .then(onPeopleLoaded)
      .catch(onError);
  }, [])

  const onPeopleLoaded = ({ list, count, limit }) => {
    setUsersTable(prevState => (
      { ...prevState,
        list,
        count, 
        limit, 
        isLoading: false 
      }
    ));
  };

  const onError = () => {
    setUsersTable(prevState => (
      { ...prevState,
        isError: true, 
        isLoading: false 
      }
    ));
  };

  const setCurrentPage = page => {
    setUsersTable(prevState => ({ ...prevState, page }))

    usersApi
      .getPeople(page)
      .then(onPeopleLoaded)
      .catch(onError);
  };

  const navigateToProfile = id => {
    history.push(`/stats/${id}`);
  };

  const { isLoading, isError } = usersTable;

  const spinner = isLoading ? <Spinner /> : null;
  const error = isError ? <span>Error</span> : null;

  const main = !isLoading && !isError ? <Table list={usersTable.list} navigateToProfile={navigateToProfile} /> : null;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="my-3">
          <span className="table-heading">Users statistics</span>
        </div>
        {spinner}
        {error}
        {main}
        <Pagination
          prevPageText={<i className="fas fa-chevron-left"></i>}
          nextPageText={<i className="fas fa-chevron-right"></i>}
          hideFirstLastPages
          itemsCountPerPage={usersTable.limit}
          totalItemsCount={usersTable.count}
          onChange={setCurrentPage}
          activePage={usersTable.page}
        />
      </div>
      <Footer />
    </div>
  );

}

export default Stats;