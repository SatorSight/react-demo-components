import React, {Component} from 'react';
import fixtures from "./fixtures";
import ArticleTop from './ArticleTop';
import ArticleContent from './ArticleContent';
import ArticleNext from './ArticleNext';
import ArticleComment from './ArticleComment';

const styles = {
    item: {
        width: '100%',
        backgroundColor: '#000',
        position: 'relative',
        overflow: 'hidden',
    },
    inner: {
        width: '100%',
        overflow: 'hidden',
        maxWidth: '720px',
        margin: '0 auto',
    },
};

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let num = 8;
        return (
            <div style={styles.item} key={fixtures[num].id}>
                <div style={styles.inner}>
                    <ArticleTop num={num}/>
                    <ArticleContent num={num} />
                    <ArticleComment num={num} />
                    <ArticleNext num={num} />
                </div>
            </div>
        );
    }
}


export default Article;