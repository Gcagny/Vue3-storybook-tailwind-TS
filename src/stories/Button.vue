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
  // Défintion des Events & Props
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

<style>
  /* Classes Partagées */
  .ariane-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 30px;
    gap: 10px;
    font-size: 13px;
  }
  .ariane-button:hover {
    opacity: 0.5;
  }
  .ariane-button-disabled {
    cursor: default;
  }
  .ariane-button-disabled:hover {
    opacity: 1 !important;
  }
  .ariane-button-no-text {
    height: 31px;
    border-radius: 3px;
    border: 1px solid aquamarine
  }
  .filled, .outlined  {
    @apply ariane-button-no-text;
  }
  /* Filled */
  .filled {
    background-color: aquamarine;
    color: white;
  }
  .filled.ariane-button-disabled {
    background-color: #EBEBEB;
    border-color: #EBEBEB;
  }
  /* Outlined */
  .outlined {
    background-color: white;
    color: aquamarine;
    border: 1px solid aquamarine
  }
  .outlined.ariane-button-disabled {
    color: #EBEBEB;
    border-color: #EBEBEB;
  }
  /* Text */
  .text {
    color: aquamarine
  }
  .text.ariane-button-disabled {
    color: #EBEBEB
  }
  /* Size */
  .small {
    width: 100px;
  }
  .medium {
    width: 150px;
  }
  .large {
    width: 200px;
  }
  .no-label {
    padding: 8px;
  }
</style>