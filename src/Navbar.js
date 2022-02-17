import React from "react";

function NavBar(props) {
  const { theme, toggleTheme, themeContrast, setAlertMessage } = props;
  return (
    <nav className={"navbar navbar-expand-lg navbar-" + theme + " bg-" + theme}>
      <div className="container-fluid">
        <span className="navbar-brand ms-auto">
          <img id="brand-image" src="favicon-32x32.png" alt="logo" />
        </span>
        <a className="navbar-brand" href="/">
          Text utility
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="me-auto"></span>
          <span className="navbar-text">
            <button
              className={"btn btn-outline-" + themeContrast}
              onClick={() => {
                toggleTheme();
                setAlertMessage(`Theme changed to ${themeContrast} mode.`);
              }}
            >
              {themeContrast}
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
