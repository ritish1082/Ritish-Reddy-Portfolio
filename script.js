// FETCH PINNED REPOS FROM GITHUB
// REPLACE username=GITHUB-ID

fetch('https://gh-pinned-repos.egoist.dev/?username=ritish1082')
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post);
    });

// DISPLAY PINNED(6) REPOS INTO CARDS IN CLASS PROJECTS






// FETCH MEDIUM POSTS
// REPLACE ...


// DISPLAY MEDIUM (3) REPOS INTO CARDS IN CLASS BLOG 