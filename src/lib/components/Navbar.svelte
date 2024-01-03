<script lang="ts">
    export let status = false;
    export let isNewUser = true;
    export let nickname = '';
</script>

<nav class="flex justify-around items-center p-4 shadow-md text-white">
    <a href="/">Home</a>

    {#if status === true && isNewUser === false}
        <a href="/about">{nickname}</a>
    {:else}
        <a href="/login">Log in</a>
    {/if}
</nav>

<style lang="postcss">
    nav {
        background-color: var(--nav);
    }
</style>
