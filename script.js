const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/1/posts?_limit=${limit}$_page=${pageCount}`
  );
  const json = await response.json();
  console.log("js", json);

  json.map((currElm, curr) => {
    console.log("eke", curr);
    const htmlData = `
    <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${currElm.title}</h2>
        <p class="post-info">
        ${currElm.body}
        </p>
      </div>`;
    container.insertAdjacentHTML(`beforeend`, htmlData);
  });
};
getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 300);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } =
    window.document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    console.log(`iam at back`);
    showData();
  }
});
