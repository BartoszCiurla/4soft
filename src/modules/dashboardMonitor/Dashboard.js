import React from 'react';
import DashboardItem from './components/DashboardItem';
import { UseTechList } from './hooks/useTechList';

const Dashboard = () => {
  const [techList, fetchDetails] = UseTechList();

  return (
    <div>
      <div>DashboardMonitor</div>
      {techList.map((item) => (
        <DashboardItem key={item.id} {...item} handleClick={fetchDetails} />
      ))}
    </div>
  );
};

export default Dashboard;
