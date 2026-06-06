import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

type Props = {}

const Posts = (props: Props) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    // .then(res => res.json())
    // .then(data => setData(data))
    // .catch(err => setError(true))

    axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
    .then(result => setData(result.data))
  }, []);

    return (
    <div>{data.map(post => <p>{post.body}</p>)}</div>
    
  )
}

export default Posts