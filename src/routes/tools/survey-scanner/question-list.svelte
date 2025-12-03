<script lang="ts">
	export let questions: any[] = [];
	export let onDelete: (idx: number) => void;
	export let onEdit: (idx: number) => void;
</script>

<div class="flex-1 overflow-y-auto rounded-xl bg-white p-6 shadow-lg border border-gray-200">
	{#if questions.length === 0}
		<div class="flex flex-col items-center py-12 text-gray-400">
			<p class="text-lg font-medium">No questions yet</p>
			<p class="text-sm opacity-75">Add a new question to get started</p>
		</div>
	{:else}
		<ul class="space-y-4">
			{#each questions as q, idx}
				<li class="group bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition">
					<div class="flex justify-between items-center">
						
						<div class="flex flex-col gap-1">
							<p class="font-semibold text-gray-800 text-lg">
								{q.text}
							</p>

							<p class="text-sm font-medium text-indigo-600">
								{q.type}
							</p>

							<p class="text-xs text-gray-500">
								Coordinates: 
								<span class="opacity-80">
									{q.coordinates.map((c: any) => `${c.x1},${c.y1},${c.x2},${c.y2}`).join(' | ')}
								</span>
							</p>
						</div>

						<div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
							
							<button
								class="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
								on:click={() => onEdit(idx)}
							>
								Edit
							</button>

							<button
								class="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
								on:click={() => onDelete(idx)}
							>
								Delete
							</button>
						</div>

					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
