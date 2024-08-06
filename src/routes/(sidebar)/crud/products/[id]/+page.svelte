<script lang="ts">
	import {
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Card,
		Heading,
	} from 'flowbite-svelte';
	import { Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { FilterSolid } from 'flowbite-svelte-icons';
	import { PlusOutline } from 'flowbite-svelte-icons';
	import Input from '$lib/ui-components/forms/input.svelte';
	import _ from 'underscore';
	import MetaTag from '../../../../utils/MetaTag.svelte';
	import type { ProductGetResponseData } from '$lib/apis/product/get-product';
	import Dropzone from '$lib/ui-components/forms/dropzone.svelte';

	export let data: ProductGetResponseData;

	let current_product: any = data;
	const path: string = '/crud/products';
  const description: string = 'CRUD products examaple - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - CRUD Products';
  const subtitle: string = 'CRUD Products';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home href="/crud/products">Products</BreadcrumbItem>
			<BreadcrumbItem>Edit</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			Edit product
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500  dark:text-gray-400">
			<Input placeholder="Search for products" class="me-4 w-80 border xl:w-96" />
			<!-- Search section -->
			<div class="border-l border-gray-100 pl-2 dark:border-gray-700">
				<ToolbarButton
					color="dark"
					class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
				>
					<FilterSolid size="lg" />
				</ToolbarButton>
			</div>
			<div slot="end" class="flex items-center space-x-2">
				<Button
					size="sm"
					class="gap-2 whitespace-nowrap px-3 mr-10"
				>
					<PlusOutline size="sm" />Add product
				</Button>
			</div>
		</Toolbar>

		<!-- Product data section -->
		<form>
			<Card size="xl" class="shadow-sm max-w-none">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">On-chain Info</h3>
				</div>
				<div class="items-center gap-3 space-y-4 sm:flex sm:space-y-0">
					<Input name="Chain" placeholder="e.g. Ethereum" class="me-4 w-22 border"/>
					<Input name="Contract address" placeholder="e.g. 0x00000000..." class="me-4 w-96 border"/>
					<Button size="sm" class="gap-2 whitespace-nowrap px-3 mr-10">
						<PlusOutline size="sm" />Add
					</Button>
				</div>
			</Card>
			<Card size="xl" class="shadow-sm max-w-none mt-2">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Off-chain info</h3>
				</div>
				<Input name="About" placeholder="Product description" class="me-4 w-22 border w-full"/>
				<Input name="Chain" placeholder="e.g. Ethereum" class="me-4 w-22 border"/>
				<Input name="Creator" placeholder="e.g. Robert Perez" class="me-4 w-22 border"/>
				<Dropzone name="Overview pictures/media"/>
				<Input name="CTA link" placeholder="Call to action link" class="me-4 w-22 border"/>
				<div class="items-center gap-3 space-y-4 sm:flex sm:space-y-0">
					<Input name="Social" placeholder="e.g. Discord" class="me-4 w-22 border xl:w-25"/>
					<Input name="Url" placeholder="e.g. https://www.example.com" class="me-4 w-96 border xl:w-96"/>
					<Button size="sm" class="gap-2 whitespace-nowrap px-3 mr-10">
						<PlusOutline size="sm" />Add
					</Button>
				</div>
			</Card>
			<Card size="xl" class="shadow-sm max-w-none mt-2">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Type-Specific</h3>
				</div>
				<Input name="Status" placeholder="e.g. started" class="me-4 w- border"/>
				<Input name="Player info" placeholder="e.g. Multi" class="me-4 w-half border"/>
				<Input name="Genre" placeholder="e.g. action" class="me-4 w-half border"/>
				<Input name="Game mode" placeholder="e.g. PvE" class="me-4 w-half border"/>
			</Card>
		</form>
	</div>
</main>
