import React from "react";
import { NavLink } from "react-router-dom";
import { WebRouter } from "./WebRouter";

const router = ({sehifeDeyis}) => {
    return (
        <nav>
            {WebRouter.map(({ id, path, title }) => {
                return (
                    <NavLink
                        className="navlink"
                        key={id}
                        to={path}
                    >
                        {title}
                    </NavLink>
                )
            })}
            <NavLink
                className="navlink"
                to="/ProductPage"
            >
                
                Yeni Sayfa

            </NavLink>
        </nav>
    )
}

export default router;