<template>
  <div>
    <div v-if="!$q.screen.lt.md" name="knowview" class="relative-position shadow-17 component q-mt-sm" :style="height">
      <div class="content-container" style="width: 60%;">
        <q-img v-show="showDesc && $q.screen.gt.md" :src="data.cards[indexRef].img" style="position: absolute; right: 10%; top: 35%; height: 140px; max-width: 150px" />
      </div>
      <div  class="content column items-center justify-evenly q-py-xs">
        <div @click="disableAbilities ? '' : selectAbility(index)" v-for="(lenguage, index) in data.cards" :key="index" :style="'left:' + ((((index - Math.floor(data.cards.length / 2)) * (index - Math.ceil(data.cards.length / 3))) * 12) - 80) + 'px' " class="card row justify-around">
            <div class="ability text-grey-3 q-ma-xs">{{lenguage.name}}</div>
            <q-rating readonly size="calc(10px + 1vw)" v-model="lenguage.stars" :max="5" class='stars'/>
        </div>
      </div>
      <div class="column items-start gradient">
        <div class="col-3 relative-position row">
          <div style="position: absolute; top: -8px; left: -19px">
            <q-btn icon="palette" unelevated dense round size="13px" @click="showColorPicker = !showColorPicker" class="palette-button"></q-btn>
          </div>
          <q-color v-show="showColorPicker" style="position: absolute; top: 60px;" v-model="rgbSelected" no-header no-footer default-view="spectrum" format-model="rgb" class="my-picker" />
          <span class="title q-pl-lg" :style="'font-size: calc(' + data.title.size + 'px + 0.8vmax);'" >{{data.title.label}}</span>
        </div>
        <div class='col-9 desc-bg'>
          <div v-show="showDesc" name="descripcion" class="descripcion" />
        </div>
      </div>
    </div>

    <div v-if="$q.screen.lt.md" name="knowview" class="relative-position shadow-17 component q-mt-sm" :style="height">
      <div class="content-container" ></div>
      <div class="column items-start gradient">
        <div class="col-3 relative-position row" style="width: 90%;">
          <div style="position: absolute; top: -8px; left: -19px">
            <q-btn icon="palette" :style="'background:' + rgbSelected + ';color: white'" dense round size="13px" @click="showColorPicker = !showColorPicker" class="palette-button"></q-btn>
          </div>
          <q-color v-show="showColorPicker" style="position: absolute; z-index:90 ;top: 60px;" v-model="rgbSelected" no-header no-footer default-view="spectrum" format-model="rgb" class="my-picker" />
          <span class="title q-pt-md" :style="'font-size: calc(' + data.title.size + 'px + 1vmax);'" style="padding-left: 13%;">{{data.title.label}}</span>
        </div>
        <div class="col-8 content column justify-center">
          <div @click="disableAbilities ? '' : selectAbility(index)" v-for="(lenguage, index) in data.cards" :key="index" class="card row justify-around">
              <div class="ability text-grey-3 q-mx-xs q-my-sm">{{lenguage.name}}</div>
              <q-rating readonly size="calc(10px + 1vw)" v-model="lenguage.stars" :max="5" class='stars'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, PropType, onMounted, watchEffect, onUpdated } from 'vue';
import { KnowledgeViewHeight } from 'src/ts/store';
import { typed } from 'src/ts/functions';
import { KnowviewModel } from '../ts/models';

export default defineComponent({
  name: 'KnowledgeView',
  props:{
    indexComp: {
      type: Number,
      default: 1,
    },
    data: {
      type: Object as PropType<KnowviewModel>,
      default: () => ({}),
    },
  },
  
  setup(props) {
    const height = KnowledgeViewHeight(400)
    const showDesc = ref(false)
    const disableAbilities = ref(false)
    const indexRef = ref(0)
    const documentRef = ref<HTMLElement>()
    const rgbSelected = ref(`rgba(${props.data.color.red}, ${props.data.color.green}, ${props.data.color.blue}, 1)`)
    const showColorPicker = ref(false)
    let rgb: Array<string> 

    onMounted(() => {
      documentRef.value = document.getElementsByName('knowview')[props.indexComp]
      
      watchEffect(() => {
      rgb = rgbSelected.value.replace(/[^\d,]/g, '').split(',');
      documentRef.value?.style.setProperty('--bg-r', `${rgb[0]}`)
      documentRef.value?.style.setProperty('--bg-g', `${rgb[1]}`)
      documentRef.value?.style.setProperty('--bg-b', `${rgb[2]}`)
      })
    })

    onUpdated(() => {
      documentRef.value = document.getElementsByName('knowview')[props.indexComp]
      
      watchEffect(() => {
      rgb = rgbSelected.value.replace(/[^\d,]/g, '').split(',');
      documentRef.value?.style.setProperty('--bg-r', `${rgb[0]}`)
      documentRef.value?.style.setProperty('--bg-g', `${rgb[1]}`)
      documentRef.value?.style.setProperty('--bg-b', `${rgb[2]}`)
      })
    })

    const selectAbility = (ability: number) => {
      // Index represent a number component for a correct take of HtmlElement
      typed(document.getElementsByName('descripcion')[props.indexComp], props.data.cards[ability].desc, props.data.cards[ability].descAnimationTime)
      indexRef.value = ability
      disableAbilities.value = true
      setTimeout(() => {
        disableAbilities.value = false
      }, props.data.cards[ability].descAnimationTime)

      showDesc.value = true
    }


    return { height, showDesc, disableAbilities, indexRef, rgbSelected , showColorPicker, selectAbility };
  },
});
</script>

