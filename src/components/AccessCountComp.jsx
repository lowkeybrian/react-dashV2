import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "../utils";

function AccessCountComp() {
  return (
    <AccessCountComp1>
      HOW MANY PEOPLE HAVE WHICH PERMISSIONS
    </AccessCountComp1>
  );
}

const AccessCountComp1 = styled.div`
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
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

export default AccessCountComp;
