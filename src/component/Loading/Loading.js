// Loading.js
import React from 'react';
import Spinner from '../../assets/loading/Spinner.gif'

export const Loading = () => {
  return (
    <div>
      <p>분석을 하는데 20초에서 1분정도 걸릴 수 있습니다.</p>

      <img src={Spinner} alt="로딩중" width="20%" />
    </div>
  )
};

export default Loading;