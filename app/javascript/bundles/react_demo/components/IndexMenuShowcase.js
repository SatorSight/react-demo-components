import React, { Component } from 'react';
import fixtures from './fixtures';

const styles = {
    main: {
        padding: '1em 0',
    },
    item: {
        padding: '0 3.2em',
    },
    name: {
        color: '#999',
        fontSize: '1.2em',
        lineHeight: 4,
        fontWeight: 300,
        letterSpacing: '0.3em',
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
};

class IndexMenuShowcase extends Component {
    render() {
        return (
            <div>
                <div style={styles.main}>
                    {fixtures.map(fixture =>
                        <div style={styles.item} key={fixture.id}>
                            <a href={fixture.url} style={styles.name}>{fixture.selection}</a>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default IndexMenuShowcase;