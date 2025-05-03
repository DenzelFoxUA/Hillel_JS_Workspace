import { commentForm, input_postBody, input_postTitle } from "./api/postHTML_Interface.js";
import { getPosts, addPost } from "./api/postsService.js";
import './scss/style.scss'

console.log("mainPosts.js loaded");

document.addEventListener("DOMContentLoaded", async function() {
    console.log("DOMContentLoaded triggered");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = input_postTitle.value.trim();
        const body = input_postBody.value.trim();

        if (!title || !body) {
            alert("Please fill all boxes");
            return;
        }

        addPost(title, body, 1);
        input_postTitle.value = "";
        input_postBody.value = "";
    });

    console.log("Calling getPosts...");
    await getPosts(10);
    console.log("Posts loaded");
});
