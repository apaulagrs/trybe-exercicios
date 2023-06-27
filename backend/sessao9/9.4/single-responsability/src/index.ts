type Discipline = {
  name:string;
  grade:number;
  letterGrade?:string;
};

type Student = {
  name:string;
  disciplines:Discipline[];
}

function setApproved(students:Array<Student>) {
  const studentWithLetterGrade = students.map((s) => {
    const disciplinesWithLetterGrade = s.disciplines.map((d) => {
      if (d.grade >= 0.9) d.letterGrade = 'A';
      else if (d.grade >= 0.8) d.letterGrade = 'B';
      else if (d.grade >= 0.7) d.letterGrade = 'C';
      else if (d.grade >= 0.6) d.letterGrade = 'D';
      else if (d.grade >= 0.1) d.letterGrade = 'E';
      else d.letterGrade = 'F'

      return d;
    });

    return {
      name: s.name,
      disciplines: disciplinesWithLetterGrade,
    };
  });

  const approvedStudents = studentWithLetterGrade.filter(({ disciplines }) => {
    disciplines.every((d) => d.grade > 0.7);
  });

  approvedStudents.map(({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
  });
};

const studentsA = [
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

setApproved(studentsA);