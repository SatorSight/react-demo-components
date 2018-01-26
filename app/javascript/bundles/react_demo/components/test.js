import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import fixtures from './fixtures';

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
class TestOn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let num = 5;
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
                    <Pagination dots={this.props.fixtures.length} index={this.props.active} onChangeIndex={this.props.changer} />
                </div>;
    }
}
export default TestOn;