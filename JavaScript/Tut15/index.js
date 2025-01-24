function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve('Data fetched');
            } else {
                reject('Data not fetched');
            }   
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return `Uttam Roy`;
    }).then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    });