import { useStore } from 'vuex'
import { storeKey } from '../store/index'
import { computed } from 'vue'



const headerHeight = () => {
    const store = useStore(storeKey)
    const header = computed(() => store.state.main.headerHeight)
    return header.value
}

export const KnowledgeViewHeight = (minHeight: number) => `height: calc((100vh - ${headerHeight()}px) / 2); min-height: ${minHeight}px`