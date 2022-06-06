<script setup lang="ts">
const props = defineProps({
  todoTitle: String,
});
const emit = defineEmits(["remove"]);

const removeListener = () => {
  emit("remove", props.todoTitle);
};
</script>

<template>
  <div class="ml-2 mr-2 mt-3">
    <fast-button appearance="stealth" class="w-full header-button">
      <h2 class="prose sans-serif text-white" slot="start">{{ todoTitle }}</h2>
      <div @click="removeListener" slot="end">
        <fast-checkbox @click="removeListener"></fast-checkbox>
      </div>
    </fast-button>
  </div>
</template>

<style>
.header-button::part(control) {
  justify-content: space-between;
}
</style>
