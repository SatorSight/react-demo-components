import React, { Component } from "react";
import SwipeableViews from 'react-swipeable-views';

const styles = {
    swiper: {
        padding: '0 10%',
        zIndex: 20,
        position: 'relative',
    },
    item: {
        margin: '2em 1em 3em',
        height: '10em',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '1em',
        boxShadow: '0 1em 5em -3em rgba(0,0,0,1)',
    },
    mask: {
        zIndex: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    img: {
        width: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        textAlign: 'center',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
    },
    logo: {
        width: '80%',
        height: '50%',
        position: 'absolute',
        left: '10%',
        top: '25%',
        zIndex: 50,
        textAlign: 'center',
    },
    logoImg: {
        height: '100%',
        width: 'auto',
        pointerEvents: 'none',
    },
};

class PopularMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SwipeableViews style={styles.swiper} enableMouseEvents index={this.props.active} onChangeIndex={this.props.changer} onSwitching={this.props.changer}>
                {this.props.fixtures.map((fixture, index) =>
                    <div style={styles.item} key={index}>
                        <div style={styles.mask} />
                        <img style={styles.img} src={fixture.main_image} alt={fixture.title} />
                        <div style={styles.logo}>
                            <img style={styles.logoImg} src={fixture.logo} alt={fixture.title} />
                        </div>
                    </div>
                )}
            </SwipeableViews>
        );
    }
}

export default PopularMain;