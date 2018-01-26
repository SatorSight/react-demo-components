import React, { Component } from "react";
import PopularTop from './PopularTop';
import PopularMain from './PopularMain';
import fixtures from './fixtures';
const styles = {
    issuesSwiper: {
        backgroundColor: '#F5F5F5',
        overflow: 'hidden',
        position: 'relative',
    },
    over: {
        overflow: 'hidden',
        position: 'relative',
    },
    title: {
        fontSize: '1.5em',
        textTransform: 'uppercase',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        fontWeight: 400,
        textAlign: 'center',
        padding: '2.8em 0 0',
        letterSpacing: 3.5,
    },
};
class PopularJournalsSwiper extends React.Component {

    constructor(props) {
        super(props);

        const first_fixture_id = Math.floor(fixtures.length/2);

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
                <h3 style={styles.title}>Популярные издания</h3>
                <div style={styles.over}>
                    <PopularTop key={PopularTop} active={this.state.index} fixtures={fixtures} changer={this.handleChangeIndex} onSwitching={this.handleChangeIndex} />
                    <PopularMain key={PopularMain} active={this.state.index} fixtures={fixtures} changer={this.handleChangeIndex} onSwitching={this.handleChangeIndex} />
                </div>
            </div>
        );
    }
}
export default PopularJournalsSwiper;

