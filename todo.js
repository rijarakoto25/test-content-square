const todos = [
  {
    id: 1,
    description: 'Faire les courses',
    memo: 'Pomme, poire, lessive',
    priority: 1,
    updatedAt: Date.now(),
  },
  {
    id: 2,
    description: 'Envoyer le courrier',
    memo: 'Urgent',
    priority: 2,
    updatedAt: Date.now(),
  },
];

let id = 3;

/*
 * GET todos listing.
 */
exports.findAll = function (_, res) {
  res.json(200, todos);
};

/*
 * GET todo by identifier.
 */
exports.findById = function (req, res) {
  const id = parseInt(req.params.id)
  const todo = todos.find(todo => todo.id === id)
  res.status(200).json(todo)
};

/*
 * Create a todo.
 */
exports.addTodo = function (req, res) {
  const newTodo = request.todos
  newTodo.id =  todos.length +1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

/*
 * Update a todo by its identifier.
 */
exports.updateTodo = function (req, res) {
  const id = request.params.id;
  if (todos[id]){
    const updatedTodo = JSON.parse(request.body);
    todos[id] = updatedTodo;
    res.status(204).send();
  }else{
    res.json(404, { error: 'Not found' });
  }
};

/*
 * Delete a todo
 */
exports.deleteTodo = function (req, res) {
  const found = todos.some(todo => todo.id === req.params.id);
  if (!found) {
    res.status(400).json({ msg: `No found ${req.params.id}` });
  } else {
    todos.filter(todo => todo.id !== req.params.id);
    res.json(todos);
  }
};
