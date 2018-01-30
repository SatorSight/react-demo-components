import React, {Component} from 'react';
import fixtures from "./fixtures";

const styles = {
    item: {
        width: '100%',
        backgroundColor: '#000',
        position: 'relative',
    },
    inner: {
        width: '100%',
        maxWidth: '34em',
        position: 'relative',
        overflow: 'hidden',
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
        background: 'url("./images/next.png") no-repeat 50% 50%',
        backgroundSize: 'cover',
    },
    left: {
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0.1em 0.1em 0.3em',
        borderRadius: '0.2em',
        float: 'left',
        maxWidth: '19%',
        margin: '2em 2.2em 1em',
        maxHeight: '6.5em',
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
        padding: '1.9em 0 1em',
    },
    title: {
        fontSize: '1em',
        textTransform: 'uppercase',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 200,
        letterSpacing: 3.2,
        color: '#fff',
        opacity: 0.6,
        marginBottom: '0.8em',
    },
    text: {
        fontSize: '1.4em',
        lineHeight: 1.5,
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 400,
        letterSpacing: 1.2,
        color: '#fff',
        marginBottom: '0.5em',
    },
    captionColorSwiper: {
        display: 'inline',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.4em 0.5em 0.2em 0.7em',
        fontSize: '0.9em',
        fontWeight: 200,
        letterSpacing: '0.2em',
        lineHeight: 1.5,
        textTransform: 'uppercase',
        border: '1px solid #FFF',
        opacity: 0.8,
    },
};

class ArticleNext extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {num} = this.props;
        const next = num+1;
        return (

            <div style={styles.item} key={fixtures[next].id}>
                <div style={styles.inner}>
                    <div style={styles.left}>
                        <a style={styles.url} href={fixtures[next].url}>
                            <img style={styles.magLeft} src={fixtures[next].main_image} alt={fixtures[next].title} />
                        </a>
                    </div>
                    <div style={styles.right}>
                        <a style={styles.url} href={fixtures[next].url}>
                            <h3 style={styles.title}>Следующая статья</h3>
                            <p style={styles.text}>{fixtures[next].title}</p>
                            <div style={styles.page}>
                                <p style={styles.captionColorSwiper}>
                                    <span>{fixtures[next].page}/</span>
                                    <span>{fixtures[next].ollPage}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styles.bg}>
                    <img style={styles.imgBg} src={fixtures[next].main_image} alt={fixtures[next].title} />
                    <div style={styles.mask} />
                </div>
            </div>
        );
    }
}


export default ArticleNext;