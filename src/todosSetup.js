import Inicialtodos from './mock/todos';
import { computed, ref} from 'vue'
//import todos from './mock/todos';

const todos = ref([...Inicialtodos]);

const todosIncompleted= computed (() => todos.value.filter(t => !t.completed));

const todosCompleted= computed (() => todos.value.filter(t => t.completed));


const toggle = (id) =>{
const todo= todos.value.find (t => t.id === id);
if(todo?.completed !== undefined){
    todo.completed =!todo.completed;

}

};

const deleteTodo = (id) => {
    todos.value= todos.value.filter(t => t.id !== id);
};

const todosFactory =() => ({todosIncompleted,todosCompleted, toggle,deleteTodo});

export {todosFactory}; 

