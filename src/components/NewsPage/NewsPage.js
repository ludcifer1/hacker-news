import React, { Component } from 'react';
import moment from 'moment';
import Dashboard from '../../containers/Dashboard';
import { success as ToastSuccess } from '../../utils/toast';
import {
  NewsPageContainer,
  NewsItemWrap,
  NewsItemContentWrap,
  NewsTitle,
  NewsActionWrap,
  NewsPoint,
  NewsAuthor,
  NewsTime,
  NewsComment,
  NewsWishlist,
} from './NewsPage.syled';

class NewsPage extends Component {
  componentDidMount = () => {
    const { fetchNewsList } = this.props;
    fetchNewsList();
  }

  handleWishList = (newsId) => {
    const { addNewsWishList } = this.props;

    addNewsWishList(newsId);
    ToastSuccess('This news has been moved successfully');
  }

  handleRemoveWishList = (newsId) => {
    const { removeNewsWishList } = this.props;

    removeNewsWishList(newsId);
    ToastSuccess('This news has been removed successfully');
  }

  renderNewsItem = (items, index) => {
    const { title, score, by: author, url, time, kids = [] } = items;
    const { newsWishList } = this.props;
    const displayComment = kids.length > 1 ? 'comments' : 'comment';
    const newsTime = moment.duration(time).humanize();
    const newSelected = newsWishList.find(wl => wl.id === items.id);

    return (
      <NewsItemWrap key={index}>
        <span>{index + 1}</span>
        <NewsItemContentWrap>
          <NewsTitle href={url || ''}>{title}</NewsTitle>
          <NewsActionWrap>
            <NewsPoint>{`${score} points`}</NewsPoint>
            <NewsAuthor>{`by ${author}`}</NewsAuthor>
            <NewsTime>{` - ${newsTime} - `}</NewsTime>
            <NewsComment>{`${kids.length || '0'} ${displayComment}`}</NewsComment>
            <NewsPoint>{` - `}</NewsPoint>
            <NewsWishlist
              isWishList={newSelected}
              onClick={() => newSelected ? this.handleRemoveWishList(items.id) : this.handleWishList(items.id)}
            >
              &#10084;
            </NewsWishlist>
          </NewsActionWrap>
        </NewsItemContentWrap>
      </NewsItemWrap>
    )
  }

  render() {
    const { newsItemList} = this.props;
    return (
      <Dashboard>
        <NewsPageContainer>
          {newsItemList.map(this.renderNewsItem)}
        </NewsPageContainer>
      </Dashboard>
    );
  }
}

export default NewsPage;