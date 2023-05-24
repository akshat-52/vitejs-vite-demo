import { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const Post = ({ userId, body, title }) => {
  const avatar = createAvatar(adventurer, {
    seed: userId,
    size: 256,
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9'],
  }).toDataUriSync();

  return (
    <div className="bg-white text-black m-5 p-5 justify-center rounded-lg flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full" />
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div>
        <p className="">{body}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>{posts}</h1>
    </div>
  );
};

export default App;
