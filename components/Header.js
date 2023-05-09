import React, { useState, useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Button
} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    };

    return (
        <Navbar className="px-5" container="md" expand="md" sticky={sticky ? "top" : ""}>
            <NavbarBrand href="/" className="ml-5">
                <img src="/images/new-logo.png" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink href="/">صفحه اصلی</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                اطلاعات مفید
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>مقالات مرتبط</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                درخواست همکاری
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    ثبت درخواست آژانس ها
                                </DropdownItem>
                                <DropdownItem>
                                    ثبت درخواست ایرلاین ها
                                </DropdownItem>
                                <DropdownItem>
                                    ثبت درخواست شرکت های نرم افزاری
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink href="#about">درباره ما</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">ارتباط با ما</NavLink>
                        </NavItem>
                    </Nav>
                </Nav>
            </Collapse>
            <Button color="light" outline size="">
                ورود / ثبت نام
            </Button>
        </Navbar>
    );
};

export default Header;
