export function createListItem({ name, score }, position) {
  const li = document.createElement("li");

  let medal = "";
  if (position === 0) medal = "🥇 ";
  else if (position === 1) medal = "🥈 ";
  else if (position === 2) medal = "🥉 ";

  li.textContent = `${medal}${name}: ${score}`;

  li.addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  });

  return li;
}
