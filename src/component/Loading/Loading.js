// Loading.js
import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from '../../assets/loading/Spinner.gif'

export const Loading = () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src={Spinner} alt = "로딩중" width="20%"/>
    </Background>
  )
};

export default Loading;