import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import "./index.css";

export default function ExtensibleMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="NavContainer">
            <div onClick={toggleMenu} className="ButtonOpenClose">
                <div className="ProfilePhoto">V</div>
                <p>Victor</p>
                {menuOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            {menuOpen && (
                <div className="ItensContainer">
                    <span className="NavItem">Menu Item</span>
                    <span className="NavItem">Menu Item</span>
                    <span className="NavItem">Menu Item</span>
                </div>
            )}
        </nav>
    );
}
