const users = [
  { id:1, name:"Alice", isActive:true, membership:"premium" },
  { id:2, name:"Bob", isActive:false, membership:"premium" },
  { id:3, name:"Charlie", isActive:true, membership:"basic" },
  { id:4, name:"David", isActive:true, membership:"premium" },
  { id: 5, name: "Eve", isActive: false, membership: "basic" }
];

const result = users.filter(u=>u.isActive && u.membership==="premium");
console.log(result);
