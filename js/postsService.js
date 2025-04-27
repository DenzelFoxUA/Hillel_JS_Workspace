
import { API_URL, POSTS_SECTION, QUERY_LIMIT } from "./settingsValues";
import { postData } from "./postEntity";
import { addedPost, postList } from "./postHTML_Interface";

export async function getPosts(limitOfQuery){

    try
    {
        const queryString = `${API_URL}${POSTS_SECTION}${QUERY_LIMIT}${limitOfQuery}`;
        console.log(queryString);
        const result = await fetch(queryString);
        if(!result.ok)
        {
            throw new Error("Error thrown by getting posts!");
        }

        const resultJson = await result.json();

        resultJson.forEach(post => {
            const postElement = createPostElement(post);
            postList.appendChild(postElement)});

    }
    catch(err)
    {
        console.error(`${err} Error reading data!`);
    }
    
   
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

async function loadPostComments(postId, numOfComments){

    try
    {
        const queryString = `${API_URL}${POSTS_SECTION}/${postId}/comments${QUERY_LIMIT}${numOfComments}`;
        const result = await fetch(queryString)
    
        if(!result.ok)
        {
            throw new Error("Error thrown by getting comments!");
        }

        const data = await result.json();

        data.forEach(comment => {
            const thisPost = document.getElementById(`comentsSection_${postId}`);
            const commentElement = createCommentElement(comment);
            thisPost.appendChild(commentElement);
        
        })
    }
    catch(err)
    {
        console.error(err)
    }
}


export async function addPost(title, body, userId)
{

    const postToAdd = { ...postData }; // копія поста
    postToAdd.title = title;
    postToAdd.body = body;
    postToAdd.userId = userId;
    
    const result = await fetch(`${API_URL}${POSTS_SECTION}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(postToAdd)
        }
    )

    if (!result.ok) {
        throw new Error("Error adding post!");
    }

    const data = result.json();
    addedPost.innerHTML = `✅Success!<br />`;
    const newPost = createPostElement(data);
    postList.prepend(newPost);
     
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