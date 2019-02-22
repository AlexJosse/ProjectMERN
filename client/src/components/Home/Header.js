import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SmokingRooms from '@material-ui/icons/SmokingRooms';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    SmokingRooms: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    button: {
        paddingLeft: theme.spacing.unit * 5,
        marginLeft: 10,
        paddingRight: theme.spacing.unit * 5,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
});

class Header extends React.Component {
    state = {
        open: false,
        openR: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    handleToggleR = () => {
        this.setState(state => ({ openR: !state.open }));
    };

    handleCloseR = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ openR: false });
    };


    render() {
        const {  open, openR } = this.state;
        const { classes } = this.props;

       /* const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderAccessoire = (
            <Menu

                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isAccessoireOpen}
                onClose={this.handleAccessoireClose}
            >
                <MenuItem onClick={this.handleAccessoireClose}>Briquets</MenuItem>
                <MenuItem onClick={this.handleAccessoireClose}>Feuilles</MenuItem>
                <MenuItem onClick={this.handleAccessoireClose}>Filtres</MenuItem>
                <MenuItem onClick={this.handleAccessoireClose}>Grille</MenuItem>
            </Menu>
        );*/


        return (

            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.SmokingRooms} color="inherit" aria-label="Open drawer">
                            <SmokingRooms/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Livraison de nuit
                        </Typography>

                        <Button
                            variant="contained" color="primary" className={classes.button}
                           // aria-owns={isAccessoireOpen ? 'header' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleAccessoireOpen}
                        >
                            <Typography className={classes.title} variant="h6" align="center" color="inherit" noWrap>
                                Accessoires
                            </Typography>
                        </Button>

                        <Button
                            variant="contained" color="primary" className={classes.button}
                            //aria-owns={isAccessoireOpen ? 'header' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleAccessoireOpen}
                        >
                            <Typography variant="h6" align="center" color="inherit" noWrap>
                                Chicha Bang Pipes
                            </Typography>
                        </Button>
                        <Button
                            buttonRef={node => {
                                this.anchorEl = node;
                            }}
                            aria-owns={openR ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleToggleR}
                        >
                            Toggle Menu Grow
                        </Button>
                        <Popper open={openR} anchorEl={this.anchorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleCloseR}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleCloseR}>test</MenuItem>
                                                <MenuItem onClick={this.handleCloseR}>test 2</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Chercher un produit ..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                buttonRef={node => {
                                    this.anchorEl = node;
                                }}
                                aria-owns={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={this.handleClose}>
                                                <MenuList>
                                                    <MenuItem onClick={this.handleClose}>My profil</MenuItem>
                                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

/* {renderMenu}
                {renderAccessoire}*/

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const HeaderComponent = withStyles(styles)(Header);
export {
    HeaderComponent
};