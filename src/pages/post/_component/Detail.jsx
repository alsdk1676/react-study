import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPost from '../_function/getPost';

const Detail = () => {
  const {id} = useParams();

  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPost(id)
      .then((posts) => {
        setPost(posts)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(true)
      })
  }, [id])

  // return을 만나면 함수 종료되기 때문
  if(isLoading){
    return (
      <div>
        데이터 불러오는중...😅
      </div>
    )
  }

  console.log(post)

  return (
    <div>
      <p>제목 : {post.title}</p>
      <p>내용 : {post.body}</p>
    </div>
  );
};

export default Detail;