
<script lang="ts">
	import '../app.css';
	let { data, children } = $props();
	import Toast from '$lib/components/ToastContainer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<Toast />
<main>
	<div class="w-full h-[50px] bg-[#023fd8] "></div>
	<Navigation />
	<div class="w-full h-[5px] bg-gray-300 "></div>
	{@render children()}
</main>
