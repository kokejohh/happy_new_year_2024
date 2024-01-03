<script lang="ts">
    import { createAvatar } from "@dicebear/core";
    import { lorelei } from "@dicebear/collection";
    import { onMount } from "svelte";

    export let nickname: string = "";

    let profile: string = "";
    let tmpNickname: string = nickname;
    let genarateSuccess: boolean = false;

    async function generateProfilePicture(): Promise<boolean> {
        profile = await createAvatar(lorelei, { seed: nickname || tmpNickname })
            .png()
            .toDataUri();
        return true;
    }

    onMount(async () => {
        genarateSuccess = await generateProfilePicture();
    });

    $: if (genarateSuccess && (nickname !== null || nickname !== undefined))
        generateProfilePicture();
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

    <img
        src={profile}
        alt="profile"
        class="shadow-md bg-[var(--purple-darklest)] mx-auto w-1/2 aspect-square align-middle border-2 rounded-full text-base"
    />
    <div class="text-sm text-red-600">
        <p>*รูปจะถูกสร้างตามชื่อเล่น</p>
        <p>*สามารถเปลี่ยนชื่อเล่นได้ตลอดเวลา</p>
    </div>
    
    <input
    type="text"
    id="nickname"
    name="nickname"
    bind:value={nickname}
    placeholder={tmpNickname}
    maxlength="50"
    class="input-text-login bg-gray-100 focus:bg-gray-50"
    />
    <input type="submit" value="ยืนยัน" class="btn-login" />
</form>
