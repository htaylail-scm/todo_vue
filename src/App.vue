<template>
  <div class="container mt-5">
    <AddTask @addTask="addTask" />
    <notifications class="mt-3" />
    <div class="row justify-content-center mt-3">
      <div class="col-11" v-for="(todo, index) in todos" :key="index">
        <div class="card mt-2">
          <div class="row p-3 align-items-center">
            <div class="col-9" :class="{ 'task-complete': todo.done }">
              {{ todo.task }}
            </div>
            <div class="col">
              <button class="btn btn-success me-2">Check</button>
              <button class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";

export default {
  components: {
    AddTask,
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
