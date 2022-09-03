import { DefaultChildren } from "react";
import { CustomPersona, PersonaSelector } from "@presentation/components";
import logo from "./logo.svg";
import "./style.css";

function LayoutDefault({ children }: DefaultChildren) {
  return (
    <div className="container">
      <header>
        <a href="https://croct.com" className="logo">
          <img src={logo} title="Croct" alt="Croct" />
        </a>
        <PersonaSelector />
      </header>
      <div className="content">{children}
      </div>
    </div>
  );
}

export default LayoutDefault;
