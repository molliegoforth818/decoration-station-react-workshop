import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        Home
      </Link>
      {/* season specific components leave off at first */}
       <li className="navbar__item">
        <Link className="navbar__link" to="/halloween">
          Halloween
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/christmas">
          Christmas
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/thanksgiving">
          Thanksgiving
        </Link>
      </li> 
      <li className="navbar__item">
        <Link className="navbar__link" to="/new">
          New Decoration
        </Link>
      </li>
    </ul>
  );
};