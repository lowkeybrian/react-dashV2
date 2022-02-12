import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "../utils";

function RoomComp() {
  return (
    <YourProjects>
      <List>
      <ol>
        <ul>SERVER</ul>
        <ul>MAIN</ul>
        <ul>ATTIC</ul>
        <ul>OFFICE</ul>
        <ul>VAULT</ul>
        <ul>SERVER</ul>
        <ul>MAIN</ul>
        <ul>ATTIC</ul>
        <ul>OFFICE</ul>
        <ul>VAULT</ul>
        <ul>SERVER</ul>
        <ul>MAIN</ul>
        <ul>ATTIC</ul>
        <ul>OFFICE</ul>
        <ul>VAULT</ul>
      </ol>
      </List>
    </YourProjects>
  );
}

const YourProjects = styled.div`
height: 20rem;
width: 37rem;
background-color: white;
margin-top: 1rem;
padding: 1rem;
border-radius: 1rem;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
overflow: hidden;
overflow-y:scroll;
&:hover {
  box-shadow: ${hoverEffect};
  overflow: hidden;
  overflow-y:scroll;
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
  height: max-content;
  width: 75%;
  margin-top: 1rem;
  overflow: hidden;
  overflow-y:scroll;
}
`;

const List = styled.div`
text-align: center;
font-size: 20px; 
border-bottom: 3px;
margin: 1rem;
`

export default RoomComp;
