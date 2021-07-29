<template>
  <q-page class="main row justify-center bg-grey-10" :class="$q.screen.lt.md ? '' : 'pc-main'">
    <div class="column structure">
      <KnowledgeView v-for="(knowledge, index) in knowledges" :key="index" :data="knowledge" :indexComp='index'/>
    </div>
  </q-page>
</template>

<script lang="ts">
import KnowledgeView from 'components/KnowledgeView.vue';
import { KnowledgesArray } from '../ts/data'
import { defineComponent, ref, watchEffect } from 'vue';
import { KnowviewModel } from 'src/ts/models';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PageIndex',
  components: {KnowledgeView},

  setup() {
    const { t } = useI18n()
    
    const knowledges = ref<KnowviewModel[]>(KnowledgesArray(t))
    watchEffect(() => { knowledges.value = KnowledgesArray(t) })
    
    return {
      knowledges
    }
  }
});
</script>

<style lang="scss" scoped>

.structure{
  width: 75%;
  @media (min-width: 1023px) {
    width: 85%;
    min-width: 900px;
  }
}

.pc-main{
  min-width: 930px;
}

</style>
