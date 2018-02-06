import React from 'react';
import { MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import IndexMenuTabs from './IndexMenuTabs';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: 'rgba(0,0,0,0.5)',
            paper: 'rgba(0,0,0,0.5)',
            appBar: 'rgba(0,0,0,0.5)',
            contentFrame: 'rgba(0,0,0,0.5)',
            chip:'rgba(0,0,0,0.5)',
        },
    },
});
const styles = {
    button: {
        display: 'block',
        minWidth: '2.8em',
        padding: '0.8em 0.7em',
    },
    list: {
        color: '#FFF',
        width: '100vw',
    },
    listFull: {
        width: '100vw',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#FFF',
        borderRadius: '0.3em',
        display: 'block',
        margin: '0.4em auto',
    },
    top: {
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    topText: {
        fontSize: '1.6em',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#FFF',
        fontWeight: 200,
        display: 'inline-block',
        lineHeight: 3.2,
        marginTop: '0.5em'
    },
    closet: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4.2em',
    },
    closetLineOne: {
        width: '2em',
        height: '0.2em',
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        margin: '-0.25em 0 0 -1em',
        backgroundColor: '#FFF',
        borderRadius: '0.1em',
        transform: 'rotate(45deg)',
        zIndex: 20,
    },
    closetLineTwo: {
        width: '2em',
        height: '0.2em',
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        margin: '-0.25em 0 0 -1em',
        backgroundColor: '#FFF',
        borderRadius: '0.1em',
        transform: 'rotate(-45deg)',
        zIndex: 20,
    },
    colorTwo: {
        position: 'absolute',
        bottom: '-1em',
        right: '-3em',
        width: '15em',
        height: '15em',
        zIndex: 10,
        background: 'radial-gradient(ellipse at center, rgba(172,168,165,1) 0%, rgba(115,112,110,1) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 70%)',
        opacity: 0.6,
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: '100vw',
        boxShadow: 'inset 0 25em 4em -4em rgba(0,0,0,1)'
    },
};

class IndexMenu extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Button color="primary" className={classes.button} aria-label="open drawer" onClick={this.toggleDrawer('left', true)}>
                        <span className={classes.line} />
                        <span className={classes.line} />
                        <span className={classes.line} />
                    </Button>
                    <Drawer variant="persistent" classes={{ paper: classes.drawerPaper, }} open={this.state.left}>
                        <div>
                            <div className={classes.top}>
                                <div className={classes.closet} onClick={this.toggleDrawer('left', false)}>
                                    <div className={classes.colorTwo} />
                                    <span className={classes.closetLineOne} />
                                    <span className={classes.closetLineTwo} />
                                </div>
                                <p className={classes.topText}>меню</p>
                                <div>
                                    <span />
                                </div>
                            </div>
                            <IndexMenuTabs />
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(IndexMenu);