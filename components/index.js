import Vue from 'vue'

import uLink from './uLink.vue'
import mInput from './m-input.vue'
import uniList from './uni-list/uni-list.vue'
import uniListItem from './uni-list-item/uni-list-item.vue'
import uniSection from './uni-section/uni-section.vue'
import uniIcons from "./uni-icons/uni-icons.vue"
import uniSegmentedControl from './uni-segmented-control/uni-segmented-control.vue'
import uniCollapse from './uni-collapse/uni-collapse.vue'
import uniCollapseItem from './uni-collapse-item/uni-collapse-item.vue'

Vue.component('uLink', uLink)
Vue.component('mInput', mInput)
Vue.component('uniCollapse', uniCollapse)
Vue.component('uniCollapseItem', uniCollapseItem)
Vue.component('uniIcons', uniIcons)
Vue.component('uniSection', uniSection)
Vue.component('uniSegmentedControl', uniSegmentedControl)
Vue.component('uniList', uniList)
Vue.component('uniListItem', uniListItem)

export {
    uLink,
    mInput,
    uniCollapse,
    uniCollapseItem,
    uniIcons,
    uniSection,
    uniSegmentedControl,
    uniList,
    uniListItem
}