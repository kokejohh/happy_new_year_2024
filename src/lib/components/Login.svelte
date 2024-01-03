<script lang="ts">
    import { loading, loginFailed } from '$lib/popup';

    export let modal: boolean = false;
    export let username: string = '';

    if (modal) { loginFailed.fire(); }
</script>

<form
    method="post"
    action="?/auth"
    class="flex flex-col bg-white sm:mx-auto mx-8 py-20 px-8 text-center space-y-6 text-2xl rounded-3xl sm:w-96"
>
    <div class="text-[var(--purple-dark)] text-3xl font-bold">
        Happy new year 2024
    </div>
    <hr />
    <div class="text-[var(--purple-darkless)] font-bold">Login</div>
    <input
        value={username}
        type="text"
        name="username"
        id="username"
        placeholder="เลขทะเบียนนักศึกษา"
        class="input-text-login"
    />
    <input
        type="password"
        name="password"
        id="password"
        placeholder="รหัสผ่าน"
        class="input-text-login"
    />
    <input
        on:click={() => loading.fire()}
        type="submit"
        value="เข้าสู่ระบบ"
        class="btn-login"
    />
</form>
