import styled, { css } from 'styled-components';

export const NewsPageContainer = styled.div``;

export const NewsItemWrap = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  > span {
    margin-right: 8px;
    color: #9b9b9b;
  }
  &:hover {
    background-color: #eee;
  }
`;

export const NewsItemContentWrap = styled.div``;

export const NewsTitle = styled.a`
  text-decoration: none;
  color: #222;
`;

export const NewsActionWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const NewsPoint = styled.div`
  margin-right: 5px;
  color: #9b9b9b;
  font-size: 12px;
`;

export const NewsAuthor = styled(NewsPoint)``;

export const NewsTime = styled(NewsPoint)``;

export const NewsComment = styled(NewsPoint)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const NewsWishlist = styled(NewsPoint)`
  cursor: pointer;
  &:hover {
    color: red;
  }
  ${({ isWishList }) => isWishList && css`
    color: red;
  `}
`;

export const NewsDeleteButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const NewsSearchWrap = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  input {
    border-radius: 15px;
    padding: 8px 12px;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 14px;
    &::placeholder {
      font-style: italic;
      opacity: .7;
    }
  }
`;
