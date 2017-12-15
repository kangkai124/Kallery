// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import "papercss/dist/paper.css"
import "@/styles/fonts/iconfont.css"
import router from "./router"
import { Range } from "mint-ui"

Vue.component(Range.name, Range)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
})
