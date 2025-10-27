"use client"
import React, { useEffect, useRef, useState } from "react";
import {
  Navbar as NavbarComponent,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { FaRegHandshake } from "react-icons/fa6";

import Link from 'next/link'
import Btn from "./AuthButtons";
import { log } from "console";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  return (
    <NavbarComponent  className= 'backgroundNavBar '   onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
      
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
         <FaRegHandshake className="text-3xl"/>
        <Link href={"/"} className="font-bold text-inherit ps-3">InstaWork</Link>
          
        
        </NavbarBrand>
        
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">


        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Jobs
          </Link>
        
        
        </NavbarItem>

                  
        <NavbarItem>
          <Link color="foreground" href="#">
            Dashbord
          </Link>
        </NavbarItem>

      </NavbarContent>



      <NavbarContent justify="end">
        <NavbarItem className="flex ">
              <Btn  content={'Sign Up'} color={2} />
              <Btn  content={'Sign In'} color={1} />
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarComponent>
  );
}

