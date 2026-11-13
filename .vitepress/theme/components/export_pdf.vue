<script setup>
import { useData, useRoute } from 'vitepress';
import {  onMounted, ref, watch} from 'vue';
import {  FileDown } from "lucide-vue-next";


// pdf路由映射
const PDF_ROUTE_MAP = {
  "6_Axis_Force_Torque_Sensor":{
    "en-US": "https://www.ufactory.cc/upfiles/download/202606/F9P8MD5PMWGI.pdf",
    "zh-CN": "https://www.ufactory.cc/upfiles/download/202609/2XPBN6U1Y2N0.pdf",
  },
  "Bio_Gripper_G2":{
    "en-US": "https://www.ufactory.cc/upfiles/download/202610/WJY8KDIK8B1F.pdf",
    "zh-CN": "https://www.ufactory.cc/upfiles/download/202610/1VSE6RX1IR3Y.pdf",
  },

  "Linear_Motor":{
    "en-US": "https://www.ufactory.cc/upfiles/download/202606/CKSNS72G2EF1.pdf",
    "zh-CN": "https://www.ufactory.cc/upfiles/download/202609/B6M2DABCBT49.pdf",
  },
  "xArm_Gripper_G2":{
    "en-US": "https://www.ufactory.cc/upfiles/download/202611/7G03FG4AX9DZ.pdf",
    "zh-CN": "https://www.ufactory.cc/upfiles/download/202611/Z3XY4FDIX4Y2.pdf",
  },
  "xArm_Vacuum_Gripper":{
    "en-US": "https://www.ufactory.cc/upfiles/download/202606/YGBA8GSZKNFI.pdf",
    "zh-CN": "https://www.ufactory.cc/upfiles/download/202609/HQ3EQXVFB5RW.pdf",
  },
}


// 控制按钮显示
const showButton = ref(false);
const route = useRoute()
const data = useData()

const isEnglish = ref(false)

watch(() => data.lang, (data) => {
  isEnglish.value = (data.value === 'en-US')
}, {
  deep: true,
  immediate: true
})


onMounted(() => {
  // 只在首页和文档页面显示按钮
  if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/')) {
    showButton.value = false;
  } else {
    showButton.value = true;
  }
});

function onOpenPdf() {
  Object.keys(PDF_ROUTE_MAP).forEach((key) => {
    if (route.path.includes("/" + key + "/")) {
      const url = PDF_ROUTE_MAP[key][data.lang.value];
      if (url) {
        window.open(url);
      }
    }
  });
}

</script>
<template>

  <div class="export-btn">
    <!-- 根据 showButton 的值来控制按钮是否显示 -->
    <button v-if="showButton" @click="onOpenPdf" class="export-pdf-button" >
      <FileDown />
      {{isEnglish ? "Download PDF" :"PDF下载"}}
    </button>
  </div>
</template>

<style scoped>
.export-modal{
  text-align: center;
  font-size: 18px;
  margin: 20px;
}

.export-button{
  width: 100%;
  display: flex;
  row-gap: 10px;
  justify-content: center;
}
</style>
