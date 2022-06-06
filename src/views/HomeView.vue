<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import draggable from "vuedraggable";
import { ref, watch } from "vue";

const todoValue = ref("");
type TodoType = {
  id: number;
  todoTitle: string;
};
const drag = ref(false);
const todoList = ref<TodoType[]>([]);

const removeItem = (todoTitle: string) => {
  todoList.value.splice(
    todoList.value.findIndex((item) => item.todoTitle === todoTitle),
    1
  );
};

const addTodo = (todoTitle: string) => {
  todoList.value.push({
    id: Math.random(),
    todoTitle: todoTitle,
  });
  todoValue.value = "";
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

<template>
  <fast-card class="w-96 h-[396px] -mt-48 -ml-48 absolute top-2/4 left-2/4">
    <h1 class="prose text-white sans-serif text-center text-xl font-semibold">
      TODO APP
    </h1>
    <fast-divider role="presentation"></fast-divider>
    <div class="flex justify-between mt-2">
      <fast-text-field
        appearance="filled"
        placeholder="Make Dishes"
        class="ml-2 shrink"
        :value="todoValue"
        @input="todoValue = $event.target.value"
        @keyup.enter="addTodo(todoValue)"
      ></fast-text-field>
      <h3 class="prose text-white sans-serif mr-2 ml-4 text-center">
        Press enter to add TODO
      </h3>
    </div>
    <draggable
      :list="todoList"
      item-key="id"
      class="list-group"
      ghost-class="ghost"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element }">
        <todo-item
          :todoTitle="element.todoTitle"
          @remove="removeItem(element.todoTitle)"
        ></todo-item>
      </template>
    </draggable>
  </fast-card>
</template>
