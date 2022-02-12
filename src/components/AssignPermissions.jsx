import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "../utils";

function AssignPermissions() {
  return (
    <AssignPermissions1>
      VISABLE UUID
      ASSIGN RIGHTS
    </AssignPermissions1>
  );
}

const AssignPermissions1 = styled.div`
height: 20rem;
width: 37rem;
background-color: white;
margin-top: 1rem;
padding: 1rem;
border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AssignPermissions;
