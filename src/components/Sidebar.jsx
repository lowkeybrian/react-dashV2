import React from "react";
import styled from "styled-components";
import { RiHomeLine} from "react-icons/ri";
import { AiOutlineDatabase, AiOutlineUserAdd, AiOutlineIdcard, AiOutlineInfoCircle } from "react-icons/ai";
import motion from "../assets/motion.jpg";
import { darkThemeColor } from "../utils";
import {Link} from "react-router-dom";


function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={motion} />
        <Name>Admin</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link1>
            <RiHomeLine />
            <Linkstyling>
            <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
              <h3>Dashboard</h3>
            </Link>
            </Linkstyling>
          </Link1>
          <Link1>
            <AiOutlineUserAdd />
            <Linkstyling>
            <Link to = "/adduser" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Add User</h3>
            </Link>
            </Linkstyling>
          </Link1>
          <Link1>
            <AiOutlineIdcard />
            <Linkstyling>
            <Link to = "/userm" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>User Management</h3>
            </Link>
            </Linkstyling>
          </Link1>
          <Link1>
            <AiOutlineDatabase />
            <Linkstyling>
            <Link to = "/roomm" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Room Management</h3>
            </Link>
            </Linkstyling>
          </Link1>
          <Link1>
            <AiOutlineInfoCircle />
            <Linkstyling>
            <Link to = "/login" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>FAQ</h3>
            </Link>
            </Linkstyling>
          </Link1>
        </Links>
        <ContactContainer>
          <Stylespan1>
           <Button>LOGOUT</Button>
          </Stylespan1>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20rem;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
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

const Linkstyling = styled.div`
  hover 


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
  margin-top:1.3rem;
`;

const Button = styled.button`
  background-color: #162349;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  text-align:center;
`;

export default Sidebar;
