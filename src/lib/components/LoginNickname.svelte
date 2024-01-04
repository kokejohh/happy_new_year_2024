<script lang="ts">
    import { loading } from "$lib/popup";
    import { createAvatar } from "@dicebear/core";
    import { lorelei } from "@dicebear/collection";

    export let nickname: string = "";

    let tmpNickname: string = nickname;

    let avatar = createAvatar(lorelei, {
        seed: nickname.trim(),
    });

    $: if (nickname !== null && nickname !== undefined) {
        avatar = createAvatar(lorelei, {
            seed: nickname.trim() || tmpNickname,
        });
    }
</script>

<form
    method="post"
    action="?/nickname"
    class="flex flex-col bg-white ssm:mx-auto mx-8 py-12 px-8 text-center space-y-6 text-2xl rounded-3xl ssm:w-96"
>
    <div class="text-[var(--purple-dark)] text-3xl font-bold">
        Happy new year 2024
    </div>
    <hr />
    <div class="text-[var(--purple-darkless)] font-bold">ตั้งชื่อเล่น</div>

    <div
        class="mx-auto shadow-md bg-[var(--purple-darklest)] min-w-32 lg:w-1/3 w-1/2 aspect-square border-2 rounded-full"
    >
        {@html avatar}
    </div>

    <div class="text-sm text-red-600">
        <p>*รูปจะถูกสร้างตามชื่อเล่น</p>
        <p>*สามารถเปลี่ยนชื่อเล่นได้ตลอดเวลา</p>
    </div>

    <input
        type="text"
        name="nickname"
        bind:value={nickname}
        placeholder={tmpNickname}
        maxlength="30"
        class="input-text-login bg-gray-100 focus:bg-gray-50"
    />
    <input
        on:click={() => loading.fire()}
        type="submit"
        value="ยืนยัน"
        class="btn-login"
    />
</form>
