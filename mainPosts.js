import { commentForm } from "./js/postHTML_Interface";
import { input_postBody } from "./js/postHTML_Interface";
import { input_postTitle } from "./js/postHTML_Interface";
console.log("getPosts function:", getPosts);
import { getPosts, addPost } from "./js/postsService"; 

document.addEventListener("DOMContentLoaded",async function()
{
    console.log("DOMContentLoaded triggered");

    commentForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const title = input_postTitle.value.trim();
        const body = input_postBody.value.trim();

        if (!title || !body) {
            alert("Please fill all boxes")
            return;
        }
        
        addPost(title,body,1);
        input_postTitle.value = "";
        input_postBody.value = "";
    })
    console.log("Call before");
    await getPosts(10);
})