<template>
  <button type="button" :class="[classes, buttonType, buttonSize]" @click="onClick()">
    <i :class="'fas ' + icon" v-if="icon && icon.length > 0" />
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  interface Props {
    label?: string,
    outlined?: boolean,
    text?: boolean,
    small?: boolean,
    large?: boolean,
    icon?: string,
    disabled?: boolean
  }
  // Définition des Events & Props
  const props = defineProps<Props>();
  const emit = defineEmits({
    click: () => true,
    'click-disabled': () => true
  });

  // On vérifie si le bouton possède des props valide
  if (!props.label && !props.icon) throw new Error('Buttons must have at least a Label or an Icon Props !');
  

  // Génération des classes
  const buttonType = computed(() => {
    if (props.outlined) return 'outlined';
    else if (props.text) return 'text';
    else return 'filled';
  });
  const buttonSize = computed(() => {
    if (!props.label) return 'no-label';
    if (props.small) return 'small';
    else if (props.large) return 'large';
    else return 'medium';
  })
  const classes = computed (() => ({
    'ariane-button': true,
    'ariane-button-disabled': props.disabled,
  }));

  // Génération de l'Event
  function onClick () {
    if (props.disabled) emit('click-disabled');
    else emit('click');
  }
</script>

<style scoped>
  /* Classes Partagées */
  button.ariane-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;
    gap: 10px;
  }
  button.ariane-button:hover {
    opacity: 0.5;
  }
  button.ariane-button-disabled {
    cursor: default;
  }
  button.ariane-button-disabled:hover {
    opacity: 1 !important;
  }
  button.ariane-button-bordered {
    height: 31px;
    border-radius: 3px;
    border: 1px solid;
    @apply border-main-primary
  }
  .filled, .outlined  {
    @apply ariane-button-bordered;
  }
  /* Filled */
  button.filled {
    color: #fff;
    @apply bg-main-primary border-main-primary;
  }
  button.filled.ariane-button-disabled {
    @apply bg-main-text-disabled border-main-text-disabled;
  }
  /* Outlined */
  button.outlined {
    background-color: #FFF;
    @apply border-main-primary text-main-primary;
  }
  button.outlined.ariane-button-disabled {
    @apply text-main-text-disabled border-main-text-disabled;
  }
  /* Text */
  button.text {
    @apply text-main-primary;
  }
  button.text.ariane-button-disabled {
    @apply text-main-text-disabled;
  }
  /* Size */
  button.small {
    width: 100px;
    @apply text-sm;
  }
  button.medium {
    width: 150px;
    @apply text-base;
  }
  button.large {
    width: 200px;
    @apply text-lg;
  }
  button.no-label {
    padding: 8px;
  }
</style>