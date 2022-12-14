
var fs = require("fs");

var students=[];

exports.prep = ()=>{

   // console.log("Testing");

   return new Promise((resolve, reject)=>{

        fs.readFile("./students.json", (err, data)=>{

            if (err) {reject("unable to read file.");}

            students = JSON.parse(data);

           // console.log(students);

            resolve("File read success.");

        }); 

   });

};



exports.cpa = ()=>{

    return new Promise((resolve, reject)=>{

       let results = students.filter(student => student.program == "CPA");

       (results.length == 0)? reject("No CPA students."):resolve(results);

    });

}

exports.highGPA = ()=>{

    return new Promise((resolve, reject)=>{

        let high = 0;

        let highStudent;

        

        for (let i=0; i<students.length; i++)

        {

            //console.log(students[i].gpa, high);

            if (students[i].gpa > high)

            {

                high = students[i].gpa;

                highStudent = students[i];

            }

        }

        exports.allstudents = ()=>{

            return new Promise((resolve, reject)=>{
        
               let results = students.filter(student => student.program == "CPA");
        
               (results.length == 0)? reject("all students."):resolve(results);
        
            });
        
        }

        (highStudent) ? resolve(highStudent): reject("Failed finding student with highest GPA");

    });
};