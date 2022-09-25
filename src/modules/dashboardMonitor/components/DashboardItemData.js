import React from 'react';
import './DashboardItemData.css';

const DashboardItemData = ({
  admin: { email, first_name, last_name } = {
    email: '',
    first_name: '',
    last_name: '',
  },
  logo = '',
  name = '',
  number_of_active_users = '',
  number_of_users = '',
  server_address = '',
}) => {
  return (
    <div class="dashboardItemData">
      <div class="admin">
        <b>ADMIN</b>
        <div>Email: {email}</div>
        <div>First name: {first_name}</div>
        <div>Last name: {last_name}</div>
      </div>
      <div>
        <div>Logo: {logo}</div>
        <div>Name: {name}</div>
        <div>Active users: {number_of_active_users}</div>
        <div>Users: {number_of_users}</div>
        <div>Server address: {server_address}</div>
      </div>
    </div>
  );
};

export default DashboardItemData;
