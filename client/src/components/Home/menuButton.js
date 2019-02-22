import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton';

class MenuButton extends React.Component {
    state = {
        anchorEl: null
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const Wrapper = this.props.iconType;
        const listItems = this.props.items.map((link) =>
            <MenuItem onClick={this.handleClose} >{link}</MenuItem>
        );

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'header' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="contrast"
                >
                    <Wrapper />
                </IconButton>
                <Menu
                    id="header"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {listItems}


                </Menu>
            </div>
        );
    }

}

export default MenuButton;