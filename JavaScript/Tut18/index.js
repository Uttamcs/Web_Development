// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({name: "Uttam", age: 21});
//         }, 2000);
//     });
// }

// async function fetchData() {
//     try {
//         console.log("Fetching data...");
//         const data = await fetchUserData();
//         console.log("Data fetched!", data);
//     } catch (error) {
//         console.log("Error fetching data: ", error);
//     }
// }

// fetchData();




function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post Data Fetched");
        }, 2000);
    });
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment Data Fetched Successfully");
        }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("Fetching blog data...");
        // const post = await fetchPostData();
        // const comments = await fetchCommentData();

        const [post, comments] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(post);
        console.log(comments);
        console.log("Fetch Complete!");
    } catch (error) {
        console.log("Error fetching blog data: ", error);
    }
}

getBlogData();