import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    swiper: {
        paddingRight: '73%',
    },
    item: {
        paddingRight: '10%',
        margin: '10px 0 10px 30px',
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
        return (
            <SwipeableViews style={styles.swiper} enableMouseEvents index={this.props.active}>
                {this.props.fixtures.map(fixture =>
                    <div style={styles.item} key={fixture.id}>
                        <img style={styles.magSwiper} src={fixture.main_image} alt={fixture.title} />
                    </div>
                )}
            </SwipeableViews>
        );
    }
}


export default SwiperTop;