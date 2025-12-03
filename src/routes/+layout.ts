
export function load({ url }) {
	const records = [
		{ name: 'DASHBOARD', path: '/' },
	];

	const currentPath = url.pathname;
	const record = records.find((r) => r.path === currentPath);
	return {
		title: record ? `${record.name} | CCC` : 'CCC',
	};
}

