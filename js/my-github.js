// Write code here to communicate with Github

const URL = "https://api.github.com/users/Jose-cod7/repos";
const UL_ID = "repos-list";
const COUNT_ID = "repos-count";
const GITHUB_PAGE_URL = "https://github.com/Jose-cod7";

const list = document.getElementById(UL_ID);
list.innerHTML = null;

const count = document.getElementById(COUNT_ID);

getRepos();

function getRepos() {
  fetch(URL)
    .then(respone => respone.json())
    .then(repos => {
      updateList(repos);
      updateCount(repos);
    });
}

function updateList(repos) {
  repos.forEach(repo => {
    const link = document.createElement("a");
    link.setAttribute("href", repo.html_url);
    link.innerText = repo.name;

    const listItem = document.createElement("li");

    listItem.appendChild(link);
    list.appendChild(listItem);
  });
}

function updateCount(repos) {
  count.innerText = repos.length;
  count.setAttribute("href", GITHUB_PAGE_URL);
}
