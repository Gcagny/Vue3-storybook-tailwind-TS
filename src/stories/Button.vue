<template>
  <button type="button" :class="[classes, buttonType, buttonSize]" @click="onClick">
    <i :class="'fas ' + icon" v-if="icon && icon.length > 0" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  interface Props {
    label: string,
    outlined?: boolean,
    text?: boolean,
    small?: string,
    large?: boolean,
    icon?: string
  }
  const props = defineProps<Props>();
  const emit = defineEmits({
    click: () => true
  });
  const buttonType = computed(() => {
    if (props.outlined) return 'outlined';
    else if (props.text) return 'text';
    else return 'filled';
  });
  const buttonSize = computed(() => {
    if (props.small) return 'small';
    else if (props.large) return 'large';
    else return 'medium';
  })
  const classes = computed (() => ({
    'ariane-button': true,
  }));

  function onClick () {
    emit('click');
  }
</script>

<style>
  .ariane-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .padding-button {
    padding: 8px 30px;
    border-radius: 3px;
  }
  .filled {
    background-color: aquamarine;
    color: white;
  }
  .outlined {
    background-color: white;
    color: aquamarine;
  }
  .filled, .outlined  {
    @apply padding-button;
  }
</style>