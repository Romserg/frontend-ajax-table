export default function compareName(a, b) { // eslint-disable-line
	if (a.name.first > b.name.first) return 1;
	if (a.name.first < b.name.first) return -1;
}