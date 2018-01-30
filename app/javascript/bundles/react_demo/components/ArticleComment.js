import React, {Component} from 'react';
import fixtures from "./fixtures";

const styles = {
    item: {
        width: '100%',
        background: '#F5F5F5',
        position: 'relative',
    },
};

class ArticleComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {num} = this.props;
        const next = num+1;
        return (

            <div style={styles.item} key={fixtures[next].id}>
                <div style={styles.inner}>
                    <div style={styles.left}>
                        <a style={styles.url} href={fixtures[next].url}>
                            {/*<img style={styles.magLeft} src={fixtures[next].main_image} alt={fixtures[next].title} />*/}
                        </a>
                    </div>
                    <div style={styles.right}>
                        <a style={styles.url} href={fixtures[next].url}>
                            <h3 style={styles.title}>Следующая статья</h3>
                            <p style={styles.text}>{fixtures[next].title}</p>
                            <div style={styles.page}>
                                <p style={styles.captionColorSwiper}>
                                    <span>{fixtures[next].page}/</span>
                                    <span>{fixtures[next].ollPage}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default ArticleComment;