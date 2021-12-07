document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

const iniciarApp = () => {
    crearGaleria();
}

const crearGaleria = () => {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
            <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
            <img
            loading="lazy"
            width="200"
            height="300"
            src="build/img/thumb/${i}.jpg"
            alt="imagen galeria"
            />
        `;

        imagen.onclick = () => {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

const mostrarImagen = (id) => {
    const imagen = document.createElement('picture');

    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif" />
        <source srcset="build/img/grande/${id}.webp" type="image/webp" />
        <img
        loading="lazy"
        width="200"
        height="300"
        src="build/img/grande/${id}.jpg"
        alt="imagen galeria"
        />
    `;

    //Crea el overlay
    const overlay = document.createElement('DIV');

    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = () => {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }

    // Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = () => {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    }
    overlay.appendChild(cerrarModal);

    // Añade al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')
}