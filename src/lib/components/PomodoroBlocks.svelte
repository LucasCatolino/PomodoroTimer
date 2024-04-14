<script lang="ts">
    import { fly } from "svelte/transition"
    import StudyCard from "./StudyCard.svelte";

    const STUDY = "Study time";
    const REST = "Rest time";

    const STUDY_TIME: number = 25;
    const REST_TIME: number = 5;
  
    type CardItem = { id: string; title: string; studyTime: number; restTime: number; done?: boolean }
  
    let newStudyCardTime = $state(0);
    let newRestCardTime = $state(0);

    let cards = $state([
      {
        id: "1",
        title: "Pomodoro block",
        studyTime: STUDY_TIME,
        restTime: REST_TIME,
        done: false,
      },
      {
        id: "2",
        title: "Pomodoro block",
        studyTime: STUDY_TIME,
        restTime: REST_TIME,
        done: false,
      },
    ])

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
  
    function onClick(card: CardItem) {
        card.done = !card.done
    }
  
    function clear() {
      cards = cards.filter((card) => !card.done)
    }
    
    function createId() {
      return Math.random().toString(36).substr(2, 9)
    }
  </script>
  
  <div class="card-list">
    <ul>
      {#each cards as card (card.id)}
        {@render CardItem(card)}
      {/each}
    </ul>
  
    <div class="controls">
      {@render Input()}
      <button class="clear" on:click={clear}>
        {@render CleanupIcon()}
      </button>
    </div>
  </div>
  
  {#snippet CardItem(card)}
    <li out:fly={{ x: 200, duration: 1000 }} in:fly={{ y: 1000, duration: 1000 }}>
      <button class:done={card.done} on:click={() => onClick(card)}>
        {card.title} - {card.studyTime} - {card.restTime} - {card.done}
      </button>
    </li>
    <div class="grid grid-cols-2 gap-4">
      <StudyCard title={STUDY} cardTime={card.studyTime}/>
      <StudyCard title={REST} cardTime={card.restTime}/>
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
  
    li > button.done {
      @apply line-through opacity-25;
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
  