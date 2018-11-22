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

//constructor function
function CreateBlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let myBlogPost = new CreateBlogPost("1", "2", "3");

console.log(myBlogPost);
