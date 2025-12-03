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
	<div class="flex h-[50px] w-full items-center bg-[#023fd8] z-100">
		<div class="mx-auto flex w-9/13 justify-end font-bold text-white">
			CCC TOOLS IS A SET OF HANDY TOOLS CREATED TO SIMPLIFY ROUTINE WORK.
		</div>
	</div>
	<Navigation />
	<div class="h-[5px] w-full bg-gray-300"></div>
	{@render children()}
	
	<div class="flex h-[100px] w-full items-center bg-[#023fd8]"></div>
	
</main>
