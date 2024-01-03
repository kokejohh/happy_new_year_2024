<script lang="ts">
    /** @type {import('./$types').PageData}*/
    export let data: import("./$types").PageData;
</script>

<div
    class="flex flex-col bg-white sm:mx-auto mx-8 py-20 px-8 text-center space-y-6 text-xl rounded-3xl sm:w-[32rem] w-auto]"
>
    <div class="text-[var(--purple-dark)] text-3xl font-bold">
        Happy new year 2024
    </div>
    <hr />
    <div class="text-left break-words">
        <p>ข้อมูลส่วนตัว</p>
        <p>{data.cookieValue.displayname_th}</p>
        <p>{data.cookieValue.displayname_en}</p>
        <p>{data.cookieValue.email}</p>
        <p>{data.cookieValue.department}</p>
        <p>{data.cookieValue.faculty}</p>
        <p>ความคืบหน้า</p>

    </div>
    <form method="post" action="/?/logout">
        <input
            type="submit"
            value="Log out"
            class="p-2 bg-[var(--purple-dark)] w-full text-white text-sm font-semibold rounded-md"
        />
    </form>
</div>
