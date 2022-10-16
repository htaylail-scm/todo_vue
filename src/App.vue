<template>
  <div class="container mt-5">
    <notifications class="mt-3" />
    <AddTask @addTask="addTask" />    
    <div class="row justify-content-center mt-3">
      <TodoItem v-for="(todo, index) in todos" 
      :key = "index" 
      :todo = "todo"
      :index = "index" 
      @completeTodo = "completeTodo"
      @deleteTodo = "deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: {
    AddTask,
    TodoItem,
  },
  name: "App",
  data: () => ({
    todos: [],
  }),
  methods: {
    addTask(todo) {
      this.todos.push(todo);
      this.$notify({
        title: "Created",
        text: "Created Task!",
        type: "success",
      })
    },

    deleteTodo(index) {
      if (confirm("Are you sure to delete this task?")) {
        this.todos.splice(index, 1);
        this.$notify({
          title: "Deleted",
          text: "Deleted Task!",
          type: "error",
        })
      }
    },

    completeTodo(index) {
      this.todos[index].done = true;
      this.$notify({
        title: "complete",
        text: "Complete Task!",
      });
    },
  },
};
</script>

<style>
label {
  color: white;
}
.card {
  border-radius: 1rem !important;
}
</style>
