const commentForm = document.querySelector("#comment-form");
const commentList = document.querySelector("#comment-list");
const commentStorageKey = "travel-notes-comments";

const readComments = () => {
  try {
    return JSON.parse(localStorage.getItem(commentStorageKey)) || [];
  } catch {
    return [];
  }
};

const saveComments = (comments) => {
  localStorage.setItem(commentStorageKey, JSON.stringify(comments));
};

const renderComments = () => {
  commentList.replaceChildren();

  readComments().forEach((comment, index) => {
    const item = document.createElement("li");
    const header = document.createElement("header");
    const name = document.createElement("strong");
    const date = document.createElement("time");
    const text = document.createElement("p");
    const deleteButton = document.createElement("button");

    item.className = "comment-item";
    name.textContent = comment.name;
    date.dateTime = comment.date;
    date.textContent = new Date(comment.date).toLocaleDateString("ko-KR");
    date.className = "meta";
    text.textContent = comment.text;
    deleteButton.type = "button";
    deleteButton.className = "comment-delete";
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      const comments = readComments();
      comments.splice(index, 1);
      saveComments(comments);
      renderComments();
    });

    header.append(name, date, deleteButton);
    item.append(header, text);
    commentList.append(item);
  });
};

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(commentForm);
  const comments = readComments();

  comments.unshift({
    name: formData.get("name").trim(),
    text: formData.get("comment").trim(),
    date: new Date().toISOString(),
  });
  saveComments(comments);
  commentForm.reset();
  renderComments();
});

renderComments();
