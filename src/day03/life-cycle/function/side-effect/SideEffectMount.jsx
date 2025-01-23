import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/albums
const SideEffectMount = () => {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums")
      // 예외 처리 early return
      if(!response.ok){
        throw new Error("데이터를 불러올 수 없습니다.😢")
      }
      const datas = await response.json() 
      // console.log(datas)
      // return datas;
      setAlbums(datas); // 함수 return할 필요 없음 => 데이터를 넣어줄 목적이기 떄문에!
    }
  
    // getDatas().then((albums) => { setAlbums(albums) })
    // getDatas().then(setAlbums).catch(console.error)
    getDatas().catch(console.error)

    console.log("리랜더링🐹")
  }, [])

  // const albumList = albums.map((albums) => <li>{albumList.title}</li>)
  const albumList = albums.map(({title}, i) => <li key={i}>{title}</li>) // 비구조할당


  return (
    <div>
      <ul>
        {albumList}
      </ul>
    </div>
  );
};

export default SideEffectMount;