<template>
  <q-item class="column">
    <q-item-label class="text-grey-10">
      {{title}}:
    </q-item-label>
    <q-item-label caption class="text-grey-10">
      {{caption}}
    </q-item-label>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

  }
})
</script>
