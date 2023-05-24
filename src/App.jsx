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
        <p>{body}</p>
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
    <div className="bg-gray-700" text-gray-50>
      <div className="p-10">
        {posts.map((post) => (
          <Post
            key={post.id}
            userId={post.userId}
            body={post.body}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
