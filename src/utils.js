export function createListItem({ name, score }) {
  const li = document.createElement("li");
  li.textContent = `${name}: ${score}`;

  li.addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  });

  return li;
}
