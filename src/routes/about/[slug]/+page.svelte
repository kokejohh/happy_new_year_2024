<script lang="ts">
    /** @type {import('./$types').PageData}*/
    export let data: import("./$types").PageData;

    import { createAvatar } from "@dicebear/core";
    import { lorelei } from "@dicebear/collection";

    let nickname: string = data.cookieValue.nickname || "";
    let tmpNickname: string = nickname;
    let avatar = createAvatar(lorelei, {
        seed: nickname.trim(),
    });

    let pen: boolean = false;

    function changeNickname() {
        pen = true;
    }

    function confirmChangeNickname() {
        pen = false;
    }

    function cancelChangeNickname() {
        nickname = tmpNickname;
        pen = false;
    }

    $: if (nickname !== null && nickname !== undefined) {
        avatar = createAvatar(lorelei, {
            seed: nickname.trim() || tmpNickname,
        });
    }
</script>

<div
    class="text-[var(--purple-dark)] grid lg:grid-cols-3 grid-cols-1 gap-8 px-8"
>
    <div
        class="space-y-8 lg:col-start-2 lg:col-end-3 bg-white py-12 px-8 text-xl rounded-3xl"
    >
        <div class="text-center space-y-4">
            <div class="text-[var(--purple-dark)] text-3xl font-bold">
                ข้อมูลส่วนตัว
            </div>
            <hr />
            <div
                class="mx-auto shadow-md bg-[var(--purple-darklest)] min-w-32 sm:w-1/12 w-1/3 aspect-square border-2 rounded-full"
            >
                {@html avatar}
            </div>
            <div class="text-sm text-red-600">
                <p>*รูปจะถูกสร้างตามชื่อเล่น</p>
                <p>*สามารถเปลี่ยนชื่อเล่นได้ตลอดเวลา</p>
            </div>
            {#if !pen}
                <span
                    class="break-words border-b-2 text-center outline-none text-[var(--purple-dark)] font-semibold"
                    >{nickname}</span
                >
                <button on:click={() => changeNickname()}>
                    <svg
                        class="h-6 w-6 text-gray-600 hover:text-gray-900 hover:cursor-pointer inline"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path
                            d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                        />
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg
                    >
                </button>
            {:else}
                <form method="post" action="/login?/nickname">
                    <input
                        type="text"
                        maxlength="30"
                        name="nickname"
                        bind:value={nickname}
                        placeholder={tmpNickname}
                        class="bg-gray-100 inlince-block w-full border-b-2 border-[var(--purple-dark)] text-center outline-none text-[var(--purple-dark)] font-semibold"
                    />

                    <input
                        type="submit"
                        name="changeNicknameFromProfile"
                        value="บันทึก"
                        class="hover:cursor-pointer w-24 p-2 bg-[var(--purple-dark)] text-white text-sm font-semibold rounded-md"
                    />
                    <input
                        type="button"
                        value="ยกเลิก"
                        on:click={() => cancelChangeNickname()}
                        class="hover:cursor-pointer w-24 p-2 border border-[var(--purple-dark)] bg-white hover:bg-[var(--purple-dark)] text-[var(--purple-dark)] hover:text-white text-sm font-semibold rounded-md"
                    />
                </form>
            {/if}
        </div>

        <div class="text-center text-base break-words">
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
        </div>

        <form method="post" action="/?/logout" class="text-center">
            <input
                type="submit"
                value="Log out"
                class="hover:cursor-pointer w-24 p-2 bg-[var(--purple-dark)] text-white text-sm font-semibold rounded-md"
            />
        </form>
    </div>
    <div
        class="col-span-full flex-col bg-white py-20 px-8 text-center space-y-6 text-xl rounded-3xl"
    >
        <div class="text-[var(--purple-dark)] text-3xl font-bold">
            ความคืบหน้า
        </div>
        <hr />
        <div class="text-left break-words">
            <p>ข้อมูลส่วนตัว</p>
            <p>{data.cookieValue.displayname_th}</p>
            <p>{data.cookieValue.displayname_en}</p>
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
            <p>{data.cookieValue.displayname_th}</p>
            <p>{data.cookieValue.displayname_en}</p>
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
            <p>{data.cookieValue.displayname_th}</p>
            <p>{data.cookieValue.displayname_en}</p>
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
            <p>{data.cookieValue.displayname_th}</p>
            <p>{data.cookieValue.displayname_en}</p>
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
            <p>{data.cookieValue.displayname_th}</p>
            <p>{data.cookieValue.displayname_en}</p>
            <p>{data.cookieValue.email}</p>
            <p>{data.cookieValue.department}</p>
            <p>{data.cookieValue.faculty}</p>
            <p>ความคืบหน้า</p>
        </div>
    </div>
</div>
