import React, { Component } from "react";
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination' ;
import fixtures from "./fixtures";

const styles = {
    root: {
        position: 'relative',
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: '1.2em',
        textTransform: 'uppercase',
        fontWeight: 400,
        padding: '2.41em 0 1.3em',
        letterSpacing: '0.15em',
        textAlign: 'center',
    },
    swiper: {
        padding: '0 2.5em 0 1em',
    },
    mainSwiper: {
        position: 'relative',
    },
    IssuesSwiper: {
        padding: 10,
    },
    slideSwiper: {
        paddingRight: '1em',
        minHeight: 100,
    },
    imgSwiper: {
        width: 'auto',
        borderRadius: '0.5em',
        pointerEvents: 'none',
        height: '20em',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
    },
    magSwiper: {
        width: '7em',
        boxShadow: '0 0 1em rgba(0,0,0,0.2)',
        borderRadius: '0.2em',
        position: 'absolute',
        left: '1em',
        bottom: '3em',
    },
    infoSwiper: {
        position: 'relative',
        padding: '1.5em 2em 1em 10em',
        height: '7em',
    },
    textSwiper: {
        fontSize: '1.2em',
        lineHeight: 1.4,
        maxHeight: '4em',
        marginBottom: '1em',
        overflow: 'hidden',
        position: 'relative',
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
        fontWeight: 300,
        letterSpacing: '0.1em',
        background: 'linear-gradient(to right, rgba(104,216,181,1) 0%, rgba(113,133,238,1) 100%)',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.3em 1em 0.1em',
        fontSize: '0.9em',
        textTransform: 'uppercase',
    },
};
class MainTopics extends React.Component {
    state = {
        index: 0,
    };
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;
        let num = 4;
        let content = [];
        for (let i = 0; i < num; i++) {
            content.push(
                <div style={styles.slideSwiper} key={fixtures[i].id}>
                    <div style={Object.assign({}, styles.imgSwiper, {backgroundImage:'url(' + fixtures[i].cover_image + ')' })} />
                    <div style={styles.infoSwiper}>
                        <img style={styles.magSwiper} src={fixtures[i].main_image} alt={fixtures[i].title} />
                        <p style={styles.textSwiper}>{fixtures[i].title}</p>
                        <div>
                            <p style={styles.captionColorSwiper}>
                                <span>{fixtures[i].name}, </span>
                                <span>{fixtures[i].date}</span>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div style={styles.root}>
                <h1 style={styles.title}>главные темы</h1>
                <SwipeableViews style={styles.swiper} index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
                    {content}
                </SwipeableViews>
                <Pagination dots={num} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}


export default MainTopics;