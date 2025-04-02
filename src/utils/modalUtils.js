import Swal from 'sweetalert2'

export function modal(icon, title, text) {
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
        color: 'rgb(0, 88, 117)',
        confirmButtonColor: 'rgb(0, 88, 117)',
        confirmButtonText: '<div style="color: rgb(255, 255, 137)">Ok</div>',
        customClass: {
            popup: 'custom-popup'
        }
    })
}
