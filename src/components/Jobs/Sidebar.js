import React from "react";
import styled from "styled-components";

const Sidebar = ({ children }) => {
  return (
    <>
      <SidebarWrapper>{children}</SidebarWrapper>
    </>
  );
};

const SidebarWrapper = styled.section`
  background-color: #f7f7f7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-self: start;
`;

export default Sidebar;
