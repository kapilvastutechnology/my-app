import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {/* <Link color="foreground" href="#">
            Features
          </Link> */}
          <NavLink to={'/add-user'}>Features</NavLink>
          
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
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavLink to={'/add-user'} >Add User</NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
