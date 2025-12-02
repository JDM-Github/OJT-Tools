<script lang="ts">
	let activeModal: 'privacy' | 'terms' | 'contact' | null = null;

	function openModal(type: 'privacy' | 'terms' | 'contact') {
		activeModal = type;
	}

	function closeModal() {
		activeModal = null;
	}
</script>

<footer class="bg-gray-900 py-6 text-gray-400 min-h-[50px] max-h-[50px]">
	<div class="container mx-auto flex flex-col items-center justify-between text-sm md:flex-row">
		<p>&copy; {new Date().getFullYear()} AGRIBOT. All Rights Reserved.</p>
		<div class="flex gap-4">
			<button on:click={() => openModal('privacy')} class="hover:text-green-400">Privacy Policy</button>
			<button on:click={() => openModal('terms')} class="hover:text-green-400">Terms of Service</button>
			<button on:click={() => openModal('contact')} class="hover:text-green-400">Contact</button>
		</div>
	</div>
</footer>

<div class="text-gray-600 dark:text-gray-300 space-y-4 max-h-[60vh] overflow-y-auto">
	{#if activeModal === 'privacy'}
		<div class="space-y-2">
			<p>
				Your privacy is important to us. At <strong>AGRIBOT</strong>, we are committed to protecting your personal information 
				and ensuring transparency in how we collect, use, and safeguard your data.
			</p>
			<ul class="list-disc pl-5 space-y-1">
				<li>We only collect the information necessary to provide and improve our services.</li>
				<li>Your data will never be sold or shared with third parties without your consent.</li>
				<li>We use secure methods to protect your information from unauthorized access.</li>
				<li>You may request deletion of your account and data at any time.</li>
			</ul>
			<p>
				For any privacy concerns, please contact us at 
				<a href="mailto:agribothydroteam@gmail.com" class="text-green-500 hover:underline">
					agribothydroteam@gmail.com
				</a>.
			</p>
		</div>
	{/if}

	{#if activeModal === 'terms'}
		<div class="space-y-2">
			<p>
				By using <strong>AGRIBOT</strong>, you agree to the following terms of service:
			</p>
			<ul class="list-disc pl-5 space-y-1">
				<li>You may use our platform only for lawful purposes related to greenhouse monitoring and management.</li>
				<li>We provide the service "as is" without guarantees of accuracy, reliability, or uninterrupted availability.</li>
				<li>Users are responsible for the security of their accounts and activities conducted under their credentials.</li>
				<li>Violation of these terms may result in suspension or termination of access.</li>
			</ul>
			<p class="italic text-sm">
				⚖️ Full license details can be provided upon request or included here.
			</p>
		</div>
	{/if}

	{#if activeModal === 'contact'}
		<div class="space-y-3">
			<p class="mb-2">We’d love to hear from you! Reach out to our team:</p>
			<ul class="space-y-1">
				<li><strong>John Dave Pega</strong> – Lead Developer</li>
				<li><strong>Baby Joy Maquilla</strong> – Research & Data Analyst</li>
				<li><strong>Twinnie Hipolito</strong> – Hardware & IoT Specialist</li>
				<li><strong>Lowella Golez</strong> – Project Coordinator</li>
			</ul>
			<p>
				📧 Email us at 
				<a href="mailto:agribothydroteam@gmail.com" class="text-green-500 hover:underline">
					agribothydroteam@gmail.com
				</a>
			</p>
		</div>
	{/if}
</div>
