<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: any;

    console.log("1");
    console.log(import.meta.env);
    console.log(import.meta.env.VITE_TEST);

    function test() {
        alert(1);
    }
</script>

{data.title}
{data.post?.name}
<p>Happy new year 2024</p>
<p>Happy new year 2024</p>
<p>Happy new year 2024</p>
<p>Happy new year 2024</p>
<p>Happy new year 2024</p>
<p>Happy new year 2024</p>

<input type="text" name="firstname" />
<input type="text" name="lastname" />
<input on:click={() => test()} type="submit" name="submit" value="submit" />
