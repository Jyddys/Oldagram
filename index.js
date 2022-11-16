import posts from "./data.js"

document.addEventListener('click', function(e) {

    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

// Like post
function handleLikeClick(likeId){

    const targetLikeObj = posts.filter(function(post){
        return post.id === likeId
    })[0]

    if(targetLikeObj.isLiked) {
        targetLikeObj.likes--
    } else {
        targetLikeObj.likes++
    }

targetLikeObj.isLiked = !targetLikeObj.isLiked
render()
}


// renders html
function getFeedHtml() {
let html = ""

posts.forEach(function(post){
    html += `
    <main id="main">
    <section class="profile-bar">
            <img class="avatar" src="${post.avatar}">
        <div class="text-box">
            <p class="user-full-name">${post.username}</p>
            <p class="user-location">${post.location}</p>
        </div>
    </section>

    <section class="big-image">
        <img id="user-image" src=${post.post}>
    </section>

    <section class="symbols">
        <div class="symbols-box">
            <img id="like" src="images/icon-heart.png" data-like="${post.id}">
            <img class="comment" src="images/icon-comment.png">
            <img class="share" src="images/icon-dm.png">
    </div>
        <p class="likes">${post.likes} likes</p>
        <p class="username-caption">
            <span class="bold-text">${post.username}</span> 
            ${post.comment}</p>
    </section>
</main>
    `
})
return html
}

function render() {
    document.getElementById("main").innerHTML = getFeedHtml()
}

render(posts)
