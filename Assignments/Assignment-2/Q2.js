function gradeAndAge(marks, age) {
    let grade;
    if 
    (marks >= 85) grade = "A";
    else if 
    (marks >= 70) grade = "B";
    else if
     (marks >= 50) grade = "C";
    else grade = "F";
    console.log("Grade:", grade);
    console.log(age >= 18 ? "Adult" : "Minor");
}
gradeAndAge(72, 16);