<script>
    import PomodoroBlocks from "$lib/components/PomodoroBlocks.svelte";
</script>

<div class="flex flex-col items-center justify-center h-screen ">

  <PomodoroBlocks/>

</div>
  
<style>
    .glass {
      background: rgba(255, 235, 233, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
</style>