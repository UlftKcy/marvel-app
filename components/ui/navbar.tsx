"use client";
import Link from "next/link";
import styled from "styled-components";
import MarvelIcon from "../../public/marvel.svg";
import Image from "next/image";
import Search from "../home/Search";

const NavbarWrapper = styled.nav`
  background-color: #000;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Link href="/">
       <Image src={MarvelIcon} alt="marvelIcon"/>
      </Link>
      <Search/>
    </NavbarWrapper>
  );
}
