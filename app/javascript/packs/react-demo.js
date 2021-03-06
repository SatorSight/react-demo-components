import ReactOnRails from 'react-on-rails';
import IssuesSwiper from '../bundles/react_demo/components/IssuesSwiper';
import PopularArticles from '../bundles/react_demo/components/PopularArticles';
import OtherIssues from '../bundles/react_demo/components/OtherIssues';
import NextArticle from '../bundles/react_demo/components/NextArticle';
import Article from '../bundles/react_demo/components/Article';
import PopularJournalsSwiper from '../bundles/react_demo/components/PopularJournalsSwiper';
import IssuesTheme from '../bundles/react_demo/components/IssuesTheme';
import IndexPage from '../bundles/react_demo/components/IndexPage';

ReactOnRails.register({
    IssuesSwiper,
    NextArticle,
    PopularArticles,
    OtherIssues,
    Article,
    PopularJournalsSwiper,
    IssuesTheme,
    IndexPage
});