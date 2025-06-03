
document.addEventListener("DOMContentLoaded", function()
{
    //const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const API_URL = 'http://localhost:3000/api/posts';

    const postList = document.getElementById("postList");
    const commentForm = document.getElementById("leaveAComment");
    const confirmBtn = document.getElementById("confirmBtn");

    commentForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const title = document.getElementById("titleInput").value.trim();
        const body = document.getElementById("bodyInput").value.trim();

        if (!title || !body) {
            alert("Please fill all boxes");
            return;
        }
        
        addPost(title,body,1);
    })

    function getPosts(numOfPosts){
        fetch(`${API_URL}?_limit=${numOfPosts}`)
        .then(result => {
            if(!result.ok)
            {
                throw new Error("Error thrown by getting posts!");
            }

            return result.json();
        }).then(allPosts => { 
            allPosts.forEach(post => {
            const postElement = createPostElement(post);

            postList.appendChild(postElement);
            });

        })
        .catch(err => console.error(err));
    };

    function createPostElement(post){
        const postRecord = document.createElement('li');

        postRecord.innerHTML = `
            <label class="title">${post.title}</label>
            <p class="textPost">${post.body}</p>
            <button type="button" id="loadPost_${post.id}">Comments...</button>
            <ul id="comentsSection_${post.id}" style="display: none"></ul>`

        postRecord.classList.toggle("postObj");

        postRecord.querySelector(`#loadPost_${post.id}`)
        .addEventListener("click", () => {

            const commentsSection = postRecord.querySelector(`#comentsSection_${post.id}`);

            if(commentsSection.innerHTML !== "")
                commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
            else
                loadPostComments(post.id,2);

        });
        
        return postRecord;
    };

    function loadPostComments(postId, numOfComments)
    {
        fetch(`${API_URL}/${postId}/comments?_limit=${numOfComments}`)
        .then(result => {
            if(!result.ok)
            {
                throw new Error("Error thrown by getting comments!");
            }

            return result.json();

        }).then(comments=> comments.forEach(comment => {
            const thisPost = document.getElementById(`comentsSection_${postId}`);
            const commentElement = createCommentElement(comment);
            thisPost.appendChild(commentElement);
        }))
        .catch(err => console.error(err));
    }

    function createCommentElement(comment)
    {
        const commentRecord = document.createElement('li');

        commentRecord.innerHTML = `
            <h3 class="userData">${comment.name}</h3>
            <h3 class="userData">${comment.email}</h3>
            <p class="textPost">${comment.body}</p>`

        commentRecord.classList.toggle("commentObj");
        
        return commentRecord;
    }

    function addPost(title, body, userId)
    {
        const postData = {
            title: title,
            body: body,
            userId: userId
        };

        fetch(`${API_URL}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
          })
            .then(result => result.json())
            .then(data => {
              document.getElementById("result").innerHTML = `
                ✅Success!<br />`;
                const newPost = createPostElement(data);
                postList.prepend(newPost);
          
                document.getElementById("titleInput").value = "";
                document.getElementById("bodyInput").value = "";
            })
            .catch(err => {
              console.error("Error adding: ", err);
        });  
    }

    getPosts(10);
});
