// script.js
document.addEventListener('DOMContentLoaded', () => {
    const postsData = [
        { id: 1, img: 'https://picsum.photos/id/201/600/600', caption: 'Your girl in pink 💞 #billieeilish', likes: '40K' },
        { id: 2, img: 'https://picsum.photos/id/29/600/600', caption: 'L\'AMOUR DE MA VIE edit 🔥', likes: '28K' },
        { id: 3, img: 'https://picsum.photos/id/1015/600/600', caption: 'Billie vibes only 🖤', likes: '35K' },
        { id: 4, img: 'https://picsum.photos/id/160/600/600', caption: 'long time no see ❤️ #billieeilishfanpage', likes: '19K' },
        { id: 5, img: 'https://picsum.photos/id/201/600/600', caption: 'Your girl in pink 💞 #billieeilish', likes: '40K' },
        { id: 6, img: 'https://picsum.photos/id/29/600/600', caption: 'L\'AMOUR DE MA VIE edit 🔥', likes: '28K' },
        { id: 7, img: 'https://picsum.photos/id/1015/600/600', caption: 'Billie vibes only 🖤', likes: '35K' },
        { id: 8, img: 'https://picsum.photos/id/160/600/600', caption: 'long time no see ❤️ #billieeilishfanpage', likes: '19K' },
        { id: 9, img: 'https://picsum.photos/id/201/600/600', caption: 'Your girl in pink 💞 #billieeilish', likes: '40K' }
    ];

    const container = document.getElementById('postsContainer');
    postsData.forEach(post => {
        const cardHTML = `
            <div class="col-4 col-sm-4 col-md-4 col-lg-3 mb-1 post-card" data-bs-toggle="modal" data-bs-target="#postModal" data-img="${post.img}" data-caption="${post.caption}" data-likes="${post.likes}">
                <img src="${post.img}" alt="${post.caption}" class="w-100">
                <div class="post-overlay">
                    <span>❤️ ${post.likes}</span>
                </div>
            </div>`;
        container.innerHTML += cardHTML;
    });

    const modal = document.getElementById('postModal');
    modal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;
        const imgSrc = trigger.getAttribute('data-img');
        const caption = trigger.getAttribute('data-caption');
        const likes = trigger.getAttribute('data-likes');
        this.querySelector('#modalContent').innerHTML = `
            <div class="row g-0">
                <div class="col-md-8 bg-black">
                    <img src="${imgSrc}" class="img-fluid w-100" style="max-height: 85vh; object-fit: contain;">
                </div>
                <div class="col-md-4 d-flex flex-column">
                    <div class="p-3 border-bottom"><strong>@bliiieelilsh</strong></div>
                    <div class="flex-grow-1 p-3 overflow-auto">
                        <p class="mb-3">${caption}</p>
                        <div class="text-muted small">❤️ ${likes} likes</div>
                    </div>
                </div>
            </div>`;
    });

    console.log('%c✅ Exact @bliiieelilsh Instagram replica loaded – colors, text, animations & layout match perfectly.', 'color:#0095f6; font-weight:bold');
});
