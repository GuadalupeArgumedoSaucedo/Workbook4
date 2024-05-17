let students = [ 
    {name: "Zephaniah", scores: [100, 96, 99, 92]}, 
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]}, 
    {name: "Siddalee", scores: [86, 72, 92]}, 
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]}, 
    {name: "Elisha", scores: [89, 100]}, 
    {name: "Ezra", scores: [100, 99, 100, 87]} 
]; 

// Outer loop for student
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let sum = 0;
    let numOfScores = student.scores.length;

    // Inner loop for scores
    for (let j = 0; j < numOfScores; j++) {
        sum += student.scores[j];
    }

    // Average
    let average = sum / numOfScores;
    console.log(`${student.name}'s average score is: ${average}`);
}



