import classnames from "classnames"
import { inject, observer } from "mobx-react"
import React from "react"
import { ChevronDown } from "react-feather"
import { anchor, ToggleLayer } from "react-laag"
import { Box, Flex, Link } from "rebass"
import { routes } from "../../configuration/routes"
import { useGoTo } from "../../utils/MainRouter"

const MenuItem = React.forwardRef<any, any>(({ children = "", onClick = console.log, active = false, disabled = false, sx = {}, variant = "menu-item" }, ref) => {
    return <Link ref={ref} variant={variant} sx={sx} onClick={onClick} className={classnames({
        active,
        disabled
    })}>
        {children}
    </Link>
})

MenuItem.displayName = "MenuItem"

const UserMenu = inject("authStore")(observer(({ authStore: { currentUser, logout } }: any) => {
    return <ToggleLayer closeOnOutsideClick placement={{ anchor: anchor.BOTTOM_RIGHT }} renderLayer={({ layerProps, isOpen }) =>
        isOpen && (
            <Box
                bg="white"
                padding={2}
                ref={layerProps.ref}
                sx={{
                    boxShadow: "4px 6px 10px 0px rgba(0,0,0,0.38)",
                    ...layerProps.style
                }}
            >
                <Link variant="secondary-menu-item" onClick={logout}>Sair</Link>
            </Box>
        )
    }>
        {({ toggle, triggerRef }) => <MenuItem sx={{
            display: "flex",
        }} ref={triggerRef} onClick={toggle}>{currentUser.email} <ChevronDown size={20} /></MenuItem>
        }
    </ToggleLayer >
}))

const UserMenuItem = inject("authStore")(observer(({ authStore }: any) => {
    const goToLogin = useGoTo(routes.login)
    const { isLogged } = authStore!

    if (authStore.fetchCurrentUser.pending || authStore.loadingUser) return null

    if (isLogged) {
        return <UserMenu />
    }

    return <MenuItem onClick={goToLogin}>
        Entrar
    </MenuItem>
}))

function Menu() {
    return <Flex mt={[3, 0]} ml={[0, 3]} alignItems="center" flexWrap="wrap" justifyContent="center">
        <MenuItem active>Treinos</MenuItem>
        <MenuItem disabled>Competições</MenuItem>
        <MenuItem disabled>Grupos</MenuItem>

        <Flex ml={[0, 5]} mt={[3, 0]}>
            <UserMenuItem />
        </Flex>
    </Flex>
}

export default Menu
