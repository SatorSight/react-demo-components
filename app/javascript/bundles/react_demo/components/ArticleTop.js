import React, {Component} from 'react';
import fixtures from "./fixtures";
import PersistentDrawer from './menu-blure';

const styles = {
    item: {
        width: '100%',
        backgroundColor: '#000',
        position: 'relative',
        overflow: 'hidden',
    },
    menu: {
        position: 'absolute',
        top: '50%',
        left: 0,
        marginTop: '-28px',
    },
    inner: {
        width: '100%',
        maxWidth: '34em',
        position: 'relative',
        zIndex: 20,
    },
    bg: {
        zIndex: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    imgBg: {
        zIndex: 10,
        position: 'absolute',
        top: '-50%',
        right: 0,
        width: '100%',
        opacity: '0.3'
    },
    mask: {
        zIndex: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        overflow: 'hidden',
        background: 'url("./images/article/mask.png") no-repeat 50% 100%',
        backgroundSize: 'cover',
    },
    left: {
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0.1em 0.1em 0.3em',
        borderRadius: '0.2em',
        float: 'left',
        width: '5.6em',
        maxHeight: '7em',
        margin: '1.3em 1.3em -1em 5em',
    },
    magLeft: {
        width: '100%',
        float: 'left',
    },
    url: {
        display: 'block',
        overflow: 'hidden',
        textDecoration: 'none',
    },
    right: {
        overflow: 'hidden',
        borderRadius: '0.2em',
        marginLeft: '30%',
        padding: '1.8em 0 1.5em',
        maxWidth: '50%',
    },
    title: {
        fontSize: '1.3em',
        textTransform: 'uppercase',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 200,
        letterSpacing: '0.35em',
        color: '#fff',
        marginBottom: '0.4em',
    },
    captionColorSwiper: {
        display: 'inline',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.3em 0.5em 0.1em 0.7em',
        fontSize: '1em',
        fontWeight: 200,
        letterSpacing: '0.2em',
        lineHeight: 1.5,
        textTransform: 'uppercase',
        border: '1px solid #FFF',
    },
    arrow: {
        display: 'block',
        position: 'absolute',
        width: '4.8em',
        top: 0,
        right: 0,
        bottom: 0,
        color: '#FFF',
        background: 'url(images/arrow.png) no-repeat 50% 50%',
        backgroundSize: '1.5em auto',
    },
};

class ArticleTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {num} = this.props;
        return (
            <div style={styles.item} key={fixtures[num].id}>
                <div style={styles.inner}>
                    <div style={styles.menu}>
                        <PersistentDrawer />
                    </div>
                    <div style={styles.left}>
                        <a style={styles.url} href={fixtures[num].url}>
                            <img style={styles.magLeft} src={fixtures[num].main_image} alt={fixtures[num].title} />
                        </a>
                    </div>
                    <div style={styles.right}>
                        <a style={styles.url} href={fixtures[num].url}>
                            <h3 style={styles.title}>&laquo;{fixtures[num].name}&raquo;</h3>
                            <div style={styles.page}>
                                <p style={styles.captionColorSwiper}>
                                    <span>{fixtures[num].page}/</span>
                                    <span>{fixtures[num].ollPage}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <a style={styles.arrow} href={fixtures[num].url} />
                <div style={styles.bg}>
                    <img style={styles.imgBg} src={fixtures[num].main_image} alt={fixtures[num].title} />
                    <div style={styles.mask} />
                </div>
            </div>
        );
    }
}


export default ArticleTop;