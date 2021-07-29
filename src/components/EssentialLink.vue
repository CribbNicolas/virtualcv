<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="link === 'pdf_download' ? downloadPdf() : redirect(link)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section >

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ newCaption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { getModDate } from '../ts/pdfMetadata'
import pdfcv from '../assets/pdf/cv_nicolas_cribb.pdf'

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

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  setup(props){
    const newCaption = ref(props.caption)
    const downloadPdf = async () => {
      await axios({
          url: pdfcv as string,
          method: 'GET',
          responseType: 'blob',
      }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'cv_nicolas_cribb.pdf');
          document.body.appendChild(link);
          link.click();
      });
    }

    const redirect = (link) => {
      window.open(link, '_blank')
    }

    if(props.link === 'pdf_download'){ 
      (async () => {
        const pdfDate = await getModDate(pdfcv)
        newCaption.value = newCaption.value.replace(/yyyy/i, pdfDate.year)
        newCaption.value = newCaption.value.replace(/mm/i, pdfDate.month)
        newCaption.value = newCaption.value.replace(/dd/i, pdfDate.day)
      })().catch((err) => {
        console.log('error to get pdfDate value on EssentialLink')
        console.log(err)
      });
    }

  return {
    downloadPdf, newCaption, redirect
  }
  }
})
</script>
