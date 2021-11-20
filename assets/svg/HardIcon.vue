<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 0H2C0.89543 0 0 0.89543 0 2V24C0 25.1046 0.89543 26 2 26H5C6.10457 26 7 25.1046 7 24V2C7 0.89543 6.10457 0 5 0Z"
      :fill="color"
    />
    <path
      d="M19 3H4C3.44772 3 3 3.44772 3 4V25C3 25.5523 3.44772 26 4 26H19C19.5523 26 20 25.5523 20 25V4C20 3.44772 19.5523 3 19 3Z"
      :fill="color"
    />
    <path
      d="M19.5 0H4.5C4.22386 0 4 0.223858 4 0.5C4 0.776142 4.22386 1 4.5 1H19.5C19.7761 1 20 0.776142 20 0.5C20 0.223858 19.7761 0 19.5 0Z"
      :fill="color"
    />
    <path
      d="M17 1H2C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H17C17.5523 3 18 2.55228 18 2C18 1.44772 17.5523 1 17 1Z"
      :fill="color"
    />
    <path d="M10 2H16V17L13 14L10 17V2Z" fill="white" />
  </svg>
</template>

<script>
export default {
  name: 'HardIcon',
  props: ['color', 'width', 'height'],
}
</script>

<style scoped></style>
