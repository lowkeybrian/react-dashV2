import React from "react";
import styled from "styled-components";
import { RiHomeLine} from "react-icons/ri";
import { AiOutlineDatabase, AiOutlineUserAdd, AiOutlineIdcard, AiOutlineInfoCircle } from "react-icons/ai";
import motion from "../assets/motion.jpg";
import { darkThemeColor } from "../utils";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import RoomM from "../pages/RoomM";
import UserM from "../pages/UserM";
import FAQ from "../pages/FAQ";
import App from "../App.js";


function Sidebar() {
  return (
    <Router>
    <Routes>
    <Route path = "/" element = {<App />} />
    <Route path = "/AddUser" element = {<AddUser />} />
    <Route path = "/UserM" element = {<UserM />} />
    <Route path = "/RoomM" element = {<RoomM />} />
    <Route path = "/FAQ" element = {<FAQ />} />
    </Routes>
    <Container>
      <ProfileContainer>
        <Avatar src={motion} />
        <Name>Admin</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link1>
            <RiHomeLine />
            <Link>
              <h3>Dashboard</h3>
            </Link>
          </Link1>
          <Link1>
            <AiOutlineUserAdd />
            <Link>
            <h3>Add User</h3>
            </Link>
          </Link1>
          <Link1>
            <AiOutlineIdcard />
            <h3>User Management</h3>
          </Link1>
          <Link1>
            <AiOutlineDatabase />
            <h3>Room Management</h3>
          </Link1>
          <Link1>
            <AiOutlineInfoCircle />
            <h3>FAQ</h3>
          </Link1>
        </Links>
        <ContactContainer>
          <Stylespan1>
           <span>LOGOUT</span>
          </Stylespan1>
        </ContactContainer>
      </LinksContainer>
    </Container>
</Router>
  );
}

const Container = styled.div`
  width: 30rem;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-right: 1rem;
  height: 65%;
`;

const Link = styled.ul`
`;

const Link1 = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

const Stylespan1 = styled.div`
  text-align:center;
  font-size: 20px;
  margin-top:2.5rem;
`;
export default Sidebar;
