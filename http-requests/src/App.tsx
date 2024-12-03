import { useState } from "react";
import "./App.css";
import axios, { AxiosError } from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetPost = async () => {
    setLoading(true);

    try {
      // usando fetch()
      /*const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const postsJSON: Post[] = await posts.json();

      setPostsData(postsJSON);

      console.log(postsJSON);
      */

      // usando axios
      const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
      });

      const posts = await api.get<Post[]>("posts");
      setPostsData(posts.data);

      console.log(posts.data);
    } catch (error) {
      const e = error as AxiosError;
      console.log("Erro!", e.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleGetPost}>Fazer request GET</button>
      <br />
      {loading && <span>Carregando...</span>}
      <ol>
        {postsData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
