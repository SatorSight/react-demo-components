import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import fixtures from './fixtures';

const styles = {
    swiper: {
        backgroundColor: '#FFF',
        color: '#FFF',
        height: '15em',
        padding: '1em 0',
    },
    item: {
        margin: '0 0.5em 0 1em',
        position: 'relative',
        borderRadius: '0.7em',
        overflow: 'hidden',
        maxWidth: '30em',
    },
    imgSwiper: {
        height: '15em',
        width: 'auto',
        pointerEvents: 'none',
        float: 'left',
    },
    magSwiper: {
        width: '21%',
        boxShadow: '0 0 1em rgba(0,0,0,0.2)',
        pointerEvents: 'none',
        position: 'absolute',
        left: '3%',
        bottom: 50,
    },
    infoSwiper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 20,
    },
    titleSwiper: {
        fontSize: '1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 300,
        textTransform: 'uppercase',
        letterSpacing: 2,
        padding: '1.5em',
        opacity: 0.8,
    },
    title: {
        fontSize: '1.3em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 600,
        width: '60%',
    },
    textSwiper: {
        fontSize: '1em',
        lineHeight: 1.5,
        margin: '0.5em 0',
        width: '80%',
    },
    shadowSwiper: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '70%',
        zIndex: '10',
    },
    ulSwiper: {
        overflowX: 'hidden'
    },
    captionSwiper: {
        overflow: 'hidden',
        width: '100%',
        margin: '1em 0',
        opacity: 0,
    },
    captionSwiperactive: {
        opacity: 1,
    },
    captionColorSwiper: {
        display: 'inline',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.4em 0.6em 0.2em',
        fontSize: '1em',
        lineHeight: 1.5,
        textTransform: 'uppercase',
        border: '1px solid #FFF',
        opacity: 0.8,
    },
    foot: {
        position: 'absolute',
        left: '1.5em',
        right: '1.5em',
        bottom: '4em',
        maxHeight: '4.5em',
        overflow: 'hidden',
    },
    page: {
        position: 'absolute',
        left: '1.5em',
        right: '1.5em',
        bottom: '1.5em',
    },
    mask: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: 'url("/images/mask.png") no-repeat 50% 50%',
        backgroundSize: 'cover',
        zIndex: 10,
    },
};


export default class IssuesTheme extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <OwlCarousel autoWidth style={styles.swiper} dots={false}>
                {fixtures.map(fixture =>
                    <div style={styles.item} key={fixture.id}>
                        <div style={styles.mask} />
                        <img style={styles.imgSwiper} src={fixture.cover_image} alt={fixture.title} />
                        <div style={styles.infoSwiper}>
                            <h3 style={styles.titleSwiper}>тема номера</h3>
                            <div style={styles.foot}>
                                <h3 style={styles.title}>{fixture.title}</h3>
                                <p style={styles.textSwiper}>{fixture.text}</p>
                            </div>
                            <div style={styles.page}>
                                <p style={styles.captionColorSwiper}>
                                    <span>{fixture.page} /</span>
                                    <span>{fixture.ollPage}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </OwlCarousel>
        );
    }
}