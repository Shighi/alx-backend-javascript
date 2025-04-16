// Implementing block scoping to prevent variable overwriting
export default function taskBlock(trueOrFalse) {
  // Using const for block scoping since these variables won't be reassigned
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // New variables in this block scope that don't affect outer variables
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
