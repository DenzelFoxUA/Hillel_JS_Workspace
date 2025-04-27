import { API_URL, COMMENTS_SECTION, POSTS_SECTION, QUERY_LIMIT } from "./settingsValues.js";
import { postList, addedPost } from "./postHTML_Interface.js";

export async function getPosts(limitOfQuery) {
    try {
        const queryString = `${API_URL}/${POSTS_SECTION}${QUERY_LIMIT}${limitOfQuery}`;
        console.log("Fetching posts from:", queryString);

        const result = await fetch(queryString);

        if (!result.ok) {
            throw new Error("Error fetching posts!");
        }

        const posts = await result.json();

        posts.forEach(post => {
            const postElement = createPostElement(post);
            postList.appendChild(postElement);
        });

    } catch (err) {
        console.error("Error loading posts:", err);
    }
}

export async function addPost(title, body, userId) {

    const postToAdd = { title, body, userId };

    const result = await fetch(`${API_URL}/${POSTS_SECTION}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postToAdd)
    });

    if (!result.ok) {
        throw new Error("Error adding post!");
    }

    const data = await result.json();

    addedPost.innerHTML = `✅ Success!<br />`;

    const newPost = createPostElement(data);
    postList.prepend(newPost);
}

export async function loadPostComments(postId, numOfComments) {
    try {
        const queryString = `${API_URL}/${POSTS_SECTION}/${postId}/${COMMENTS_SECTION}${QUERY_LIMIT}${numOfComments}`;
        const result = await fetch(queryString);

        if (!result.ok) {
            throw new Error("Error loading comments!");
        }

        const comments = await result.json();

        const commentsSection = document.getElementById(`comentsSection_${postId}`);

        comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsSection.appendChild(commentElement);
        });

        commentsSection.style.display = 'block';

    } catch (err) {
        console.error("Error loading comments:", err);
    }
}

function createPostElement(post) {
    const postRecord = document.createElement('li');

    postRecord.innerHTML = `
        <label class="title">${post.title}</label>
        <p class="textPost">${post.body}</p>
        <button type="button" id="loadPost_${post.id}">Comments...</button>
        <ul id="comentsSection_${post.id}" style="display: none"></ul>`;

    postRecord.classList.add("postObj");

    postRecord.querySelector(`#loadPost_${post.id}`)
    .addEventListener("click", () => {
        const commentsSection = postRecord.querySelector(`#comentsSection_${post.id}`);

        if (commentsSection.innerHTML !== "") {
            commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
        } else {
            loadPostComments(post.id, 2);
        }
    });

    return postRecord;
}

function createCommentElement(comment) {
    const commentRecord = document.createElement('li');

    commentRecord.innerHTML = `
        <h3 class="userData">${comment.name}</h3>
        <h3 class="userData">${comment.email}</h3>
        <p class="textPost">${comment.body}</p>`;

    commentRecord.classList.add("commentObj");

    return commentRecord;
}
