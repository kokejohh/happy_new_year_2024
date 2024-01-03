<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    /** @type {import('./$types').PageData}*/
    export let data: import("./$types").PageData;

    const {status, isNewUser, nickname} = data.cookieValue;
</script>

<div class="flex flex-col justify-between h-screen space-y-8">
    <Navbar status={status} isNewUser={isNewUser} nickname={nickname}/>
    <slot />
    <Footer />
</div>
