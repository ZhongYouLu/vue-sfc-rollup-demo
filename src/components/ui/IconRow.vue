<template>
  <div class="icon-row">
    <slot />
    <Icon :icon="icon" />
  </div>
</template>

<script>
import Icon from '@/components/ui/Icon';

export default /*#__PURE__*/ {
  name: 'IconRow',
  components: {
    Icon,
  },
  props: {
    icon: { type: String, required: true },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/utils.scss';

.icon-row {
  @include content-centered($x: false);

  .icon {
    margin-left: 0.5rem;
    opacity: 0.7;
  }
}
</style>
