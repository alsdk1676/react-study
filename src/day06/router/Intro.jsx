import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Intro = () => {
  // 쿼리스트링값을 가져오는 훅함수
  const [ searchParams ] = useSearchParams()
  // console.log(searchParams.get("title"))
  const job = searchParams.get("title")

  // 동적 파라미터를 가져오는 훅함수
  // console.log(useParams())

  const { title } = useParams();

  return (
    <div>
      {title}님 환영합니다! 소개페이지🤗
      {/* {job}님 환영합니다! 소개페이지🤗 */}
      {/* 환영합니다! 소개페이지🤗 */}
    </div>
  );
};

export default Intro;