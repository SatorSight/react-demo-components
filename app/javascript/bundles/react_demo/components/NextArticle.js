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
        maxWidth: '40em',
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
        top: '-20%',
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
        background: 'url("images/next.png") no-repeat 50% 50%',
        backgroundSize: 'cover',
    },
    left: {
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0.1em 0.1em 0.3em',
        borderRadius: '0.2em',
        float: 'left',
        maxWidth: '20%',
        margin: '-1em 2.5em 0',
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
        padding: '2em 0',
        maxWidth: '50%',
    },
    title: {
        fontSize: '1em',
        textTransform: 'uppercase',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 400,
        letterSpacing: 2,
        color: '#fff',
        marginBottom: '1em',
    },
    logo: {
        maxHeight: '2em',
        marginBottom: '0.8em',
        width: 'auto',
    },
    date: {
        fontSize: '0.9em',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 400,
        letterSpacing: 2,
        color: '#fff'
    },
};

class NextArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let num = 13;
        let content = [];
        for (let i = 12; i < num; i++) {
            content.push(
                <div style={styles.item} key={fixtures[i].id}>
                    <div style={styles.inner}>
                        <div style={styles.left}>
                            <a style={styles.url} href={fixtures[i].url}>
                                <img style={styles.magLeft} src={fixtures[i].main_image} alt={fixtures[i].title} />
                            </a>
                        </div>
                        <div style={styles.right}>
                            <a style={styles.url} href={fixtures[i].url}>
                                <h3 style={styles.title}>предыдущий выпуск</h3>
                                <img style={styles.logo} src={fixtures[i].logo} alt={fixtures[i].title} />
                                <p style={styles.date}>{fixtures[i].date}</p>
                            </a>
                        </div>
                    </div>
                    <div style={styles.bg}>
                        <img style={styles.imgBg} src={fixtures[i].main_image} alt={fixtures[i].title} />
                        <div style={styles.mask} />
                    </div>
                </div>
            );
        }
        return <div>{content}</div>;
    }
}


export default NextArticle;