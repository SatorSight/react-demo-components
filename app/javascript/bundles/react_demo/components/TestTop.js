import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';

const styles = {
    swiper: {
        backgroundColor: '#FFF',
        width: '100%',
        color: '#FFF',
        padding: '5em 0',
    },
    item: {
        margin: '0 0.5em 0 1em',
        position: 'relative',
        borderRadius: '0.7em',
        overflow: 'hidden',
        maxWidth: '30em',
    },
    imgSwiper: {
        height: '10em',
        pointerEvents: 'none',
    },
};

class TestTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <OwlCarousel autoWidth style={styles.swiper} center loop dots={false} index={this.props.active} onChanged={this.props.index}>
                {this.props.fixtures.map(fixture =>
                    <div style={styles.item} key={fixture.id}>
                        <img style={styles.magSwiper} src={fixture.main_image} alt={fixture.title} />
                    </div>
                )}
            </OwlCarousel>
        );
    }
}
export default TestTop;