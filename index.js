const bdayMonth = 9;
const bdayDay = 16;

function getNextBirthday() {
  const now = new Date();
  let next = new Date(now.getFullYear(), bdayMonth, bdayDay);
  if (next < now) next.setFullYear(next.getFullYear() + 1);
  return next;
}

function updateCountdown() {
  const now = new Date();
  const diff = getNextBirthday() - now;

  // const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  // const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  // const m = Math.floor((diff / (1000 * 60)) % 60);
  // const s = Math.floor((diff / 1000) % 60);

  document.querySelector("time").dateTime = new Date(diff).toISOString();
}

setInterval(updateCountdown, 1000);
updateCountdown();