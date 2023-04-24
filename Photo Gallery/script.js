let images = ['./img/unsplash_1.jpg', './img/unsplash_2.jpg', './img/unsplash_3.jpg', './img/unsplash_4.jpg', './img/unsplash_5.jpg', './img/unsplash_6.jpg', './img/unsplash_7.jpg', './img/unsplash_8.jpg'];

function renderImages() {
    let content = document.getElementById('container');
    content.innerHTML = '';

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        document.getElementById('container').innerHTML += `
        <div><img class="imgbox" src="${image}"></div>
        `;
    }
}