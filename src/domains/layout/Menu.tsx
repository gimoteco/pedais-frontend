import classnames from "classnames"
import { inject, observer } from "mobx-react"
import React from "react"
import { Box, Link } from "rebass"
import { routes } from "../../configuration/routes"
import { theme } from "../../theme"
import { rgba } from "../../utils/color"
import { useGoTo } from "../../utils/MainRouter"

function MenuItem({ children = "", onClick = console.log, active = false, disabled = false }) {
    return <Link sx={{
        color: "white",
        fontSize: [1, 2],
        cursor: "pointer",
        fontFamily: "heading",
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingBottom: 2,
        "&.active": {
            borderBottom: "2px solid white"
        },
        "&.disabled": {
            opacity: 0.2,
            cursor: "not"
        },
        "&:hover:not(.disabled)": {
            borderBottom: `2px solid ${rgba(theme.colors.white, 0.8)}`,
            opacity: 0.8
        },
        "&:not(:last-child)": {
            mr: 4
        },
    }} onClick={onClick} className={classnames({
        active,
        disabled
    })}>
        {children}
    </Link>
}

const UserMenuItem = inject("authStore")(observer(({ authStore }: any) => {
    const goToLogin = useGoTo(routes.login)
    const { isLogged, logout } = authStore!

    if (authStore.fetchCurrentUser.pending || authStore.loadingUser) return null

    return !isLogged ? <MenuItem onClick={goToLogin}>Entrar</MenuItem> : <MenuItem onClick={logout}>Sair</MenuItem>
}))

function Menu() {
    return <Box mt={[3, 0]} ml={[0, 3]}>
        <MenuItem active>Treinos</MenuItem>
        <MenuItem disabled>Competições</MenuItem>
        <MenuItem disabled>Grupos</MenuItem>

        <UserMenuItem />
    </Box>
}

export default Menu
