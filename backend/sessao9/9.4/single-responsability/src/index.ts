type Discipline = {
  name:string;
  grade:number;
  letterGrade?:string;
};

type Student = {
  name:string;
  disciplines:Discipline[];
  school?:string;
}

// function setApproved(students:Array<Student>) {
//   const studentWithLetterGrade = students.map((student) => {
//     const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
//       if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
//       else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
//       else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
//       else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
//       else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
//       else discipline.letterGrade = 'F';
//       return discipline;
//     });
//     return {
//       name: student.name,
//       disciplines: disciplinesWithLetterGrade,
//     };
//   });
//   const approvedStudents = studentWithLetterGrade.filter(({ disciplines }) => {
//     disciplines.every((discipline) => discipline.grade > 0.7);
//   });
//   approvedStudents.map(({ name, disciplines }) => {
//     console.log(`A pessoa com nome ${name} foi aprovada!`);
//     disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
//   });
// }

const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const getGradeLetter = (gradeNumber:number):string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

const getLetterGrades = (discipline:Discipline):Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

const percentageGradesIntoLetters = (student:Student):Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

// const percentageGradesIntoLetters = ({ name: stendtName, disciplines }: Student):
//   {name:string, disciplines:Discipline[]} => ({
//     name: stendtName,
//     // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
//     disciplines: disciplines.map(({ name, grade }) => {
//       let letterGrade;

//       if (grade >= 0.9) letterGrade = 'A';
//       else if (grade >= 0.8) letterGrade = 'B';
//       else if (grade >= 0.7) letterGrade = 'C';
//       else if (grade >= 0.6) letterGrade = 'D';
//       else if (grade >= 0.1) letterGrade = 'E';
//       else letterGrade = 'F';

//       return { name, grade, letterGrade };
//     }),
// });

const approvedStudents = ({ disciplines }:Student):boolean => disciplines.every(
  ({ grade }) => grade > 0.7,
);

const updateApprovalData = (student:Student):void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada!`);
  student.disciplines.forEach(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students:Student[]):void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

const students = [
  {
    name: 'Marx',
    disciplines: [
      { name: 'math', grade: 0.8 },
      { name: 'history', grade: 0.6 },
    ],
  },
  {
    name: 'Weber',
    disciplines: [
      { name: 'math', grade: 0.8 },
      { name: 'history', grade: 0.9 },
    ],
  },
];

setApproved(students);

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};