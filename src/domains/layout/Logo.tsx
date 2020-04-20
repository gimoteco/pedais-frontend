import React from "react"
import { Image } from "rebass"
import { HOME_ROUTE } from "../../configuration/routes"
import { useGoTo } from "../../utils/MainRouter"
import logo from "./Logo.svg"

export const Logo = ({ width, ...props }) => {
    const goHome = useGoTo(HOME_ROUTE)
    return <Image onClick={goHome} src={logo} {...props} />
}
