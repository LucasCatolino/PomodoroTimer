<script lang="ts">
    let { data } = $props();
    let { quote } = data;
</script>

<div class="about min-h-screen flex flex-col justify-center items-center">
    <div class="p-6 rounded">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <div class="description mb-5">
            <p>Welcome to this SvelteKit web app project created for the "Modern Web/Frontend Framework" course. I am a passionate learner exploring the world of modern web development.</p>
            <p>The goal with this project is to demonstrate the understanding of SvelteKit, a powerful web framework for building efficient and reactive web applications. Through this project, I aim to showcase the features and capabilities of SvelteKit.</p>
            <p>Here are some key points about this project:</p>
            <ul class="list-disc pl-6 mb-4 list-tomatoes">
                <li>Utilizes SvelteKit 5 for frontend development.</li>
                <li>Shows routing and navigation in a SvelteKit app.</li>
                <li>Includes responsive design using Tailwind CSS.</li>
                <li>Includes two different themes.</li>
                <li>Uses client-side state management using $state .</li>
                <li>Includes a login page with a session cookie.</li>
            </ul>
            <p>I hope that this project serves as a valuable resource for anyone learning about SvelteKit and modern frontend frameworks.</p>
            <p class="mb-3">Thank you for visiting!</p>
            <p>PS: Almost forgot it! I also need to have a call to an external API, so enjoy a little bit of Ron's wisdom</p>
        </div>
        <div class="quote-container">
            <img src="/Ron.png" alt="Ron Swanson" class="rounded-full h-40 w-40 object-cover mb-4"/>
            <blockquote class="text-lg font-semibold mb-2">"{quote}"</blockquote>
            <p class="text-sm font-semibold">- Ron Swanson</p>
        </div>
    </div>
</div>

<style>
    .about {
        text-align: center;
        display: block;
        margin: 20px auto;
    }

    .quote-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
    }
</style>