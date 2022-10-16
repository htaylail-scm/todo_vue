<template>
     <div class="col-11">
        <div class="card mt-2">
          <div class="row p-3 align-items-center">
            <div class="col-9" :class="{ 'task-complete' :todo.done }">{{ todo.task }}</div>
             <div class="col">
                <button class="btn btn-success me-2">
                  <i class="material-icons mt-1" @click="completeTodo(index)">check</i>
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
  methods: {
    completeTodo(index){
        this.$emit('completeTodo', index)        
    },

    deleteTodo(index){
        this.$emit('deleteTodo', index)
    }
  }
}   
</script>

<style>
</style>
