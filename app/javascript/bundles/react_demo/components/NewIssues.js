import React, { Component } from "react";
import fixtures from './fixtures';
import OwlCarousel from 'react-owl-carousel';

export default class NewIssues extends Component {
    render() {
        return (
            <div style={styles.main}>
                <p style={styles.title}>новые выпуски</p>
                <OwlCarousel autoWidth dots={false} >
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            <div key={String(currentIndex)} style={styles.item} >
                                <a href={fixtures.url}>
                                    <img src={fixtures.main_image} alt={fixtures.title} style={styles.imgOtherIssues} />
                                </a>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        );
    }
}
const styles = {
    item: {
        margin: '0 1em',
        paddingBottom: '1em',
    },
    main: {
        position: 'relative',
        backgroundColor: '#FFF',
        overflow: 'hidden',
        height: '15.65em',
        paddingBottom: '1.4em',
    },
    title: {
        fontSize: '1.2em',
        textTransform: 'uppercase',
        fontWeight: 400,
        padding: '2.41em 0 1.3em',
        letterSpacing: '0.15em',
        textAlign: 'center',
    },
    imgOtherIssues: {
        boxShadow: '0.2em 0.2em 0.2em rgba(0,0,0,0.3)',
        overflow: 'hidden',
        height: '9em',
        width: 'auto',
    },
    fot: {
        padding: '0.5em 2.5em 2em',
        textAlign: 'center',
        backgroundColor: '#F5F5F5',
        position: 'relative',
        zIndex: 20,
        clear: 'both',
    },
    button: {
        fontSize: '1.2em',
        paddingTop: '0.2em',
        letterSpacing: 1,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#000',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        display: 'block',
        fontWeight: 400,
        maxWidth: 400,
        margin: '0 auto',
        borderRadius: '2em',
        lineHeight: '3em',
        border: '1px solid #E0E0E0',
        backgroundColor: '#F5F5F5',
    },
};

