const Header = ({ value: toggleTheme }) => {
  return (
    <header>
      <h1>React Info Site</h1>
      <nav>
        <ul>
          <li>
            <a href="#">React Course-Project 1</a>
          </li>
          <li className="toggle-button-container">
            <input id="mode" className="toggle-button" type="checkbox" />
            <label
              onClick={toggleTheme}
              htmlFor="mode"
              className="toggle-label"
            ></label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
