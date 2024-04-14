<script>
    let title = 'Page title!';

    const updateTitle = () => {
        title = 'New title!';
    }
</script>

<div class="index">
    <h1>{title}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum risus lectus. Curabitur congue dolor nec augue gravida sodales non a metus. Donec ac sapien dui. Mauris volutpat nunc a nulla vehicula, sed accumsan justo imperdiet. Fusce vestibulum et nibh nec pharetra. In dictum odio quis mollis condimentum. Cras purus nisl, imperdiet quis porta nec, consequat id ligula. Phasellus risus odio, molestie vitae varius sit amet, molestie a odio.</p>
    
    <button on:click={updateTitle}>Update title</button>
    <input type="text" bind:value={title}/>

    <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/guides">Guides</a></li>
    </ul>
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