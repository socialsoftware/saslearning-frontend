<template>
  <div class="empty-state">
    <p><slot name="message"/></p>
    <div>
      <slot name="actions"/>
    </div>
  </div>
</template>

<style lang="scss">
  .empty-state {
    height: 100%;
    border-radius: 0.2rem;
    border: 0.1rem solid $light-gray;
  }
</style>
