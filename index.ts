import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  // gets error using the interface
  // const ID = todo.ID;
  // const title = todo.Title;
  // const finished = todo.finished;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(`
  //   The Todo with ID: ${id}
  //   Has a title of : ${title}
  //   Is it finished? ${completed}
  // `);
  // logTodo(id, completed , title); //getting errors with function type
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of : ${title}
  Is it finished? ${completed}
`);
};
