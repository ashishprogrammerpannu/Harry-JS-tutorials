
console.log("Saying hello to javascript.");

let add_success = function (name='Buddy',gpa) {
    if (gpa!=undefined & gpa>=3.3) {   
        return`Hello ${name}. We are happy because you to inform that you are Selected.Your ${gpa} scores seems enough to give this oppurtunity. Thank you ${name}, for paying attention towards our Bablu Baabu University.`
    }
    else if(gpa!=undefined & gpa<3.3){
        return`Hello ${name}. We are sad to inform you that you are not Selected. Your ${gpa} scores are the main reason that you are not selected. Good luck, for next time. Thank you ${name}, for paying attention towards our Bablu Baabu University.`
    }
    else{
        return`Hello ${name}. Some part of information is either incorrect or not filled. Please check it.`
    }
}

// ajay = add_success('Ajay');
// console.log(ajay);