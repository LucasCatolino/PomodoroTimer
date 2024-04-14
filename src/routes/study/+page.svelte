<script>
    import StudyCards from "$lib/components/StudyCards.svelte";
    const STUDY = "Study time";
    const REST = "Rest time";
</script>

<div
    class="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-green-400"
  >
  <StudyCards title={STUDY} cardTime={25}/>
  <StudyCards title={REST} cardTime={5}/>
  <StudyCards title={STUDY} cardTime={25}/>
  <StudyCards title={REST} cardTime={5}/>
  <StudyCards title={STUDY} cardTime={25}/>
  <StudyCards title={REST} cardTime={5}/>
</div>
  
<style>
    .glass {
      background: rgba(255, 235, 233, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
</style>