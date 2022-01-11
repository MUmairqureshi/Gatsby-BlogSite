import React from "react";
import { Link } from "gatsby"
import { Navebar } from './navebar'
import Seo from "../components/seo"
import Header from "./header"
export function Child({ children }) {
    return (
        <div>
            <>
                <Header />
            </>
            <Navebar />
            {children}


        </div>
    )
}