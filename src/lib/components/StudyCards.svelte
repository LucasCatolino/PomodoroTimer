<!-- reference: https://github.com/codyseibert/youtube/tree/master/svelte-stop-watch-->
<script lang="ts">
    import { page } from "$app/stores";

    enum STATE {
      NEW,
      RUNNING,
      PAUSED,
    }

    const STUDY = "Study time";
    const REST = "Rest time";

    const STUDY_TIME: number = 25;
    const REST_TIME: number = 5;

    type CardItem = { id: string; title: string; time: number; done?: boolean }
/*
    let newTodoText = $state("")
    let placeholder = $state($page.data.placeholder)

    let cards = $state([
      {
        id: "1",
        title: STUDY,
        time: STUDY_TIME,
        done: false,
      },
      {
        id: "2",
        title: REST,
        time: REST_TIME,
        done: false,
      }
    ])
*/
  
    let state: STATE = STATE.NEW;
    let startTime: number = 0;
    let elaspedTime: number = 0;
    let oldElapsedTime: number = 0;
    let interval: number;

    export let title: String;
    export let cardTime: number;
  
    const pad2 = (number: number) => `00${number}`.slice(-2);
  
    $: minutes = pad2((cardTime-1) - Math.floor(elaspedTime / 1000 / 60) % 60);
    $: seconds = pad2(59 - Math.floor(elaspedTime / 1000) % 60);
    $: formattedElaspedTime = `${minutes}:${seconds}`;

    const start = () => {
        startTime = Date.now();
        state = STATE.RUNNING;
        interval = setInterval(() => {
          if (state === STATE.RUNNING) {
            const endTime = Date.now();
            elaspedTime = endTime - startTime + oldElapsedTime;
          }
        });
    };
  
    const reset = () => {
      elaspedTime = 0;
      state = STATE.NEW;
      clearInterval(interval);
    };
  
    const pause = () => {
      state = STATE.PAUSED;
      oldElapsedTime = elaspedTime;
    };
  
    const resume = () => {
      startTime = Date.now();
      state = STATE.RUNNING;
    };
</script>

<div class="glass w-1/3 h-36 p-4">
    <h1 class="mb-2 text-2xl text-yellow-100 border-b border-white">
    {title}
    </h1>

    <p class="mb-2 text-xl text-white">Elapsed Time: {formattedElaspedTime}</p>

    <div class="text-right">
    {#if state === STATE.NEW}
        <button
        on:click={start}
        class="mr-2 text-xl px-2 border-green-200 border rounded text-green-200"
        >Start</button
        >
    {/if}
    {#if state === STATE.RUNNING || state === STATE.PAUSED}
        <button
        on:click={reset}
        class="mr-2 text-xl px-2 border-red-500 border rounded text-red-500"
        >Reset</button
        >
    {/if}
    {#if state === STATE.RUNNING}
        <button
        on:click={pause}
        class="mr-2 text-xl px-2 border-white border rounded text-white"
        >Pause</button
        >
    {/if}
    {#if state === STATE.PAUSED}
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