import Collapse from "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";

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