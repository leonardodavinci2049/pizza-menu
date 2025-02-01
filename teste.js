async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  //console.log(data);

  return data;
}


getTodos()
  .then(todos => {
    console.log(todos);
    console.log("jonas");
  });