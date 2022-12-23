import SvgAnnotator from "./components/SvgAnnotator.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("svg-annotator", SvgAnnotator);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

SvgAnnotator.install = install;

export default SvgAnnotator;