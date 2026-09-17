const bdayMonth = 5;  // e.g. June = 5
const bdayDay = 15;

function getNextBirthday() {
  const now = new Date();
  let next = new Date(now.getFullYear(), bdayMonth, bdayDay);
  if (next < now) next.setFullYear(next.getFullYear() + 1);
  return next;
}

function updateCountdown() {
  const now = new Date();
  const diff = getNextBirthday() - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("time").textContent =
    `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();