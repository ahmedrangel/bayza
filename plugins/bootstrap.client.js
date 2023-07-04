import Collapse from "bootstrap/js/dist/collapse";

class Bootstrap {
  toogleCollapse (el) {
    const bsCollapse = new Collapse(el);
    bsCollapse.toggle();
  }
}

const bootstrap = new Bootstrap();

export default defineNuxtPlugin(() => {
  return {
    provide: { bootstrap }
  };
});