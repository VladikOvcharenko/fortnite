import './Header.css'

function Header() {
  return (
    <nav className="deep-purple darken-2">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Fortnite Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { Header }
