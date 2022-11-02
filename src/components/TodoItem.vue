<template>
  <div class="col-11">
    <div class="card mt-2">
      <div class="row p-3 align-items-center">
        <div
          class="col-9"
          :class="{ 'task-complete': todo.done }"
          @dblclick="editToggle = !editToggle"
        >
          <input
            type="text"
            v-model="todo.task"
            class="form-control"
            v-if="editToggle"
            @keyup.enter="editTodo"
          />
          <span v-else>{{ todo.task }}</span>
        </div>
        <div class="col">
          <button class="btn btn-success me-2">
            <i class="material-icons mt-1" @click="completeTodo(index)"
              >check</i
            >
          </button>
          <button class="btn btn-danger" @click="deleteTodo(index)">
            <i class="material-icons mt-1">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data: () => ({
    editToggle: false,
  }),

  methods: {
    completeTodo(index) {
      this.$emit("completeTodo", index);
    },

    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },

    editTodo() {
      this.$emit("editTodo", { todo: this.todo, index: this.index });
      this.editToggle = false;
    },
  },
};
</script>

<style>
</style>
