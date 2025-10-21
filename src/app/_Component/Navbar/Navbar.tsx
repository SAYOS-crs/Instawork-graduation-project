"use client"
import {Navbar as NavbarComponent, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export default function Navbar()  {
  return (
    <NavbarComponent className="absolute">
      {/* Logo and appName */}
      <NavbarBrand>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
        </svg>

        
        <p className="font-bold text-inherit ps-3">InstaWork</p>
        
      </NavbarBrand>

      {/* Navigation Linkes */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>


      {/* Login / logup buttons */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

    </NavbarComponent>
  );
}
