import React from 'react';

import './DashboardItem.css';
import DashboardItemData from './DashboardItemData';

const DashboardItem = ({ id, name, company, handleClick, details }) => {
  return (
    <div onClick={() => handleClick(id)}>
      <div className="dashboardItem">
        <b>Id: {id}</b>
        <h1>Name: {name}</h1>
        <h2>Company: {company}</h2>
      </div>
      {details && <DashboardItemData {...details} />}
    </div>
  );
};

export default DashboardItem;
