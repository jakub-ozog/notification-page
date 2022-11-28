const markBtn = document.querySelector('.card__mark');
const postNew = document.querySelectorAll('.card__post');
const postNewArr = Array.from(postNew);
const activity = document.querySelectorAll('.card__activity');
const activityArr = [...activity];
const counter = document.querySelector('.card__number');

markBtn.addEventListener('click', (ev) => {
    postNewArr.forEach((post) => {
        if (post.classList.contains('-new')) {
            post.classList.remove('-new')
            counter.textContent = '0';

        }
    })

    activityArr.forEach((marker) => {
        if (marker.classList.contains('-newMarker')) {
            marker.classList.remove('-newMarker')
        }
    })
})