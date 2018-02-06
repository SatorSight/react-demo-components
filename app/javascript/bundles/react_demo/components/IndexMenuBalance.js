import React, { Component } from 'react';
import fixtures from './fixtures';

const styles = {
    main: {
        padding: '1.5em',
    },
    item: {
        padding: '0.5em 0 1.3em',
        position: 'relative',
        color: '#FFF',
    },
    ava: {
        position: 'absolute',
        left: 0,
        top: '0.5em',
        borderRadius: '0.5em',
        width: '6.5em',
        height: '8.5em',
        overflow: 'hidden',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        boxShadow: '0.5em 0.5em 1em rgba(0,0,0,0.2)',
    },
    inner: {
        marginLeft: '8em',
    },
    over: {
        position: 'relative',
        overflow: 'hidden',
        height: '7.5em',
    },
    caption: {
        display: 'inline',
        background: 'linear-gradient(to right, rgba(135,97,117,1) 0%, rgba(127,96,150,1) 100%)',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.4em 0.7em 0.2em',
        fontSize: '0.9em',
        lineHeight: 2,
        textTransform: 'uppercase',
        fontWeight: 300,
    },
    title: {
        fontSize: '1.4em',
        lineHeight: 1.2,
        fontWeight: 500,
        marginBottom: '0.3em',
        maxHeight: '2.2em',
        letterSpacing: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '75%',
    },
    text: {
        fontSize: '1.1em',
        lineHeight: 1.7,
        maxHeight: '5.8em',
        color: '#999',
        overflow: 'hidden',
        position: 'relative',
        width: '90%',
        background: 'linear-gradient(to bottom, rgba(153,153,153,1) 0%, rgba(153,153,153,0) 100%)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
    },
};

class IndexMenuBalance extends Component {
    render() {
        return (
            <div>
                <div style={styles.main}>
                    {fixtures.map(fixture =>
                        <div style={styles.item} key={fixture.id}>
                            <div style={Object.assign({}, styles.ava, {backgroundImage:'url(' + fixture.cover_image + ')' })} />
                            <div style={styles.inner}>
                                <div style={styles.over}>
                                    <h3 style={styles.title}>{fixture.title}</h3>
                                    <p style={styles.text}>{fixture.text}</p>
                                </div>
                                <div>
                                    <p style={styles.caption}>
                                        <span>{fixture.name}, </span>
                                        <span>{fixture.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default IndexMenuBalance;