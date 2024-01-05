import React from "react";
import "./Header.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Tippy from "@tippyjs/react";
import LoginTool from "../LoginTool";
import Threedots from "../H-fifthtool/Threedots";
import 'tippy.js/themes/light.css'
const Header = () => {
    return(
        <div className="Header-all">
            <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt = "flipkart-logo"
            />

            <div className="Header-first">
                <i class="bi bi-search search-icon"></i>
                <input placeholder="Search for Products, Brands and More"  className="header-inp"/>
            </div>

            <div className="Header-second">
                <Tippy content={<LoginTool />}
                 theme="light"
                 interactive='true'
                >
                    <button >
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"  className="profile-icon"/>
                        <span>Login</span>
                        <i class="bi bi-chevron-down arrow-down"></i>
                    </button>
                </Tippy>
            </div>

            <div className="Header-third">
                <button>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" className="cart-icon"/>
                    Cart
                </button>
            </div>

            <div className="Header-fourth">
                <button>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" className="seller-icon" />
                    Become a Seller
                </button>
            </div>

            <div className="Header-fifth">
                <Tippy content={<Threedots />}
                interactive='true'
                theme="light"
                >
                <i class="bi bi-three-dots-vertical"></i>
                </Tippy>
            
            </div>
        </div>
    )
}

export default Header;