const bdayMonth = 9;
const bdayDay = 16;

function getNextBirthday() {
	const now = new Date();
	let next = new Date(now.getFullYear(), bdayMonth - 1, bdayDay);
	if (next < now) next.setFullYear(next.getFullYear() + 1);
	return next;
}

function updateCountdown() {
	document.querySelector("time").dateTime = getNextBirthday().toISOString();
}

setInterval(updateCountdown, 1000);
updateCountdown();