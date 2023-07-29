import "./style/Nav.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav className='navigation'>
      <a className='nav-link' href='#'>
        ecommerse web
      </a>
      <ul className='nav-li'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>product</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
      </ul>
      <div className='nav-button'>
        <button type='button'>login</button>
        <button type='button'>register</button>
        <button type='button'>
          <AiOutlineHeart />
        </button>
        <button type='button'>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </nav>
  );
};
