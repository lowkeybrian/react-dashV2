import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import UserComp from "./UserComp";
import AccessCountComp from "./AccessCountComp";
import RoomComp from "./RoomComp";
import AssignPermissions from "./AssignPermissions";

function MainContent() {
  return ( 
<Overview>
  <Navbaradjust>
    <Navbar/>
  </Navbaradjust>
      <Flexcontainer>
          <UserComp/>
          <RoomComp/>
          <AssignPermissions/> 
          <AccessCountComp/>
      </Flexcontainer>
</Overview>
  );
}


const Flexcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-left: 3rem;
`;

const Navbaradjust = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
`;

const Overview = styled.div`
`;


export default MainContent;
