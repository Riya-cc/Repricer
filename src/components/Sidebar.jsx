import React from 'react';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const items = ['Type A Inpatient', 'Type A Outpatient', 'Type B'];

  return (
    <nav className="rounded-tr-11xl rounded-br-11xl h-fit bg-aliceblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-64 flex flex-col items-end justify-center text-center text-base text-darkslategray font-big-description py-8">
      <div className="w-full flex flex-col items-end justify-start">
      {items.map((title, index) => (
        <SidebarItem title={title} index={index+1} key={index} />
        ))}
      </div>
    </nav>
  )
}

export default Sidebar;