<script>
	import Swiper from 'swiper/bundle';
	import 'swiper/css/bundle';
	import { onMount } from 'svelte';

	let swiperInstance;
	const tools = [
		{
			title: 'Survey Scanner',
			desc: 'Scan and automatically set the excel blah blah.',
			img: 'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Survey Scanner',
			link: '/tools/survey-scanner'
		},
		{
			title: 'Report Formatter',
			desc: 'Format reports using preset templates.',
			img: 'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Report Formatter',
			link: '/tools/report-format'
		},
		{
			title: 'Schedule Planner',
			desc: 'Organize tasks efficiently.',
			img: 'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Schedule Planner',
			link: '/tools/schedule'
		},
		{
			title: 'File Converter',
			desc: 'Convert files effortlessly.',
			img: 'https://placehold.co/600x400/EEE/31343C?font=montserrat&text=File Formatter',
			link: '/tools/converter'
		}
	];

	onMount(() => {
		swiperInstance = new Swiper('.tool-swiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			grabCursor: true,
			breakpoints: {
				640: { slidesPerView: 5 },
				1024: { slidesPerView: 4 }
			}
		});
	});
</script>

<main class="w-full bg-gray-200 p-6">

	<section class="mx-auto max-w-7xl">
		<div class="mb-8 text-center bg-white rounded-2xl">
			<h1 class="text-4xl text-gray-800 mb-4 p-8">
				ORGANIZATION TOOLS HUB
			</h1>
		</div>

		<div class="tool-swiper swiper-container pb-10 ">
			<div class="swiper-wrapper">
				{#each tools as t}
					<div class="swiper-slide">
						<div class="w-full max-w-[330px] mx-auto overflow-hidden">
							<img src={t.img} alt="" class="h-48 w-full object-cover" />
							<div class="p-2 h-48">
								<h2 class="text-2xl mb-1 uppercase">{t.title}</h2>
								<p class="text-gray-400 text-xl mb-4">{t.desc}</p>
							</div>
							<a href={t.link} class="inline-block w-full text-center bg-blue-600 px-5 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition m-3">USE TOOL</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
