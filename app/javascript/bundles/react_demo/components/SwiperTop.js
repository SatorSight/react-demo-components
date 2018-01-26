import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import fixtures from "./fixtures";

const styles = {
    swiper: {
        paddingRight: '73%',
    },
    item: {
        paddingRight: '10%',
        margin: '10px 0 10px 30px',
    },
    next: {
        position: 'relative',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
    },
    link: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        textDecoration: 'none',
        fontSize: '4em',
        color: '#000',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    magSwiper: {
        width: '100%',
    },
    dot: {
        backgroundColor: '#000',
    },
    active: {
        backgroundColor: '#7E6092',
    },
};

class SwiperTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let num = 4;
        let content = [];
        for (let i = 0; i < num; i++) {
            content.push(
                <div style={styles.item} key={fixtures[i].id}>
                    <img style={styles.magSwiper} src={fixtures[i].main_image} alt={fixtures[i].title} />
                </div>
            );
        }
        return <SwipeableViews style={styles.swiper} enableMouseEvents index={this.props.active}>{content}<div style={styles.next}> <a href='#next' style={styles.link}> > </a> </div></SwipeableViews>;
    }
}


export default SwiperTop;