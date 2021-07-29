
<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    :label="t('general.lenguageChoiser')"
    borderless
    emit-value
    map-options
    options-dense
    :style="$q.screen.lt.md ? 'min-width: 140px;' : 'min-width: 150px;'"
    dark
    
  />
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LanguageSwitcher',

  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
     
    return {
      locale,
      localeOptions: [
        { value: 'es', label: 'Español' },
        { value: 'en-US', label: 'English' }
      ],
      t,
    }
  }
})
</script>
