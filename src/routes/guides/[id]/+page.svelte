<script lang="ts">
    let { data } = $props();
    let { guide } = data;
</script>

<div class="guide">

    {#if guide && 'title' && 'body' in guide}
        <h2>{ guide.title }</h2>
        <p>{ guide.body }</p>
    {:else}
        <li>No guides available</li>
    {/if}
    <a href="/guides">Back</a>
</div>

<style>
    .guide {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>