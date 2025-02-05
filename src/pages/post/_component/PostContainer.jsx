import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const PostContainer = () => {
  
  return (
    <div>
      컨테이너
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PostContainer;