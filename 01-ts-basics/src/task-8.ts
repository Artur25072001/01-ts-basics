import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

let posts: Post[] = [
  { id: 1, title: "Post 1", body: "This is the first post." },
  { id: 2, title: "Post 2", body: "This is the second post." },
];

fetchPosts()
  .then((fetchedPosts) => {
    posts = fetchedPosts;
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });
