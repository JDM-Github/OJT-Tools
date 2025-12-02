<script>
	import { page } from '$app/state';
</script>

<nav
	class="sticky z-50 flex max-h-[70px] min-h-[70px] w-full items-center justify-center bg-white p-4"
>
	<div class="flex w-9/13 justify-between">
		<div class="flex items-center space-x-4">
			<img src="/CCC.png" class="ml-1 h-14 w-auto" alt="CCC Logo" />
		</div>

		<ul class="text-md hidden items-center space-x-6 md:flex">
			{#each [{ name: 'HOME', path: '/' }, { name: 'TOOLS', path: '/tools' }] as item}
				<li>
					<a
						href={item.path}
						class="navlink {page.route.id === item.path
							? 'active text-blue-500'
							: 'text-gray-400 hover:text-blue-500'}"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
