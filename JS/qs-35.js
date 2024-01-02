/*Find and Modify:*
   35 -> Q: Given an array of objects with 'id' properties, use the find method to locate an object with
    a specific 'id' and update its 'status' property to 'completed'.*/

const array = [
   { id: 1, status: "uncompleted" },
   { id: 2, status: "uncompleted" },
   { id: 3, status: "uncompleted" },
   { id: 4, status: "uncompleted" },
   { id: 5, status: "uncompleted" },
   { id: 6, status: "uncompleted" },
   { id: 7, status: "uncompleted" },
];

const updatedArray = array.find((item) => item.id === 4);
updatedArray.status = "completed";

const newArray = array.map((item) => {
   if (item.id == updatedArray.id) {
      return {
         id: updatedArray.id,
         status: updatedArray.status,
      }
   }

   return item;
});

console.log(newArray);