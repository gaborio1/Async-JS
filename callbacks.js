const container = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// WITHOUT CALLBACKS - CREATEPOST WILL NOT WORK !!!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DEFAULT POSTS
const posts = [
    { title: "post one", body: "one second delay" },
    { title: "post two", body: "one second delay" }
];

// GET POSTS 1000ms
const getPosts = () => {
    setTimeout(() => {

        // let output = "";
        // posts.forEach((post) => {
        //     output += `<li>${post.title}</li>`;
        // });
        // document.body.innerHTML = output;


        posts.forEach((post) => {
            // console.log(post);
            const li = document.createElement("li");
            li.innerHTML = `${post.title} - ${post.body}`;
            container.appendChild(li);
        });



    }, 1000);
}

// CREATE NEW POST 2000ms
const createPost = (post) => {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

// 1000ms ==> WORKING
getPosts();
// ❗️❗️❗️ 2000ms ==> THIS WILL NOT WORK AS BY THE TIME THIS RUNS, THE DOM IS ARLREADY PAINTED ❗️❗️❗️
createPost({ title: "post three", body: "two second delay" });




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// WITH CALLBACKS - ALL 3 POSTS WILL WORK AFTER 2 SECONDS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰



const posts2 = [
    { title: "post one", body: "one second delay" },
    { title: "post two", body: "one second delay" }
];

const getPosts2 = () => {
    setTimeout(() => {

        // let output = "";
        // posts2.forEach((post) => {
        //     output += `<li>${post.title}</li>`;
        // });
        // document.body.innerHTML = output;

        posts.forEach((post) => {
            // console.log(post); 
            const li = document.createElement("li");
            li.innerHTML = `${post.title} - ${post.body}`;
            container2.appendChild(li);
        });

    }, 1000);
}


// ❗️❗️❗️ ADD A CALLBACK THAT RUNS AFTER THE NEW POST IS ADDED ❗️❗️❗️
const createPost2 = (post, callback) => {
    setTimeout(() => {
        posts2.push(post);  // HAS TO CREATE THE POST BEFORE CALLING THE CALLBACK
        callback();
    }, 2000);
}



createPost2({ title: "post three", body: "two second delay" }, getPosts2);
