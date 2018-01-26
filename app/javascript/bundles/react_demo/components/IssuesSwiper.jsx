import React, { Component } from "react";
import SwiperTop from './SwiperTop';
import SwiperMain from './SwiperMain';
import fixtures from './fixtures';
const styles = {
    issuesSwiper: {
        backgroundColor: '#FFF',
        overflow: 'hidden',
    },
};
class IssuesSwiper extends React.Component {
    constructor(props) {
        super(props);

        const first_fixture_id = 0;

        this.state = {
            index: first_fixture_id,
        };
    }

    handleChangeIndex = index => {
        this.setState({ index });
    };

    render() {
        return (
            <div style={styles.issuesSwiper}>
                <SwiperTop active={this.state.index} key={SwiperTop} fixtures={fixtures} changer={this.handleChangeIndex} onSwitching={this.handleChangeIndex} />
                <SwiperMain active={this.state.index} key={SwiperMain} fixtures={fixtures} changer={this.handleChangeIndex} onSwitching={this.handleChangeIndex} />
            </div>
        );
    }
}
export default IssuesSwiper;
