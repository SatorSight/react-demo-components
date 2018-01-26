import React, { Component } from "react";
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination' ;
import PropTypes from 'prop-types';

class IssuesSwiper extends React.Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({ index });
    };

    render() {
        const { index } = this.state;
        let dot =0;

        return (
            <div style={styles.mainSwiper} >
                <SwipeableViews enableMouseEvents index={index} style={styles.IssuesSwiper} onChangeIndex={this.handleChangeIndex} onSwitching={this.handleChangeIndex}>
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            dot = dot+1,
                            <div key={String(currentIndex)}>
                                <div style={styles.slideSwiper}>
                                    <img style={styles.imgSwiper} src={fixtures.cover_image} alt={fixtures.title} />
                                    <div style={styles.infoSwiper}>
                                        <img style={styles.magSwiper} src={fixtures.main_image} alt={fixtures.title} />

                                        <h3 style={styles.titleSwiper}>{fixtures.title}</h3>
                                        <p style={styles.textSwiper}>{fixtures.text}<span style={styles.shadowSwiper}></span></p>
                                        <div>
                                            <p style={styles.captionColorSwiper}>
                                                <span style={styles.captionSpanSwiper}>{fixtures.name}, </span>
                                                <span style={styles.captionSpanSwiper}>{fixtures.date}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </SwipeableViews>
                <Pagination dots={dot} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}
IssuesSwiper.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};


const styles = {
    mainSwiper: {
        position: 'relative',
        backgroundColor: '#FFF',
    },
    IssuesSwiper: {
        padding: 10,
        minHeight: 100,
    },
    slideSwiper: {
        paddingRight: 10,
        minHeight: 100,
    },
    imgSwiper: {
        width: '100%',
        borderRadius: 10,
        pointerEvents: 'none'
    },
    magSwiper: {
        width: '20%',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        pointerEvents: 'none',
        position: 'absolute',
        left: '4%',
        bottom: '50%',
    },
    infoSwiper: {
        position: 'relative',
        padding: ' 3% 3% 3% 30%',
    },
    titleSwiper: {
        fontSize: '20px',
        marginBottom: '3%',
    },
    textSwiper: {
        fontSize: '15px',
        lineHeight: '1.3',
        maxHeight: '58px',
        overflow: 'hidden',
        position: 'relative',
    },
    shadowSwiper: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '70%',
        zIndex: '10',
        background: 'rgba(255,255,255,0)',
        background: '-moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(100%, rgba(255,255,255,1)))',
        background: '-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
    },
    ulSwiper: {
        overflowX: 'hidden'
    },
    captionSwiper: {
        overflow: 'hidden',
        width: '100%',
        margin: '10px 0',
        opacity: 0,
    },
    captionSwiperactive: {
        opacity: 1,
    },
    captionColorSwiper: {
        display: 'inline',
        backgroundColor: '#7E6092',
        color: '#FFF',
        borderRadius: 10,
        padding: '4px 10px 2PX',
        fontSize: '12px',
        lineHeight: 1.5,
        textTransform: 'uppercase',
    },
};

const fixtures = [
    {id: 1, title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: 'images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 2, title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/2/img.jpg', main_image: 'images/2/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 3, title: 'Мисс MAXIM 2018', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: 'images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 4, title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: 'images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
];

export default IssuesSwiper;

