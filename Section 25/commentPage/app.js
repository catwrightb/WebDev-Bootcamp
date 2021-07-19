const input = document.querySelector('#commentForm');
const comments = document.querySelector('#printedComment');

// input.addEventListener('submit', function (e) {

//     const userName = document.querySelectorAll("input")[0];
//     const comment = document.querySelectorAll("input")[1];

//     let userComment= userName.value + ": " + comment.value;

//     comments.innerText = userComment;

//     e.preventDefault();
// })

input.addEventListener('submit', function (e) {
    e.preventDefault();

    let userComment= input.elements.username.value + ": " + input.elements.comment.value;
    const newComment = document.createElement('li');
    comments.appendChild(newComment);
    newComment.innerText = userComment;

    //rest form
    input.elements.username.value ="";
    input.elements.comment.value='';

})


const typeComment = document.querySelector('#h3comment');
const h3 = document.querySelector('#h3');
const h3Text = h3.innerText;

typeComment.addEventListener('input', function (e) {
    e.preventDefault();

    if(typeComment.value.length === 0){
        h3.innerText = h3Text;
    }
    else{
        h3.innerText = typeComment.value;
    }

    
    
})
