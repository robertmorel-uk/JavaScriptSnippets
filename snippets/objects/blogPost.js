//Create a blog post object
//title
//body
//author
//comments with (author,body)
//isLive

let blogPost = {
  title: "title",
  body: "body",
  author: "author",
  views: 10,
  comments: [
    {
      author: "a",
      body: "b"
    },
    {
      author: "c",
      body: "d"
    }
  ],
  isLive: true
};

showBlogPost(blogPost);

function showBlogPost(blogPost) {
  for (let key in blogPost) {
    console.log(key, blogPost[key]);
  }
}
