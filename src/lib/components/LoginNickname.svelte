<script lang="ts">
    export let nickname = "";
</script>

<form
    method="post"
    action="?/nickname"
    class="flex flex-col bg-white sm:mx-auto mx-8 py-20 px-8 text-center space-y-6 text-2xl rounded-3xl sm:w-96 w-auto]"
>
    <div class="text-[var(--purple-dark)] text-3xl font-bold">
        Happy new year 2024
    </div>
    <hr />
    <div class="text-[var(--purple-darkless)] font-bold">ตั้งชื่อเล่น</div>
    <input
        type="text"
        id="nickname"
        name="nickname"
        value={nickname}
        placeholder="ชื่อเล่น"
        maxlength="50"
        class="input-text-login bg-gray-100 focus:bg-gray-50"
    />
    <input
        type="submit"
        value="ยืนยัน"
        class="p-2 border-2 border-[var(--purple-dark)] bg-[var(--purple-dark)] hover:bg-white text-white hover:text-[var(--purple-dark)] text-sm font-semibold rounded-md"
    />
</form>
