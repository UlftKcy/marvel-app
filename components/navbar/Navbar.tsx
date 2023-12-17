"use client";
import Link from "next/link";
import MarvelIcon from "../../public/marvel.svg";
import Image from "next/image";
import { NavbarWrapper } from "../ui/navbar/navbar";
import Search from "./Search";

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
