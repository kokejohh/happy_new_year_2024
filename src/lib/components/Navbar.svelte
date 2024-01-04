<script lang="ts">
    export let status: boolean = false;
    export let isNewUser: boolean = true;
    export let nickname: string = "";

    import { createAvatar } from "@dicebear/core";
    import { lorelei } from "@dicebear/collection";

    const avatar = createAvatar(lorelei, {
        seed: nickname.trim(),
    });
</script>

<nav class="flex justify-around items-center py-2 shadow-md text-white h-12">
    <a href="/">Home</a>
    {#if status === true && isNewUser === false}
        <a href="/about" class="flex items-center space-x-2">
            <div
                class="inline-block shadow-md bg-[var(--purple-darklest)] w-10 aspect-square border rounded-full"
            >
                {@html avatar}
            </div>
            <span class="sm:inline hidden">{nickname}</span>
        </a>
    {:else}
        <a href="/login">Log in</a>
    {/if}
</nav>

<style lang="postcss">
    nav {
        background-color: var(--nav);
    }
</style>
