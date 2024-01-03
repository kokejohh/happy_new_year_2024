<script lang="ts">
    /** @type {import('./$types').PageData}*/
    export let data: import("./$types").PageData;

    /** @type {import('./$types').ActionData}*/
    export let form: import("./$types").ActionData;

    import Login from "$lib/components/Login.svelte";
    import LoginNickname from "$lib/components/LoginNickname.svelte";
</script>

{#if !data.cookieValue.status && !data.cookieValue.isNewUser}
    <Login modal={form?.status === 401} username={form?.data.username || ""} />
{:else}
    <LoginNickname nickname={data.cookieValue.nickname} />
{/if}
