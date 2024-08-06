<script lang="ts">
  import { Pagination } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte'; 
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import _ from 'underscore';
  import { range } from 'underscore';

  export let paging: { total: number, limit: number, offset: number };
  export let maxDisplayPages: number = 10;

  function generatePages(_paging: { total: number, limit: number, offset: number } = paging) {
    let currentPage = Math.floor(_paging.offset / _paging.limit) + 1;
    let startPage = currentPage - (currentPage % maxDisplayPages || maxDisplayPages) + 1;
    let maxPosibblePages = paging.total === 0 ? 0 : Math.ceil(paging.total / paging.limit);
    let endPage = Math.min(startPage + maxDisplayPages, maxPosibblePages + 1); // exclusive end

    return range(startPage, endPage).map((pageNumber: number) => ({
      name: pageNumber.toString(),
      active: pageNumber === currentPage
    }));
  }
  $: pages = generatePages(paging);

  const dispactch = createEventDispatcher();
  const dispatchPageUpdateEvent = () => dispactch('pageUpdate', _.omit(paging, 'total'));

  $: prevPossible = paging.offset - paging.limit >= 0;
  const previous = async () => {
    if(prevPossible) {
      paging.offset -= paging.limit;
      pages = generatePages();
      dispatchPageUpdateEvent();
    }
  };

  $: nextPossible = paging.offset + paging.limit < paging.total;
  const next = async () => {
    if(nextPossible) {
      paging.offset += paging.limit;
      pages = generatePages();
      dispatchPageUpdateEvent();
    }
  };

  const click = async (event: MouseEvent) => {
    paging.offset = (parseInt((event.target as HTMLElement).innerText) - 1) * paging.limit;
    pages = generatePages();
    dispatchPageUpdateEvent();
  };
</script>

<Pagination {pages} large on:previous={previous} on:next={next} on:click={click} icon>
  <svelte:fragment slot="prev">
    {#if (prevPossible)}
      <span class="sr-only">Previous</span>
      <ChevronLeftOutline class="w-6 h-6" />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="next">
    {#if (nextPossible)}
      <span class="sr-only">Next</span>
      <ChevronRightOutline class="w-6 h-6" />
    {/if}
  </svelte:fragment>
</Pagination>
