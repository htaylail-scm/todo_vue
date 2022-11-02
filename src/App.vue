<template>
  <div class="container mt-5">
    <notifications class="mt-3" />
    <AddTask @addTask="addTask" />
    <transition-group
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__backOutRight"
      class="row justify-content-center mt-3"
    >
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @completeTodo="completeTodo"
        @deleteTodo="deleteTodo"
        @editTodo="editTodo"
      />
    </transition-group>
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
      });
    },

    deleteTodo(index) {
      if (confirm("Are you sure to delete this task?")) {
        this.todos.splice(index, 1);
        this.$notify({
          title: "Deleted",
          text: "Deleted Task!",
          type: "error",
        });
      }
    },

    completeTodo(index) {
      this.todos[index].done = true;
      this.$notify({
        title: "complete",
        text: "Complete Task!",
      });
    },

    editTodo(todo, index) {
      this.todos[index] = todo;
      this.$notify({
        title: "Edited",
        text: "Updated Task!",
        type: "success",
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