<style lang="scss" scoped>

$bg-color: rgb(37, 141, 118);

.component{
  --border-color: rgba(calc(var(--bg-r) + 50), calc(var(--bg-g) - 60), calc(var(--bg-b) + 45), 0.4);
  // Background
  --bg-r: 37;
  --bg-g: 141;
  --bg-b: 118;
  --bg-1: rgb(var(--bg-r), var(--bg-g), var(--bg-b));
  --bg-2: rgb(calc(var(--bg-r) - 10), calc(var(--bg-g) - 20), calc(var(--bg-b) - 35));
  // Gradient
  --gr-r: var(--bg-r);
  --gr-g: calc(var(--bg-g) + 55);
  --gr-b: calc(var(--bg-b) - 70);
  --gr-1: rgb(var(--gr-r), var(--gr-g), var(--gr-b));
  --gr-2: rgb(calc(var(--gr-r) + 20), var(--gr-g), calc(var(--gr-b) + 60));

  --text-shadow: rgba(var(--gr-r), var(--gr-g), var(--gr-b), 0.75);

  border-radius: 20px;
  background: var(--bg-1);
  border: 3px solid var(--border-color);
}
.gradient{
  padding: 0.8vw 1vw 1vw 1.4vw;
  position: relative;
  z-index: 10;
  border-radius: 20px;
  background: linear-gradient(120deg, var(--gr-1) 0%, var(--gr-2) 30%, rgba(0, 0, 0, 0) 60%);
  @media (max-width: 1023px) {
    background: linear-gradient(120deg, var(--gr-1) 0%, var(--gr-2) 20%, rgba(0, 0, 0, 0) 50%);
  }
  width: 100%;
  height: 100%;
}

.palette-button{
  color: var(--bg-1);
}

.logo{
  position: absolute;
  object-fit: contain;
  height: 200px;
  top: 50%;
  left: 10%;
}

.content-container{
  border-radius: 20px;
  clip-path: circle(65.0% at 70% 50%);
  box-shadow: inset 35px 3px 40px rgba(0, 0, 0, 0.5);
  background-color: var(--bg-2);
  position: absolute;
  @media (max-width: 1023px) {
    width: 100%;
    clip-path: circle(70.0% at 65% 50%);
  }
  z-index: 9;
  height: 100%;
  right: 0;
}

.content{
  z-index: 14;
  
  right: calc(4.5vmax - 100px);
  @media (max-width: 1023px) {
    left: 10%;
    width: 80%;
    position: relative;
  }
  @media (min-width: 1023px) {
    height: 100%;
    width: 60%;
    position: absolute;
  }
}

.title{
  width: 85%;
  color: aliceblue;
  text-shadow: 6px 5px 5px rgba(0, 0, 0, 0.5);
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 600;
  letter-spacing: 3.5px;
}

.card{
  position: relative;
  width: 100%;
  max-width: 310px;
  transition: all 0.5s ease;
  & div{
    text-shadow: 6px 5px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
  }
  &:hover{
    transform: scale(1.1);
    & div{
      text-shadow: 20px 13px 10px rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 1023px) {
    cursor: default;
  }
  @media (min-width: 1023px) {
    cursor: pointer;
  }
}

@keyframes beam-blink {
	75% { border-color: transparent; }
}

.descripcion {
  font-size: calc(9px + 0.6vmax);
	font-family: 'VT323', monospace;
	color: rgb(203, 233, 203);
  text-shadow: 0 0 5px var(--text-shadow);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	&::after {
		content: "​"; // zero-width space to retain element height
		padding-right: 3px;
		padding-right: calc(3px + 0.1vw);
		border-right: 7px solid var(--gr-1);
		animation: beam-blink 1s infinite;
	}
}

.desc-bg {
  width: 45%;
  padding: 5px;
  background: radial-gradient(rgba(#fff, 0.1), rgba(#fff, 0)), linear-gradient(to bottom, rgba(71, 53, 26, 0.8) 2px, var(--border-color) 10px, var(--bg-2) 2px);
  background-repeat: repeat-y;
	background-position: center center;
	background-size: cover, 110% 3px;
  border: 4px inset var(--border-color);
  border-radius: 15px;
}

.ability{
  font-size: calc(12px + 0.6vmax);
}

.stars{
  color: var(--gr-2);
}
</style>
