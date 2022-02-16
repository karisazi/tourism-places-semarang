import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 20px;
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const DropdownLink = styled.span`
  height: 35px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  margin-right: 20px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink  onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index}>
              <SidebarLabel>{item.desc}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
