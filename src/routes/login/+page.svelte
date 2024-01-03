<script lang="ts">
    /** @type {import('./$types').PageData}*/
    export let data: import("./$types").PageData;

    /** @type {import('./$types').ActionData}*/
    export let form: import("./$types").ActionData;

    import Login from "$lib/components/Login.svelte";
    import LoginNickname from "$lib/components/LoginNickname.svelte";
    
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
</svelte:head>
{#if !data.cookieValue.status && !data.cookieValue.isNewUser}
    <Login modal={form?.status === 401} username={form?.data.username || ''}/>
{:else}
    <LoginNickname nickname={data.cookieValue.nickname} />
{/if}
