// 1. Select div
const container = document.getElementById("container");

// 2. Create ul
const ul = document.createElement("ul");
container.appendChild(ul);

// Student data
const students = [
  { name: "Diksha", marks: 90 },
  { name: "Rishika", marks: 85 },
  { name: "Riya", marks: 78 }
];

// 3 & 4. Create li items
students.forEach(student => {
  const li = document.createElement("li");
  li.textContent = `${student.name} – ${student.marks}`;

  // 5. Change background color
  li.style.backgroundColor = "#e0f7fa";
  li.style.margin = "5px";
  li.style.padding = "8px";

  ul.appendChild(li);
});
