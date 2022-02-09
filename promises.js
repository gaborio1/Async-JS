const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// PROMISES WITH .THEN / .CATCH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const posts3 = [
    { title: "post one", body: "this is post one" },
    { title: "post two", body: "this is post two" }
];

const getPosts3 = () => {
    setTimeout(() => {

        // let output = "";
        // posts2.forEach((post) => {
        //     output += `<li>${post.title}</li>`;
        // });
        // document.body.innerHTML = output;

        posts3.forEach((post) => {
            // console.log(post);
            const li = document.createElement("li");
            li.innerHTML = `${post.title} - ${post.body}`;
            container3.appendChild(li);
        });

    }, 1000);
}

// ❗️❗️❗️ HERE WE DON'T WANT TO RUN A CALLBACK, INSTEAD RETURN A PROMISE
const createPost3 = (post) => {
    return new Promise((resolve, reject) => {   // PROMISE TAKES IN A CALLBACK WITH 2 PARAMS
        setTimeout(() => {
            posts3.push(post);

            // CREATE AN ERROR VARIABLE:
            const error = false;
            // const error = true;

            if (!error) {
                resolve();  // CALL resolve TO SUCCESSFULLY RESOLV A PROMISE
            } else {
                reject("Error: Something went wrong");  // CALL reject() IF ERROR
            }

        }, 2000);
    });
}

// ❗️❗️❗️ HERE, DON'T NEED TO PASS IN A CALLBACK, INSTEAD USE .then() SYNTAX AND PASS IN getPosts()
createPost3({ title: "post three", body: "this is post 3" })
    .then(getPosts3)
    .catch(err => console.log(err));    // Error: Something went wrong

// ❗️❗️❗️  WITHOUT .catch(err => console.log(err)) WE GET: Uncaught (in promise) Error: Something went wrong ❗️❗️❗️ 
// SO WE GET A CLEAN ERROR INSTEAD AN UNCAUGHT PROMISE



// PROMISE.ALL TO HANDLE MULTIPLE PROMISES INSTEAD OF CHAINING .THEN()'S

const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
    res => res.json()
);

// TAKES AN ARRAY OF PROMISES AND A .THEN() WITH A CALLBACK() THAT TAKES IN VALUES
Promise.all([promise1, promise2, promise3, promise4]).then((
    (values) => {
        console.log(values);

        values.forEach((value) => {
            console.log(value);
            const li = document.createElement("li");
            li.innerHTML = `${value}`;
            container4.appendChild(li);
        });

        // container4.innerHTML = values;
    }
));







// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// ASYNC / AWAIT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


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


