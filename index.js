const bdayMonth = 9;
const bdayDay = 16;

function getNextBirthday() {
	const now = new Date();
	let next = new Date(now.getFullYear(), bdayMonth - 1, bdayDay);
	if (next < now) next.setFullYear(next.getFullYear() + 1);
	return next;
}

function pad(n) {
	return String(n).padStart(2, "0");
}

function updateCountdown() {
	const target = getNextBirthday();
	const diff = Math.max(0, target.getTime() - Date.now());
	const totalSeconds = Math.floor(diff / 1000);

	const d = Math.floor(totalSeconds / 86400);
	const h = Math.floor((totalSeconds % 86400) / 3600);
	const m = Math.floor((totalSeconds % 3600) / 60);
	const s = totalSeconds % 60;

	document.querySelector("time").setAttribute(
		"value",
		`${pad(d)}:${pad(h)}:${pad(m)}:${pad(s)}`
	);
}

setInterval(updateCountdown, 1000);
updateCountdown();