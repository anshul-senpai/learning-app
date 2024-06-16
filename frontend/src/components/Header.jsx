import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #3aafa9;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: white;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    background-color: ${(props) => (props.istoggleopen ? "#3aafa9" : "#9cd7d4" )};
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #5dd7d0;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 15px 30px;
    font-size:17px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.istoggleopen ? "block" : "none" )};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [istoggleopen, setistoggleopen] = useState(false);

  const handleToggleOpen = () => {
    setistoggleopen(!istoggleopen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            Shiksha
          </Link>
        </div>

        <NavManu istoggleopen={istoggleopen}>
          <li>
            <Link to={"/Home"} className="nav-menu-list">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Courses"} className="nav-menu-list">
              Courses
            </Link>
          </li>
          <li>
            <Link to={"/About"} className="nav-menu-list">
              About
            </Link>
          </li>
          <li>
            <Link to={"/Others"} className="nav-menu-list">
              Others
            </Link>
          </li>
          <li>
            <Link to={"/Signin"} className="nav-menu-list">
              Sign in
            </Link>
          </li>
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;


