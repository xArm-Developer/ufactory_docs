import type { DefaultTheme } from 'vitepress/theme'
import { defineUserConfig } from 'gm-export-pdfs-vitepress'

import userConfig from './config.mts'


function extractLinksFromConfig(config: DefaultTheme.Config) {
  const links: string[] = []

  function extractLinks(obj: any) {
    if (obj.hasOwnProperty('link')) {
      links.push(obj?.link);
    } else if (obj.hasOwnProperty('items')) {
      obj.items.forEach(item => extractLinks(item));
    }
  }

  for (const value of (config.sidebar as any)["/"].items)
    extractLinks(value)

  return links
}

const links = extractLinksFromConfig(userConfig.themeConfig!)


const routeOrder = [
  '/index.html',
  ...links,
]


const headerTemplate = `<div style="margin-top: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate = `<div style="margin-bottom: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: flex-start; align-items: center; color: lightgray; border-top: solid lightgray 1px; font-size: 10px;">
  <span style="margin-left: 15px; opacity:0;" class="url"></span>
</div>`

const configs = defineUserConfig({
  outFile: 'UFACTORY_Studio_User_Manual_V2.6.0.pdf',
  outDir: './.vitepress/dist/pdf',
  puppeteerLaunchOptions: {
    args: ['--no-sandbox']
  },
  routePatterns: ['!/server/**/**.*', '!/en/index.*', '!/**/index.*', '!/zhHans/**', "!/**.*"],
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    headerTemplate,
    footerTemplate,
    margin: {
      bottom: 50,
      left: 25,
      right: 25,
      top: 50,
    },
  },
  urlOrigin: 'https://docs.test.ufactory.cc/',
  sorter: (pageA, pageB) => {
    // 提取pageA路径中的数字部分，使用正则表达式匹配数字
    const aNumberMatch = pageA.path.match(/(\d+)/);
    const aNumber = aNumberMatch ? parseInt(aNumberMatch[1], 10) : 0;
    // 提取pageB路径中的数字部分
    const bNumberMatch = pageB.path.match(/(\d+)/);
    const bNumber = bNumberMatch ? parseInt(bNumberMatch[1], 10) : 0;
    return aNumber - bNumber;
  },
})


// console.log('configs', configs);

export default configs