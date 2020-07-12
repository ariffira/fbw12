let url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
    .then(response => response.json()) //.then(json => console.log(json))
    .then(showPost)

// post
function showPost(item) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post)

    function post(newPost) {
        console.log(item)
        console.log(newPost)
        if (newPost.userId == item.id) {
            poster.innerHTML +=
                `<div class="row well">
            <div class="row">
                <div class=" col-sm-6 col-xs-6 text-left">
    
                    <a href="#" class="btn btn-reset text-nowrap text-muted"><i class="fa fa-fw fa-heart"></i> Like</a>
    
    
                    <a href="#" class="btn btn-reset text-nowrap text-muted"><i class="fa fa-fw fa-comment"></i> Comment</a>
    
    
                    <a href="#" class="btn btn-reset text-nowrap text-muted"><i class="fa fa-fw fa-share"></i> Share</a>
    
                </div>
    
                <div class=" col-sm-6 col-xs-6 text-right">
                    <a href="#" class="feed-summary-item mr-auto">6.3K likes</a>
                    <a href="#" class="feed-summary-item">826 comments</a> <a href="#" class="feed-summary-item">·</a> <a href="#" class="feed-summary-item">2.9K shares</a>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="well">
                    <p>${item.name}</p>
                    <img src="https://www.nixon.com/on/demandware.static/-/Library-Sites-Nixon/default/dwb31f513e/team/2020/JOHN_JOHN_FLORENCE_840x420.jpg" class="img-circle" height="55" width="55" alt="profile image">
                </div>
            </div>
            <div class="col-sm-9">
                <div class="well well-lg">
                    <h5>${newPost.title}</h5>
                    <p>${newPost.body}</p>
                </div>
                <div class="margin-left">
                    <h4>comments</h4>
                    <div id="comments" class="well well-sm ">
                        ${commentRelated(newPost.id)}
                        
                    </div>
                </div>
            </div>
    
        </div>`

            function commentRelated(post) {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments')
                    .then(response => response.json())
                    .then(showComment)

                function showComment(comment) {
                    console.log(comment)
                    comment.map(showComments)

                    function showComments(key) {
                        comments.innerHTML +=
                            `
                        <div class="well well-sm ">
                        <h6>${key.email}</h6>
                        <p>${key.body}</p>
                        
                    </div>
                        `
                    }


                }
            }
        }
    }
}