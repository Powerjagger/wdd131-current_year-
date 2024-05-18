function handleResize() {
    const menuItems = document.querySelector('nav ul');
    if (window.innerWidth > 1000) {
        menuItems.classList.remove('hide');
    } else {
        menuItems.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

function handleImageModal() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal .close');

    function openModal(imageSrc, altText) {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
        modalImage.alt = altText;
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function handleViewerModal() {
    function viewHandler(event) {
        const clickedImage = event.target;
        const imageSrc = clickedImage.getAttribute('src');
        const splitSrc = imageSrc.split('-');
        const newImageSrc = `${splitSrc[0]}-full.jpeg`;
        const modalHtml = viewerTemplate(newImageSrc, clickedImage.alt);

        document.body.insertAdjacentHTML('afterbegin', modalHtml);

        const closeButton = document.querySelector('.viewer .close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }

    function closeViewer() {
        const modal = document.querySelector('.viewer');
        modal.remove();
    }

    document.querySelectorAll('.gallery img').forEach(image => {
        image.addEventListener('click', viewHandler);
    });
}

handleImageModal();
handleViewerModal();

const mainModal = document.getElementById('myModal');
const mainCloseButton = document.querySelector('.modal .close');

function closeModal() {
    mainModal.style.display = 'none';
}

mainCloseButton.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === mainModal) {
        closeModal();
    }
});
