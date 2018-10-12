// HTML
// <ul id="posts"></ul>

const postsElement = document.querySelector('#id');

const settings = {
  timer: null, // debouncing
  delay: 200, // delay amount to wait before fetching more posts
  offsetPixels: 300, // pixel amount before reaching the bottom of the doc
  pageIndex: 0, // which page to fetch posts from (posts are paginated)
};

window.addEventListener('scroll', scrollHandler);

const scrollHandler = () => {
  if(settings.timer) {
    window.clearTimeout(settings.timer);
  }

  settings.timer = window.setTimeout(loadPosts, settings.delay);
}

const hasReachedBottom = () => {
  // pure dom apis
  return window.scrollTop > (document.offsetHeight - window.offsetHeight - settings.offsetPixels);
}

const loadPosts = () => {
  if (hasReachedBottom()) {
    axios.get('/posts?page=' + settings.pageIndex).then(posts => {
      if(!posts || !posts.length) return;

      posts.forEach(post => {
        postsElement.appendChild(`<li>${posts.title}</li>`);
      });
    });

    settings.pageIndex += 1;
  }
}