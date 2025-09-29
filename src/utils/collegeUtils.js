export function getAllCourses(colleges = []) {
  const courses = new Set();
  colleges.forEach(college => {
    college.courses.forEach(course => courses.add(course));
  });
  return Array.from(courses).sort();
}

export function filterCollegesByState(colleges, state) {
  if (!state) return [];
  return colleges.filter(college => 
    college.state.toLowerCase().includes(state.toLowerCase())
  );
}

export function getCollegesByExam(colleges, examType) {
  return colleges.filter(college => college.examEligibility[examType]);
}

export function sortCollegesByCutoff(colleges, examType) {
  const examIndex = examType === 'jee' ? 0 : examType === 'mhtcet' ? 1 : 2;
  return [...colleges].sort((a, b) => b.cutoff[examIndex] - a.cutoff[examIndex]);
}
