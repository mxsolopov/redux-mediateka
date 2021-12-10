import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeTypeOfContentAction } from '../actions/actions';

const Navigation = () => {

    const dispatch = useDispatch();
    const typeOfContent = useSelector(state => state.typeOfContent.typeOfContent);

    const navToggler = (content) => {
        dispatch(changeTypeOfContentAction(content));
    };

    return (
        <div className="d-flex justify-content-between p-3 sticky-top bg-white">
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                Медиатека
            </div>
            <Nav pills>
                <NavItem>
                    <NavLink
                        href="#"
                        className={typeOfContent === "books" ? "active" : ""}
                        onClick={() => navToggler("books")}
                    >
                        Книги
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#"
                        className={typeOfContent === "movies" ? "active" : ""}
                        onClick={() => navToggler("movies")}
                    >
                        Фильмы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#"
                        className={typeOfContent === "music" ? "active" : ""}
                        onClick={() => navToggler("music")}
                    >
                        Музыка
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Navigation;