import React, { Component } from "react";
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination' ;
import fixtures from "./fixtures";

const styles = {
    root: {
        position: 'relative',
    },
    swiper: {
        padding: '0 15px 0 13px',
    },
    mainSwiper: {
        position: 'relative',
        backgroundColor: '#FFF',
    },
    IssuesSwiper: {
        padding: 10,
    },
    slideSwiper: {
        paddingRight: 10,
        minHeight: 100,
    },
    imgSwiper: {
        width: '100%',
        borderRadius: 7,
        pointerEvents: 'none'
    },
    magSwiper: {
        width: '21%',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        pointerEvents: 'none',
        position: 'absolute',
        left: '3%',
        bottom: 50,
    },
    infoSwiper: {
        position: 'relative',
        padding: ' 3% 3% 3% 30%',
    },
    titleSwiper: {
        fontSize: 15,
        marginBottom: 7,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    textSwiper: {
        fontSize: 11,
        lineHeight: 1.5,
        maxHeight: 55,
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
        fontSize: 9,
        lineHeight: 1.5,
        textTransform: 'uppercase',
    },
};
class SwiperMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let num = 4;
        let content = [];
        for (let i = 0; i < num; i++) {
            content.push(
                <div style={styles.slideSwiper} key={fixtures[i].id}>
                    <img style={styles.imgSwiper} src={fixtures[i].cover_image} alt={fixtures[i].title} />
                    <div style={styles.infoSwiper}>
                        <img style={styles.magSwiper} src={fixtures[i].main_image} alt={fixtures[i].title} />

                        <h3 style={styles.titleSwiper}>{fixtures[i].title}</h3>
                        <p style={styles.textSwiper}>{fixtures[i].text}<span style={styles.shadowSwiper}></span></p>
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
        return <div style={styles.root}>
                    <SwipeableViews style={styles.swiper} enableMouseEvents index={this.props.active} onChangeIndex={this.props.changer} onSwitching={this.props.changer}>
                        {content}
                    </SwipeableViews>
                    <Pagination dots={num} index={this.props.active} onChangeIndex={this.props.changer} />
                </div>;
    }
}


export default SwiperMain;