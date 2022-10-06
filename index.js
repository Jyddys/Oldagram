
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "12,502"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "15,137"
    }
]



const mainEl = document.getElementById("main")
let html = ""
for (let i = 0; i < posts.length; i++) {
    html += `
    <main id="main">
    <section class="profile-bar">
            <img class="avatar" src="${posts[i].avatar}">
        <div class="text-box">
            <p class="user-full-name">${posts[i].username}</p>
            <p class="user-location">${posts[i].location}</p>
        </div>
    </section>

    <section class="big-image">
        <img id="user-image" src=${posts[i].post}>
    </section>

    <section class="symbols">
        <div class="symbols-box">
            <img id="like" src="images/icon-heart.png">
            <img class="comment" src="images/icon-comment.png">
            <img class="share" src="images/icon-dm.png">
    </div>
        <p class="likes">${posts[i].likes} likes</p>
        <p class="username-caption">
            <span class="bold-text">${posts[i].username}</span> 
            ${posts[i].comment}</p>
    </section>
</main>
    `
}

mainEl.innerHTML = html;
