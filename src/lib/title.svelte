<script>
    export let title = "Title";
</script>

<div class="flex items-center title">
    <img src="%sveltekit.assets%/favicon.png" alt="logo" class="h-8 w-8"/>
    <h1>{title}</h1>
</div>

<!--style>
    .title {
        display: flex;
    }

    .title img {
        display: inline-block;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }

    .title h1 {
        margin-left: 10px;
    }
</style-->