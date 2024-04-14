<script lang="ts">
    let { data } = $props();
    let { guides } = data;
</script>

<div class="guides">
    <ul>
        {#if guides && guides.length > 0}
            {#each guides as guide}
                <li>
                    <a sapper:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
                </li>
            {/each}
        {:else}
            <li>No guides available</li>
        {/if}
    </ul>
    <a href="/">Home</a>
</div>

<style>
    .guides {
        margin-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>