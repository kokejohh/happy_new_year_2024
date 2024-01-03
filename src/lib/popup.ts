import Swal from "sweetalert2";

export const loading = Swal.mixin({
    background: "#00000000",
    timer: 20000,
    didOpen: () => {
        Swal.showLoading();
    },
    allowOutsideClick: () => !Swal.isLoading(),
});

export const loginFailed = Swal.mixin({
    toast: true,
    icon: "error",
    title: "เข้าสู่ระบบไม่สำเร็จ!",
    text: "เลขทะเบียน หรือ รหัสนักศึกษา ไม่ถูกต้อง",
    position: "top",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
    width: "30rem",
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
});