<script lang="ts">
	export let types = ['multiple_choice', 'checkbox', 'ranking'];
	export let mode = 'add';
	export let questionToEdit: any = null;

	export let onAdd: (q: any) => void;
	export let onUpdate: (q: any) => void;
	export let onClose: () => void;

	let text = '';
	let type = types[0];
	let coords: any[] = [];
	let newCoord = { x1: '', y1: '', x2: '', y2: '' };

	$: if (mode === 'edit' && questionToEdit) {
		text = questionToEdit.text;
		type = questionToEdit.type;
		coords = [...questionToEdit.coordinates];
	} else if (mode === 'add') {
		text = '';
		type = types[0];
		coords = [];
	}

	function addCoord() {
		const nums = [newCoord.x1, newCoord.y1, newCoord.x2, newCoord.y2].map(Number);
		if (nums.some(isNaN)) return;

		coords = [...coords, { x1: nums[0], y1: nums[1], x2: nums[2], y2: nums[3] }];
		newCoord = { x1: '', y1: '', x2: '', y2: '' };
	}

	function deleteCoord(idx: number) {
		coords = coords.filter((_, i) => i !== idx);
	}

	function save() {
		if (!text || coords.length === 0) return;

		const payload = { text, type, coordinates: coords };
		mode === 'add' ? onAdd(payload) : onUpdate(payload);
	}
</script>

<div class="w-full space-y-6 rounded-xl bg-white p-6 shadow-lg">

	<div class="flex items-center justify-between border-b pb-4">
		<h2 class="text-2xl font-bold tracking-tight text-gray-900">
			{mode === 'add' ? 'Create Question' : 'Edit Question'}
		</h2>

		<div class="flex gap-3">
			<button
				on:click={save}
				class="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white shadow transition hover:bg-green-700"
			>
				{mode === 'add' ? 'Save' : 'Update'}
			</button>

			<button
				on:click={onClose}
				class="rounded-lg bg-gray-300 px-5 py-2 font-semibold text-gray-800 shadow transition hover:bg-gray-400"
			>
				Close
			</button>
		</div>
	</div>

	<div class="space-y-4">
		<div class="flex flex-col gap-1">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="text-sm font-semibold text-gray-700">Question Text</label>
			<input
				type="text"
				placeholder="Enter question text..."
				bind:value={text}
				class="w-full rounded-lg border p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
			/>
		</div>

		<!-- svelte-ignore a11y_label_has_associated_control -->
		<div class="flex flex-col gap-1">
			<label class="text-sm font-semibold text-gray-700">Question Type</label>
			<select
				bind:value={type}
				class="w-full rounded-lg border bg-white p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
			>
				{#each types as t}
					<option value={t}>{t}</option>
				{/each}
			</select>
		</div>

		<div class="space-y-3">
			<h3 class="text-lg font-semibold text-gray-800">Coordinates</h3>

			<div class="flex flex-wrap items-end gap-3 rounded-lg border bg-gray-50 p-3">
				<input type="number" placeholder="x1" bind:value={newCoord.x1} class="coord-input" />
				<input type="number" placeholder="y1" bind:value={newCoord.y1} class="coord-input" />
				<input type="number" placeholder="x2" bind:value={newCoord.x2} class="coord-input" />
				<input type="number" placeholder="y2" bind:value={newCoord.y2} class="coord-input" />

				<button
					class="rounded bg-blue-600 px-3 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
					on:click={addCoord}
				>
					Add
				</button>
			</div>

			<ul class="max-h-40 space-y-2 overflow-y-auto pr-1">
				{#each coords as c, idx}
					<li class="flex items-center justify-between rounded border bg-gray-100 p-2 shadow-sm">
						<span class="font-mono text-sm text-gray-700">
							({c.x1}, {c.y1}) → ({c.x2}, {c.y2})
						</span>
						<button
							on:click={() => deleteCoord(idx)}
							class="font-semibold text-red-600 transition hover:text-red-700"
						>
							Delete
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
