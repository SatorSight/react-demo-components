import ReactOnRails from 'react-on-rails';
import IssuesSwiper from '../bundles/react_demo/components/IssuesSwiper';
import PopularArticles from '../bundles/react_demo/components/PopularArticles';
import OtherIssues from '../bundles/react_demo/components/OtherIssues';
import NextArticle from '../bundles/react_demo/components/NextArticle';
import Article from '../bundles/react_demo/components/Article';
import PopularJournalsSwiper from '../bundles/react_demo/components/PopularJournalsSwiper';
import IssuesTheme from '../bundles/react_demo/components/IssuesTheme';
import IndexHeader from '../bundles/react_demo/components/IndexHeader';
import IndexFooter from '../bundles/react_demo/components/IndexFooter';
import Index from '../bundles/react_demo/components/index';

ReactOnRails.register({
    IndexHeader,
    IssuesSwiper,
    NextArticle,
    PopularArticles,
    OtherIssues,
    Article,
    PopularJournalsSwiper,
    IssuesTheme,
    IndexFooter,
    Index
});