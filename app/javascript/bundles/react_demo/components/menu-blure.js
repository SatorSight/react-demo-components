import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: 'rgba(0,0,0,0.9)',
            paper: 'rgba(0,0,0,0.8)',
            appBar: 'rgba(0,0,0,0.9)',
            contentFrame: 'rgba(0,0,0,0.9)',
            chip:'rgba(0,0,0,0.8)',
        },
    },
});

const styles = {
    button: {
        display: 'block',
        minWidth: 46,
        padding: '15px 14px',
    },
    list: {
        width: 250,
        color: '#FFF',
    },
    listitem: {
        color: '#FFF',
    },
    listFull: {
        width: 'auto',
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#FFF',
        borderRadius: 3,
        display: 'block',
        margin: '2px auto',
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Button color="primary" className={classes.button} onClick={this.toggleDrawer('left', true)}>
                        <span className={classes.line} />
                        <span className={classes.line} />
                        <span className={classes.line} />
                    </Button>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);