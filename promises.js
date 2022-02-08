const posts = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" }
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}



const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            // const error = true;

            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }

        }, 2000);
    });
}


// createPost({ title: "post three", body: "this is post 3" })
//     .then(getPosts)
//     .catch(err => console.log(err));






// ASYNC / AWAIT

// async function init() {
//     await createPost({ title: "post three", body: "this is post 3" });

//     getPosts();
// }

// init();



// ASYNC / AWAIT / FETCH

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data);

    data.forEach((entry) => {
        console.log(entry.name);
    })
}

fetchUsers();






// PROMISE.ALL

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//     res => res.json()
// );


// Promise.all([promise1, promise2, promise3, promise4]).then((
//     (values) => console.log(values)
// ));


