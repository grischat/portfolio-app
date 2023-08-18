import '../scss/Menu.scss'

function Menu() {
  return (
    <div>
      <ul className="menu__container">
        <li>
          <a href="home.html">HOME</a>
        </li>
        <li>
          <a href="portfolio.html">PORTFOLIO</a>
        </li>
        <li>
          <a href="contact.html">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
