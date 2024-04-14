<!-- reference: https://github.com/codyseibert/youtube/tree/master/svelte-stop-watch-->
<script lang="ts">

    enum STATE {
      NEW,
      RUNNING,
      PAUSED,
    }

    let cardState: STATE = STATE.NEW;
    let startTime: number = 0;
    let elaspedTime: number = 0;
    let oldElapsedTime: number = 0;
    let interval: number;

    export let title: string;
    export let cardTime: number;
  
    const pad2 = (number: number) => `00${number}`.slice(-2);
  
    $: minutes = pad2((cardTime - 1) - Math.floor(elaspedTime / 1000 / 60) % 60);
    $: seconds = pad2(59 - Math.floor(elaspedTime / 1000) % 60);
    $: formattedRemainingTime = `${minutes}:${seconds}`;

    const start = () => {
        startTime = Date.now();
        cardState = STATE.RUNNING;
        interval = setInterval(() => {
          if (cardState === STATE.RUNNING) {
            const endTime = Date.now();
            elaspedTime = endTime - startTime + oldElapsedTime;
          }
        });
    };
  
    const reset = () => {
      elaspedTime = 0;
      cardState = STATE.NEW;
      clearInterval(interval);
    };
  
    const pause = () => {
      cardState = STATE.PAUSED;
      oldElapsedTime = elaspedTime;
    };
  
    const resume = () => {
      startTime = Date.now();
      cardState = STATE.RUNNING;
    };
    
</script>

<!--div class="glass w-1/3 h-36 p-4"-->
<div class="glass col-span-1">
    <h1 class="mb-2 text-2xl text-yellow-100 border-b border-white">
    {title}
    </h1>

    <p class="mb-2 text-xl text-white">Remaining Time: {formattedRemainingTime}</p>

    <div class="text-right">
    {#if cardState === STATE.NEW}
        <button
        on:click={start}
        class="mr-2 text-xl px-2 border-green-200 border rounded text-green-200"
        >Start</button
        >
    {/if}
    {#if cardState === STATE.RUNNING || cardState === STATE.PAUSED}
        <button
        on:click={reset}
        class="mr-2 text-xl px-2 border-red-500 border rounded text-red-500"
        >Reset</button
        >
    {/if}
    {#if cardState === STATE.RUNNING}
        <button
        on:click={pause}
        class="mr-2 text-xl px-2 border-white border rounded text-white"
        >Pause</button
        >
    {/if}
    {#if cardState === STATE.PAUSED}
        <button
        on:click={resume}
        class="text-xl px-2 border-black border rounded text-black"
        >Resume</button
        >
    {/if}
    </div>
</div>

<style>
    .glass {
      background: rgba(255, 235, 233, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
</style>