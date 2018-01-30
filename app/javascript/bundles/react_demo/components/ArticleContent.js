import React, {Component} from 'react';
import fixtures from "./fixtures";
const styles = {
    item: {
        width: '100%',
        maxWidth: '720px',
        margin: '0 auto',
        backgroundColor: '#FFF',
        color: '#000',
        position: 'relative',
        overflow: 'hidden',
    },
    maskImg: {
        marginBottom: '2em',
    },
    inner: {
        margin: '2em 2em 3em',
    },
    img: {
        width: '100%',
    },
    titleOne: {
        fontSize: '1.7em',
        marginBottom: '0.6em',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
    },
    textMain: {
        fontSize: '1.6em',
        lineHeight: 1.7,
        marginBottom: '1em',
        fontFamily: 'Georgia, sans-serif',
    },
    text: {
        fontSize: '1.5em',
        lineHeight: 1.5,
        marginBottom: '1em',
        fontFamily: 'Georgia, sans-serif',
    },
    titleImg: {
        margin: '1.4em',
        fontSize: '1.4em',
        fontFamily: 'Georgia, sans-serif',
        fontWeight: 600,
    },
    innerImg: {
        margin: '2em',
    },
    urlImg: {
        display: 'block',
    },
    fot: {
        margin: '4em 2em 2em',
        color: '#999',
    },
    fotText: {
        fontFamily: 'Georgia, sans-serif',
        fontSize: '1.2em',
        fontWeight: 300,
    },
    button: {
        display: 'block',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        textTransform: 'uppercase',
        borderRadius: '3em',
        background: 'url(./images/like.png) no-repeat 1.2em 50% #FFF',
        backgroundSize: '1.4em auto',
        margin: '1em 0 0',
        padding: '0.2em 1.5em 0 3.5em',
        border: '1px solid #ddd',
        lineHeight: 3,
        fontSize: '1.2em',
        letterSpacing: 1,
        cursor: 'pointer',
    },
};

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {num} = this.props;
        return (
            <div style={styles.item} key={ArticleContent}>
                <div style={styles.maskImg}>
                    <a style={styles.urlImg} href="#11">
                        <img style={styles.img} src="images/11.jpg" alt="" />
                    </a>
                </div>
                <div style={styles.inner}>
                    <h1 style={styles.titleOne}>Мисс MAXIM 2017</h1>
                    <p style={styles.textMain}>Встречай десятку финалисток нашего еегодного конкурса красоты, благодаря которому простая читательница муского журнала может оказаться на обложке! Сегодня повезло девушке Катрине из города Щадринск.</p>
                </div>
                <div style={styles.maskImg}>
                    <p style={styles.titleImg}>1. Екатерина Котаро, г. Щадринск</p>
                    <div style={styles.innerImg}>
                        <a style={styles.urlImg} href="#1">
                            <img style={styles.img} src="images/1.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <div style={styles.inner}>
                    <p style={styles.text}>Почему именно ты&nbsp;должна оказаться на&nbsp;обложке MAXIM?</p>
                    <p style={styles.text}>&mdash;&nbsp;Это будет моей личной большой победой над своими комплексами</p>
                    <p style={styles.text}>Есть&nbsp;ли у&nbsp;тебя опыт съемки для мужских журналов, каталогов белья и&nbsp;т.п.?</p>
                    <p style={styles.text}>&mdash;&nbsp;Есть только чистый энтузиазм</p>
                    <p style={styles.text}>Что ты&nbsp;больше всего в&nbsp;себе любишь? Какое место у&nbsp;тебя самое красивое?</p>
                    <p style={styles.text}>&mdash;&nbsp;Больше всего я&nbsp;люблю в&nbsp;себе скромность. А&nbsp;мои красивые места пусть оценят читатели вашего журнала!</p>
                    <p style={styles.text}>Какая девушка эротичнее&nbsp;&mdash; абсолютно голая или в&nbsp;одежде? И&nbsp;в&nbsp;какой одежде?</p>
                    <p style={styles.text}>&mdash;&nbsp;Самый эротичный наряд для девушки&nbsp;&mdash; чулки и&nbsp;высокие каблуки!</p>
                    <p style={styles.text}>Какие у&nbsp;тебя таланты помимо суперской внешности? Спортивный разряд&nbsp;по...? Умение играть&nbsp;на...? Познания в&nbsp;области...?</p>
                    <p style={styles.text}>&mdash;&nbsp;Находить себе приключения</p>
                    <p style={styles.text}>Какие ошибки чаще всего совершают мужчины, пытаясь познакомиться с&nbsp;тобой?</p>
                    <p style={styles.text}>&mdash;&nbsp;Орфографические)</p>
                </div>
                <div style={styles.fot}>
                    <p style={styles.fotText}>{fixtures[num].title}, &laquo;{fixtures[num].name}&raquo;, {fixtures[num].date}</p>
                    <button style={styles.button}>сохранить или расшарить</button>
                </div>
            </div>
        );
    }
}


export default ArticleContent;