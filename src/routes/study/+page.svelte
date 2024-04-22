<script>
  import PomodoroBlocks from "$lib/components/PomodoroBlocks.svelte";
  import { writable } from 'svelte/store';

  let { data } = $props();
  const cards = writable(data);
</script>

<div class="study min-h-28 h-fit flex flex-col items-center justify-center h-screen mt-5">

  <PomodoroBlocks data={$cards}/>

</div>
  
<style>
  .glass {
    background: rgba(255, 235, 233, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    border-radius: 10px;
  }

  .study {
    text-align: center;
  }
</style>