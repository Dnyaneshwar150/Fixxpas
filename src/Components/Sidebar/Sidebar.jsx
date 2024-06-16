import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  {
    name: "Mechanical",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
  {
    name: "FE",
    icon: "book",
    route: "/FE",
    items: ["Phy", "Chem", "Maths"],
  },
  {
    name: "Computer",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
  {
    name: "E&TC",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
  {
    name: "Electrical",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
  {
    name: "Civil",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
  {
    name: "Chemical",
    icon: "book",
    route: "/computer",
    items: ["SE", "TE", "BE"],
  },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavButton = ({ name, route, isActive }) => (
  <NavLink
    to={route}
    className={`sidebar-button ${isActive ? "active" : ""}`}
    activeClassName="active"
  >
    <span>{name}</span>
  </NavLink>
);
/computer/SEsubList
const SubMenu = ({ item, activeItem }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}>
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            key={subItem}
            name={subItem}
            route={`${item.route}/${subItem.toLowerCase()}`} // Example route generation
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
