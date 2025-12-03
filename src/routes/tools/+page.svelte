<script lang="ts">
	import MainBody from './survey-scanner/main-body.svelte';

	let showModal = false;
	let pages = [{ id: 1 }];
	let currentPageIndex = 0;

	function addPage() {
		pages = [...pages, { id: pages.length + 1 }];
		currentPageIndex = pages.length - 1;
	}
</script>

<main class="mx-auto min-h-screen max-w-7xl bg-gray-50 p-6">
	<div class="mb-3 rounded-2xl bg-white p-3 text-center shadow-2xl">
		<h1 class="text-4xl font-extrabold text-gray-900">PAGE COORDINATE EDITOR</h1>
	</div>

	<div
		class="mb-3 flex flex-col justify-between gap-4 rounded-2xl bg-white p-3 shadow-2xl md:flex-row md:items-center"
	>
		<div class="flex items-center gap-3">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="font-medium text-gray-700">Select Page:</label>
			<select
				bind:value={currentPageIndex}
				class="rounded-lg border p-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
			>
				{#each pages as page, index}
					<option value={index}>Page {index + 1}</option>
				{/each}
			</select>
		</div>

		<div class="flex gap-3">
			<button
				on:click={addPage}
				class="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white shadow-md"
			>
				+ New Page
			</button>
			<button
				on:click={() => (showModal = true)}
				class="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white shadow-md"
			>
				+ Add Question
			</button>
		</div>
	</div>

	<MainBody
		{showModal}
		openModal={() => (showModal = true)}
		closeModal={() => (showModal = false)}
	/>
</main>
