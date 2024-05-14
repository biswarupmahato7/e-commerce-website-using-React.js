import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  const {cartCount} = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const navigate = useNavigate()

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      //for Stick The Header
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=> navigate('/')}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={()=> navigate('/')}>Biswarup</div>

          <div className="right">
            <TbSearch onClick={()=> setSearch(true)} />
            <AiOutlineHeart />

            <span className="cart-icon" onClick={()=> setShowCart(true)}>
              <CgShoppingCart />
              { !! cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>

     {showCart && < Cart setShowCart ={setShowCart} /> } 

     {showSearch && <Search setShowSearch ={setSearch}/>}

    </>
  );
};

export default Header;
