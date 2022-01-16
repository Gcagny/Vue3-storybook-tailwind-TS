<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup lang="ts">
  import './button.css';
  import { computed } from 'vue';
  interface Props {
    label: {
      type: string,
      required: true
    },
    primary: boolean,
    size: string,
    backgroundColor: string
  }
  const props = withDefaults(defineProps<Props>(), { primary: false });
  const emit = defineEmits({
    click: () => true
  });
  const classes = computed (() => ({
    'storybook-button': true,
    'storybook-button--primary': props.primary,
    'storybook-button--secondary': !props.primary,
    [`storybook-button--${props.size || 'medium'}`]: true
  }));
  const style = computed(() => ({
    'backgroundColor': props.backgroundColor
  }));

  function onClick () {
    emit('click');
  }
</script>
