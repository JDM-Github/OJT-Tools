<script lang="ts">
	import { onMount } from 'svelte';

	export let imageUrl: string = '';
	export let questions: any[] = [];

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let fileInput: HTMLInputElement;

	export function setImage(file: File) {
		imageUrl = URL.createObjectURL(file);
	}

	export function clear() {
		imageUrl = '';
		questions = [];
		if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (fileInput) fileInput.value = '';
	}

	export function drawCoordinates() {
		redraw();
	}

	function handleFileChange(event: any) {
		const file = event.target.files[0];
		if (!file) return;
		setImage(file);
	}

	function resizeCanvas() {
		if (!canvas) return;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		redraw();
	}

	function redraw() {
		if (!ctx || !imageUrl) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const img = document.getElementById('previewImage') as HTMLImageElement;
		if (!img || !img.naturalWidth) return;

		const scaleX = canvas.width / img.naturalWidth;
		const scaleY = canvas.height / img.naturalHeight;

		ctx.strokeStyle = 'red';
		ctx.lineWidth = 2;

		for (const q of questions) {
			for (const c of q.coordinates) {
				ctx.strokeRect(
					c.x1 * scaleX,
					c.y1 * scaleY,
					(c.x2 - c.x1) * scaleX,
					(c.y2 - c.y1) * scaleY
				);
			}
		}
	}

	$: if (canvas && !ctx) {
		ctx = canvas.getContext('2d');
		resizeCanvas();
		redraw();
	}

	$: if (questions) redraw();

	onMount(() => {
		window.addEventListener('resize', resizeCanvas);
	});
</script>

<div class="relative flex flex-col gap-4">
	<div class="z-10 space-y-4 rounded-xl bg-white p-6 shadow-md">
		<h2 class="text-xl font-semibold text-gray-800">Upload Image</h2>

		<div class="flex justify-between gap-3">
			<div class="w-full">
				<label
					for="fileInput"
					class="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-medium text-gray-700 shadow-sm transition hover:border-gray-400 hover:bg-gray-100"
				>
					{#if imageUrl}
						Change Image
					{:else}
						Select Image
					{/if}
				</label>

				<input
					id="fileInput"
					bind:this={fileInput}
					type="file"
					accept="image/*"
					on:change={handleFileChange}
					class="hidden"
				/>
			</div>

			{#if imageUrl}
				<button
					on:click={clear}
					class="w-56 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-red-600"
				>
					Remove Image
				</button>
			{/if}
		</div>
	</div>

	<div
		class="relative flex-1 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-md"
	>
		{#if imageUrl}
			<img
				id="previewImage"
				src={imageUrl}
				alt="Uploaded"
				class="h-full w-full object-contain"
				on:load={resizeCanvas}
			/>

			<canvas bind:this={canvas} class="pointer-events-none absolute top-0 left-0 h-full w-full">
        
			</canvas>
		{:else}
			<div class="flex min-h-[64] w-full items-center justify-center">
				<span class="text-center text-gray-400">Upload an image to preview here</span>
			</div>
		{/if}
	</div>
</div>
