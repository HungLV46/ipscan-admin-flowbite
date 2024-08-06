

<script lang="ts">
  import { Input, Label, Helper } from 'flowbite-svelte';

  type InputState = 'default' | 'disabled' | 'invalid' | 'valid';
  type Color = undefined | 'red' | 'green';

  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  let iclass: string | undefined = undefined;
  export { iclass as class }; // we can't just export avariable named 'class' directly because 'class' is a TS reserved keyword 
  export let value: string | undefined = undefined;
  export let validate: undefined | ((value: string | undefined) => void) = undefined;
  export let state: InputState = 'default';
  export let helperText: string | undefined = undefined;

  let stateToColor = {
    default: undefined,
    disabled: undefined,
    invalid: 'red',
    valid: 'green',
  };
  $: color = stateToColor[state] as Color;

  let error: string;
  // change input state based on validate function
  function _validate() {
    if(!validate) return;

    try {
      validate(value);
      state = 'valid';
    } catch (error: any) {
      state = 'invalid';
      error = error.message;
    }
  }
</script>


<div class="mb-2 mt-3">
{#if (name)}
  <Label for={id} {color} class="mb-1 ml-3">{name}</Label>
{/if}
<Input class={iclass} {color} {placeholder} on:change={_validate} disabled={state === 'disabled'} bind:value/>
{#if (state == 'invalid')}
  <Helper class="mt-1" color="red">
    {@html error}
  </Helper>
{:else if (helperText)}
  <Helper class="mt-1 ml-3" color="gray">
    {@html helperText}
  </Helper>
{/if}
</div>