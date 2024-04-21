<script lang="ts">
    import { fly } from "svelte/transition"
    import StudyCard from "./StudyCard.svelte";
    import type { Cards } from "../../routes/study/+page.server";
    import { onMount } from 'svelte';

    const STUDY = "Study time";
    const REST = "Rest time";
  
    type CardItem = { id: number; title: string; studyTime: number; restTime: number; done?: boolean }
   
    let { data } = $props();
    let { cards } = $state(data as Cards[]); //recieves the cards from the parent
  
    let newStudyCardTime = $state(0);
    let newRestCardTime = $state(0);
    let currentId = $state(1);
    let lastId = $state(0);
    let start = $state(false);

    onMount(() => {
        lastId = cards.length;
    });


    let timerType = $state("study");

    function submit() {
      if (!newStudyCardTime && !newRestCardTime) return
      if (newStudyCardTime == 0 || newRestCardTime == 0) return
      cards.push({
          id: createId(), studyTime: newStudyCardTime, restTime: newRestCardTime,
          title: "Pomodoro block",
          done: false
      })
      newStudyCardTime = 0;
      newRestCardTime = 0;
    }

    function clear() {
      cards = cards.filter((card: Cards) => !card.done)
    }
    
    function createId() {
      lastId ++;
      return lastId;
    }

    function changeTimerType() {
      if (timerType === "rest") {
        cards[currentId - 1].done = true;
        currentId = currentId + 1;
      }
      timerType = timerType === "study" ? "rest" : "study";
    }

    function startTimer() {
      start = true;
      console.log("Start timer");
    }

    function stopTimer() {
      start = false;
      console.log("Stop timer");
    }

    function eraseCard(card: CardItem) {
      card.done = !card.done
    }

  </script>

  <div class="controls">
    {@render Input()}
    <button on:click={submit}>Add new block</button>
    <button class="clear" on:click={clear}>
      {@render CleanupIcon()}
    </button>
    {@render resumeStudyButton()}
  </div>

  <div class="card-list">
    <ul>
      {#each cards as card (card.id)}
      <div out:fly={{ x: 200, duration: 1000 }} in:fly={{ y: 1000, duration: 1000 }}>
        {@render CardItem(card) }
      </div>
      {/each}
    </ul>
  </div>
  
  {#snippet CardItem(card)}
  <div class:done={card.done}>
    <li>
      <button on:click={() => eraseCard(card)}>
        {card.title} {card.id} - {card.done ? "Done" : "Not done"}
      </button>
    </li>
    <div class="grid grid-cols-2 gap-4 py-2">
      <StudyCard title={STUDY} cardTime={card.studyTime} isActive={timerType === "study" && start && card.id === currentId}
        on:cardDone={changeTimerType} id={card.id}/>
      <StudyCard title={REST} cardTime={card.restTime} isActive={timerType === "rest" && start && card.id === currentId}
        on:cardDone={changeTimerType} id={card.id}/>
    </div>
  </div>
  {/snippet}
  
  {#snippet Input()}
    <input
        type="numeric"
        value={newStudyCardTime || ""}
        placeholder= "Study time"
        on:input={(e) => {
            if (e.target) {
                newStudyCardTime = parseInt((e.target as HTMLInputElement).value);
            }
        }}
        on:keydown={(e) => e.key === "Enter" && submit()}
    />
    <input
        type="numeric"
        value={newRestCardTime || ""}
        placeholder= "Rest time"
        on:input={(e) => {
            if (e.target) {
                newRestCardTime = parseInt((e.target as HTMLInputElement).value);
            }
        }}
        on:keydown={(e) => e.key === "Enter" && submit()}
    />
  {/snippet}
  
  {#snippet CleanupIcon()}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      ><path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 6h12M6 12h12M4 18h12"
      />
    </svg>
  {/snippet}

  {#snippet resumeStudyButton()}
    {#if start}
      <button
        class="bg-orange-600 text-xl font-bold rounded-lg px-5 py-2 me-2 mb-2"
        on:click={stopTimer}
      >Pause</button>
    {:else}
      <button
        class="bg-green-600 text-xl font-bold rounded-lg px-5 py-2 me-2 mb-2"
        on:click={startTimer}
      >Start</button>
    {/if}
  {/snippet}
  
  <style lang="postcss">
    .card-list {
      @apply h-full w-full max-w-screen-lg;
      @apply flex flex-col justify-between;
    }
  
    ul {
      @apply p-4;
      @apply flex flex-col gap-2 items-stretch;
    }
  
    li > button {
      @apply w-full p-2;
      @apply border border-foreground border-opacity-50 border-solid rounded-md;
      @apply text-start;
    }

    .done {
      @apply opacity-25;
    }
  
    .controls {
      @apply flex flex-row items-center gap-2 p-4;
    }
  
    input {
      @apply flex-1 px-4 py-2;
      @apply bg-background;
      @apply border border-solid border-primary rounded-md;
    }
  
    button.clear {
      @apply aspect-square rounded-full p-1;
    }
  
    button,
    input {
      @apply hover:bg-foreground hover:bg-opacity-10;
      @apply transition-all duration-300;
    }
  </style>
  