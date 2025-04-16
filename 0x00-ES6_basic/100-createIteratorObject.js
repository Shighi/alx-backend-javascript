// Function to create an iterator for employees across all departments
export default function createIteratorObject(report) {
  // Flatten all employees from all departments into a single array
  const employees = [];
  
  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }
  
  // Return an iterable object
  return employees;
}
