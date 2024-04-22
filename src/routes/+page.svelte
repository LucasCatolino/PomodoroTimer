<script>
  import { goto } from '$app/navigation';
</script>

<div class="index min-h-screen flex flex-col justify-center items-center">
    <div class="p-6 rounded">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Pomodoro Technique</h1>
        <p class="mb-4">The Pomodoro Technique is named after the tomato-shaped kitchen timer that its creator, Francesco Cirillo, used during his university years. "Pomodoro" is the Italian word for "tomato."</p>
        <p class="mb-4">Francesco Cirillo developed this time management method in the late 1980s when he was a university student. He used a mechanical kitchen timer shaped like a tomato to break his work into focused intervals. These intervals, known as "Pomodoros," were typically 25 minutes long. After each Pomodoro, he would take a short break. This technique helped him improve his productivity and manage distractions effectively.</p>
        <p class="mb-4">The name "Pomodoro Technique" stuck, and it has since become a popular productivity method used by many people around the world. The idea of using a tomato-shaped timer is symbolic of the simplicity and effectiveness of the technique, as well as its roots in Cirillo's personal experience.</p>
        
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">How It Works</h2>
        <ul class="list-disc pl-6 mb-4 list-tomatoes">
            <li>Choose a task you want to work on.</li>
            <li>Prepare the environment with everything you need.</li>
            <li>Set a timer for 25 minutes (a Pomodoro).</li>
            <li>Work on the task without distractions until the timer rings.</li>
            <li>Take a short break (about 5 minutes).</li>
            <li>Repeat the process - work for 25 minutes, then take a short break.</li>
            <li>After completing four Pomodoros, take a longer break (about 15-30 minutes).</li>
        </ul>
        <div class="mb-5">
            <button class="bg-green-600 text-xl font-bold rounded-lg px-5 py-2 me-2" on:click={() => goto('/study')}>Let's go!</button>
        </div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Benefits</h2>
        <ul class="list-disc pl-6 list-tomatoes">
            <li>Improves focus and concentration.</li>
            <li>Helps in managing distractions and avoiding burnout.</li>
            <li>Encourages a sense of urgency to complete tasks.</li>
            <li>Breaks down large tasks into manageable chunks.</li>
        </ul>
    </div>
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>