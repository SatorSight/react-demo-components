import React, {Component} from 'react';
import fixtures from "./fixtures";
import OwlCarousel from 'react-owl-carousel';

const styles = {
    main: {
        position: 'absolute',
        left: '1.1em',
        right: 0,
        bottom: '0.8em',
        background: 'url("/images/arrow-left.svg") no-repeat 0 50%',
        backgroundSize: 'contain',
        zIndex: 50,
        height: '3.5em',
        overflow: 'hidden',
    },
    url: {
        textDecoration: 'none',
        fontSize: '1.3em',
        fontWeight: 300,
        color: '#FFF',
    },
    text: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        width: 'auto',
        display: 'inline-block',
        padding: '1.3em 0 0.4em 1.65em',
        fontStretch: 'ultra-condensed',
        opacity: 0.8,
    },
    active: {
        opacity: 1,
    },
};
class IndexMenuSet extends Component {
    render() {
        return (
            <div style={styles.main}>
                <OwlCarousel autoWidth dots={false} >
                    <div style={styles.item}>
                        <p style={styles.url}><span style={Object.assign({}, styles.text, styles.active)}>всё</span></p>
                    </div>
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            <div style={styles.item} key={String(currentIndex)}>
                                <a style={styles.url} href={fixtures.url}><span style={styles.text}>{fixtures.selection}</span></a>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        );
    }
}

export default IndexMenuSet;