function show() {

    // profile picture
    let profilePicture = document.querySelector("#pfp")
    let originalProfilePicture = document.querySelector(".profile-picture")

    // username
    let username = document.querySelector(".name").value
    let originalUsername = document.querySelector(".username")

    // image of the post
    let postImage = document.querySelector("#post")
    let originalPostImage = document.querySelector(".post-image")

    // tagname of the user
    let tagName = document.querySelector(".tag").value
    let originalTagName = document.querySelector(".nametag")

    // text in the post
    let postText = document.querySelector("#post-text").value
    let originalPostText = document.querySelector(".text")

    // hastags in the post if any
    let hashtags = document.querySelector("#post-tags").value
    let originalHashtags = document.querySelector(".post-hashtags")

    // number of retweets/reposts
    let noOfRetweets = document.querySelector("#retweets").value
    let originalnoOfRetweets = document.querySelector(".retweet")

    // number of comments on the post
    let noOfComments = document.querySelector(".comments").value
    let originalNoOfComments = document.querySelector(".reply")

    // number of likes on the post
    let noOfLikes = document.querySelector("#likes").value
    let originalNoOfLikes = document.querySelector(".likes")

    // number of views on the post
    let noOfViews = document.querySelector("#views").value
    let originalNoOfViews = document.querySelector(".views")

    // atleast profile picture required
    if (profilePicture.files.length == 0) {
        alert("upload profile picture!")
    }
    else {
        originalProfilePicture.style.backgroundImage = `url(${URL.createObjectURL(profilePicture.files[0])})`
    }

    // post image is optional
    if (postImage.files.length == 0) {
        originalPostImage.style.height = "0px"
    }
    else {
        originalPostImage.style.height = "270px"
        originalPostImage.style.backgroundImage = `url(${URL.createObjectURL(postImage.files[0])})`
    }

    originalPostText.innerHTML = postText // changing post text

    originalHashtags.innerHTML = hashtags // changing hastags in the post

    originalUsername.innerHTML = `${username}<img src="verified.png" height="18px">` // changing username

    originalTagName.innerHTML = tagName // changing tagname of the user

    originalNoOfComments.innerHTML = `<img src="comment-1-svgrepo-com.png" height="18px"> ${noOfComments}` // changing number of comments

    originalNoOfLikes.innerHTML = `<img src="heart-svgrepo-com.png" height="18px"> ${noOfLikes}` // changing number of likes

    originalnoOfRetweets.innerHTML = `<img src="retweet-svgrepo-com.png" height="18px"> ${noOfRetweets}` // changing number of retweets/reposts

    originalNoOfViews.innerHTML = `<img src="chart-simple-svgrepo-com.png" height="18px"> ${noOfViews}` // changing number of views
}

















