import Vue from 'vue'
import Unicon from 'vue-unicons'
import * as Icons from 'vue-unicons/src/icons'

let iconsForImport = [];
for(const icon in Icons){
	iconsForImport.push(Icons[icon])
}

Unicon.add(iconsForImport);
Vue.use(Unicon);