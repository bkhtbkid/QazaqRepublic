import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
    const menu = [
        "Новинки",
        "Мужчины",
        "Женщины",
        "Дети",
        "Сувениры",
        "Акссесуары",
        "Коллекции",
    ];

    const links = [
        "/latest",
        "/male",
        "/female",
        "/kids",
        "/souvenirs",
        "/accessories",
        "/collections",
    ];

    return (
        <div className="header__menu menu menu-header">
            <div className="menu-header__help--media">Помощь</div>
            <button
                onClick={props.toggle}
                type="button"
                className={
                    props.menuBody
                        ? "menu__icon icon-menu menu__icon--active"
                        : "menu__icon icon-menu"
                }
            >
                <span></span>
            </button>
            <nav
                className={
                    props.menuBody
                        ? "menu__body--active menu__body"
                        : "menu__body"
                }
            >
                <ul className="menu__list">
                    {menu.map((elem, index) => {
                        return (
                            <li className="menu__item" key={index}>
                                <Link to={links[index]} className="menu__link">
                                    {elem}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;