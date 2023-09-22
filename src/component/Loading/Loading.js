// Loading.js
import React from 'react';
import {Background,} from './Styles';
import Spinner from '../../assets/loading/Spinner.gif'

export const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt = "로딩중" width="20%"/>
    </Background>
  )
};

export default Loading;