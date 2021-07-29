<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated :style="'height:' + headerHeight + 'px'">
      <q-toolbar style="height: 100%">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <div class="column q-ml-lg justify-center" style="height: 100%" >
          <q-toolbar-title style="flex: inherit;" :style="$q.screen.lt.md ? 'white-space: normal; font-size: 18px;' : ''">
            {{t('general.welcomeMessage')}}
          </q-toolbar-title>
          <div v-show="!$q.screen.lt.md">
            <span style="display: block">{{t('general.welcomeSubMessage1')}}</span>
            <span style="display: block">{{t('general.welcomeSubMessage2')}}</span>
          </div>
        </div>
        <q-space />
        <LanguageSwitcher/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="270"
      overlay
      class="bg-grey-1"
    >
      <q-list>
        <q-item class="row justify-center">
          <q-avatar class="shadow-8 q-mt-md" size="200px">
            <img src="../assets/img/foto_personal.png" >
          </q-avatar>
        </q-item>
        <q-item-label
          header
          class="text-subtitle1 text-grey-10"
        >
          {{t('personalData.title')}}:
        </q-item-label>

        <EssentialData
          v-for="link in dataList"
          :key="link.title"
          v-bind="link"
        />

        <q-separator spaced></q-separator>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import LanguageSwitcher from 'components/LanguageSwitcher.vue'
import EssentialLink from 'components/EssentialLink.vue'
import EssentialData from 'components/EssentialData.vue'

import { defineComponent, ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { storeKey } from '../store/index'
import { useI18n } from 'vue-i18n';

import { getPersonalData, getLinksData } from 'src/ts/data'
import { PersonalData, LinkedData } from 'src/ts/models'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    LanguageSwitcher,
    EssentialData
  },

  setup () {
    const $store = useStore(storeKey)
    const { t } = useI18n()

    const leftDrawerOpen = ref(false)
    
    const dataList = ref<PersonalData[]>(getPersonalData(t))
    const linksList = ref<LinkedData[]>(getLinksData(t))
    watchEffect(() => { dataList.value = getPersonalData(t) })
    watchEffect(() => { linksList.value = getLinksData(t) })

    const headerHeight = computed({
      get: () => $store.state.main.headerHeight,
      set: val => $store.commit('main/SET_HEADER_HEIGHT', val)
    })

    headerHeight.value = 100

    return {
      dataList,
      linksList,
      headerHeight,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      t
    }
  }
})
</script>
