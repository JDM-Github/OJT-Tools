<script lang="ts">
	import { writable } from 'svelte/store';
	import ImageUploader from './image-uploader.svelte';
	import QuestionForm from './question-form.svelte';
	import QuestionList from './question-list.svelte';

	export let showModal: boolean;
	export let openModal: () => void;
	export let closeModal: () => void;

	let imageUrl = '';
	let questions: any = [];

	let mode = writable('add');
	let editIndex: number | null = null;
	let questionToEdit: any = null;
	let imageUploader;

	function addQuestion(q: any) {
		questions = [...questions, q];
		closeModal();
	}

	function deleteQuestion(idx: number) {
		questions = questions.filter((_: any, i: number) => i !== idx);
	}
	
	

	function openEdit(idx: number) {
		editIndex = idx;
		$mode = 'edit';
		openModal();
		questionToEdit = questions[idx];
	}

	function updateQuestion(updated: any) {
		if (editIndex !== null) {
			questions[editIndex] = updated;
			questions = [...questions];
		}
		$mode = 'add';
		closeModal();
		editIndex = null;
	}
</script>

<div class="flex min-h-[500px] flex-col gap-6 lg:flex-row">
	<div class="flex w-full flex-col gap-4 lg:w-1/2">
		<ImageUploader
			bind:this={imageUploader}
			{questions}
			{imageUrl}
		/>
	</div>

	<div class="flex w-full flex-col gap-4 lg:w-1/2">
		<QuestionList {questions} onDelete={deleteQuestion} onEdit={openEdit} />
	</div>

	{#if showModal}
		<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
			<div class="relative w-[500px] rounded-xl">
				<QuestionForm
					onAdd={addQuestion}
					mode={$mode}
					onClose={() => {
						closeModal();
						$mode = 'add';
					}}
					onUpdate={updateQuestion}
					{questionToEdit}
				/>
			</div>
		</div>
	{/if}
</div>
