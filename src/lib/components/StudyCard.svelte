<!-- reference: https://github.com/codyseibert/youtube/tree/master/svelte-stop-watch-->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    const dispatch = createEventDispatcher();
    const URL: string = 'https://www.soundjay.com/misc/sounds/bell-ringing-04.mp3';

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
    let audio: HTMLAudioElement;

    export let title: string;
    export let cardTime: number;
    export let isActive: boolean;
    export let id: number;

    const pad2 = (number: number) => `00${number}`.slice(-2);
  
    $: minutes = pad2((cardTime - 1) - Math.floor(elaspedTime / 1000 / 60) % 60);
    $: seconds = pad2(3 - Math.floor(elaspedTime / 1000) % 6);
    $: formattedRemainingTime = `${minutes}:${seconds}`;

    const start = () => {
        startTime = Date.now();
        cardState = STATE.RUNNING;
        interval = setInterval(() => {
          if (cardState === STATE.RUNNING) {
            const endTime = Date.now();
            elaspedTime = endTime - startTime + oldElapsedTime;
          }
          if(formattedRemainingTime === "00:00" && cardState === STATE.RUNNING) {
            clearInterval(interval);
            cardState = STATE.PAUSED;
            audio.play();
            dispatch('cardDone'); // Emit event when timer reaches 0
          }
        });
    };
  
    const pause = () => {
      cardState = STATE.PAUSED;
      oldElapsedTime = elaspedTime;
    };

    onMount(() => {
      // Check if running in the browser environment
      if (typeof window !== 'undefined') {
        audio = new Audio(URL); // Path to your audio file
      }
    });

    // Function to handle changes in isActive prop
    $: {
      if (isActive) {
        start();
      } else {
        pause();
      }
    }

</script>

<div class="glass col-span-1 px-1">
    <h1 class="mb-2 text-2xl text-yellow-100 border-b border-white">
      {title}
    </h1>

    <p class="mb-2 text-xl text-white">Remaining Time: {formattedRemainingTime}</p>
</div>

<style>
    .glass {
      background: rgba(255, 235, 233, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
</style>