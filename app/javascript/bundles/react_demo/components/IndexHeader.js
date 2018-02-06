import React, {Component} from 'react';
import fixtures from "./fixtures";
import IndexMenu from './IndexMenu';

const styles = {
    header: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#000',
    },
    mask: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 10,
        backgroundSize: 'cover',
        boxShadow: 'inset 0 -5em 4em -4em rgba(0,0,0,1)',
        overflow: 'hidden',
    },
    bg: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 10,
        backgroundSize: 'cover',
        opacity: 0.4,
        overflow: 'hidden',
    },
    colorOne: {
        position: 'absolute',
        left: '-50%',
        bottom: '-40%',
        width: '100%',
        height: '100%',
        zIndex: 10,
        background: 'radial-gradient(ellipse at center, rgba(0,125,192,1) 0%, rgba(19,83,186,1) 20%, rgba(58,0,174,0.2) 60%, rgba(58,0,174,0) 70%)',
        opacity: 0.6,
    },
    colorTwo: {
        position: 'absolute',
        right: '-60%',
        top: '-50%',
        width: '100%',
        height: '100%',
        zIndex: 10,
        background: 'radial-gradient(ellipse at center, rgba(172,168,165,1) 0%, rgba(115,112,110,1) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 70%)',
    },
    inner: {
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '720px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 30,
    },
    h1: {
        fontSize: '2.1em',
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: '#FFF',
        fontWeight: 200,
        display: 'inline-block',
        padding: '0.7em 1.5em',
        margin: '4.8em auto 4em',
        position: 'relative',
        zIndex: 30,
    },
    arrow:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '0.1em',
        background: 'url("../images/arrow-h.svg") no-repeat 50% 50%',
        backgroundSize: 'contain',
        opacity: 0.6,
    },
    iconMenu:{
        position: 'absolute',
        left: 0,
        top: '50%',
        marginTop: '-2.1em',
        zIndex: 50,
    },
};
class IndexHeader extends Component {
    render() {
        return (
            <div style={styles.header}>
                <div style={styles.mask}>
                    <div style={Object.assign({}, styles.bg, {backgroundImage:'url(' + fixtures[0].cover_image + ')' })} />
                    <div style={styles.colorOne} />
                    <div style={styles.colorTwo} />
                </div>
                <div style={styles.inner}>
                    <div style={styles.iconMenu}>
                        <IndexMenu />
                    </div>
                    <h1 style={styles.h1}>киоск плюс<span style={styles.arrow} /></h1>
                    <div style={styles.item}>
                        {/*{fixtures.map(fixture =>*/}
                            {/*<div style={styles.item} key={fixture.id}>*/}
                                {/*<div style={styles.mask} />*/}
                            {/*</div>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexHeader;