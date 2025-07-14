// cashier.js

const students = [
  {
    id: 1,
    name: "John Doe",
    grades: [80, 90, 70, 85]
  },
  {
    id: 2,
    name: "Jane Smith",
    grades: [95, 88, 92, 91]
  },
  {
    id: 3,
    name: "Alex Johnson",
    grades: [60, 75, 70, 65]
  }
];

function calculateAverageGrades(studentArray) {
  return studentArray.map(student => {
    const sum = student.grades.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / student.grades.length;
    return {
      id: student.id,
      name: student.name,
      averageGrade: parseFloat(avg.toFixed(2))
    };
  });
}

function findTopStudent(studentArray) {
  const studentsWithAvg = calculateAverageGrades(studentArray);
  return studentsWithAvg.reduce((top, current) => {
    return current.averageGrade > top.averageGrade ? current : top;
  });
}

function sortStudentsByGrade(studentArray) {
  const studentsWithAvg = calculateAverageGrades(studentArray);
  return studentsWithAvg.sort((a, b) => b.averageGrade - a.averageGrade);
}

// === TESTING THE FUNCTIONS ===
console.log("Average Grades:");
console.log(calculateAverageGrades(students));

console.log("\nTop Student:");
console.log(findTopStudent(students));

console.log("\nSorted Students by Average Grade:");
console.log(sortStudentsByGrade(students));
