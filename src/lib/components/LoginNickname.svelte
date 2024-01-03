<script lang="ts">
    import { createAvatar } from "@dicebear/core";
    import { lorelei } from "@dicebear/collection";

    export let nickname = "";

    let profile: string = "";

    async function genarateProfilePicture(nickname: string) {
        profile = nickname
            ? await createAvatar(lorelei, { seed: nickname }).png().toDataUri()
            : "";
    }

    $: genarateProfilePicture(nickname);
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
    <img src={profile} width="100px" alt="profile" class="mx-auto" />
    <input
        type="text"
        id="nickname"
        name="nickname"
        bind:value={nickname}
        placeholder="ชื่อเล่น"
        maxlength="50"
        class="input-text-login bg-gray-100 focus:bg-gray-50"
    />
    <input type="submit" value="ยืนยัน" class="btn-login" />
</form>
