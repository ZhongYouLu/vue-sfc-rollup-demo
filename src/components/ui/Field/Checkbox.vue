<template>
  <RadioRow>
    <label>
      <input v-model="mutableValue" v-bind="$attrs" type="checkbox" :true-value="yes" :false-value="no" />
      <span>{{ text }}</span>
    </label>
  </RadioRow>
</template>

<script>
import RadioRow from '@/components/ui/RadioRow';

export default /*#__PURE__*/ {
  name: 'FieldCheckbox',
  components: {
    RadioRow,
  },
  inheritAttrs: false,
  props: {
    value: { type: [String, Number, Boolean], default: null },
    yes: { type: [String, Number, Boolean], default: 1 },
    no: { type: [String, Number, Boolean], default: 0 },
    text: { type: String, default: 'Yes' },
  },
  emits: ['input'],
  computed: {
    mutableValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
