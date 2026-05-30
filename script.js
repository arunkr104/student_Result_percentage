function calculateResult(){

    let name = document.getElementById("name").value.trim();

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    // Validation for Name
    if(name === ""){
        alert("Please enter student name.");
        return;
    }

    // Validation for Empty Marks
    if(
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === "" ||
        document.getElementById("m4").value === "" ||
        document.getElementById("m5").value === ""
    ){
        alert("Please enter all subject marks.");
        return;
    }

    // Validation for Marks Range
    if(
        m1 < 0 || m1 > 100 ||
        m2 < 0 || m2 > 100 ||
        m3 < 0 || m3 > 100 ||
        m4 < 0 || m4 > 100 ||
        m5 < 0 || m5 > 100
    ){
        alert("Marks must be between 0 and 100.");
        return;
    }

    let total = m1 + m2 + m3 + m4 + m5;

    let percentage = total / 5;

    let grade;

    if(percentage >= 90){
        grade = "A+";
    }
    else if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 70){
        grade = "B";
    }
    else if(percentage >= 60){
        grade = "C";
    }
    else if(percentage >= 40){
        grade = "D";
    }
    else{
        grade = "F";
    }

    let status;

    if(percentage >= 40){
        status = "PASS";
    }
    else{
        status = "FAIL";
    }

    document.getElementById("resultCard").style.display = "block";

    document.getElementById("studentName").innerHTML =
        "Student Name: " + name;

    document.getElementById("total").innerHTML =
        total + " / 500";

    document.getElementById("percentage").innerHTML =
        percentage.toFixed(2) + "%";

    document.getElementById("grade").innerHTML =
        grade;

    document.getElementById("status").innerHTML =
        status;
}