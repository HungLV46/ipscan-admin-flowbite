<script>
  import { Button, Dropdown, DropdownItem, Checkbox, Search, Label } from 'flowbite-svelte';
  import { ChevronDownOutline, UserRemoveSolid } from 'flowbite-svelte-icons';

  export let id;
  export let name;
  
  let searchTerm = ''
  const items = [
    { name: 'Robert Gouth', checked: false },
    { name: 'Jese Leos', checked: false },
    { name: 'Bonnie Green', checked: true },
  ]
  $: filteredItems = items.filter((items) => items.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1);
</script>

<div class="mb-2 mt-3">
  {#if (name)}
    <Label for={id} class="mb-1 ml-3">{name}</Label>
  {/if}
<Button>Dropdown search<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
  <div slot="header" class="p-3">
    <Search size="md" bind:value={searchTerm}/>
  </div>
  {#each filteredItems as person (person.name)}
    <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
    </li>
  {/each}
  <a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
    <UserRemoveSolid class="w-4 h-4 me-2 text-primary-700 dark:text-primary-700" />Delete user
  </a>
</Dropdown>
</div>