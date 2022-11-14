class Comment {
    constructor(commentText){
        this.text = commentText,
        this.likesQuantity = 0
    }

    addLike(){
        this.likesQuantity += 1
    }

    static mergeComments(firstCommentText, secondCommentText){
        return `${firstCommentText}, ${secondCommentText}`
    }
}

const firstComment = new Comment('This is first comment');
const secondComment = new Comment('This is second comment');

// console.log(firstComment)

// console.log(firstComment.text)

// console.log(`First comment likes quantity: ${firstComment.likesQuantity}`)
// console.log(`Second comment likes quantity: ${secondComment.likesQuantity}`)


// firstComment.addLike();
// secondComment.addLike();
// console.log(`First comment likes quantity: ${firstComment.likesQuantity}`)
// console.log(`Second comment likes quantity: ${secondComment.likesQuantity}`)

// firstComment.addLike();
// secondComment.addLike();
// console.log(`First comment likes quantity: ${firstComment.likesQuantity}`)
// console.log(`Second comment likes quantity: ${secondComment.likesQuantity}`)

// secondComment.addLike();
// console.log(`First comment likes quantity: ${firstComment.likesQuantity}`)
// console.log(`Second comment likes quantity: ${secondComment.likesQuantity}`)

// firstComment.mergeComments();

let mergeComments = Comment.mergeComments(firstComment.text, secondComment.text);

console.log(mergeComments);