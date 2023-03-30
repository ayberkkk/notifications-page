const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.querySelector("#mark-all");

unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
  });
});

if (markAll) {
  markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => message.classList.remove("unread"))
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
  });
}
