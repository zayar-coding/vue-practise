import myHeaderVue from "../components/myHeader.vue";

export default {
  install: (app, options) => {
    app.component('my-header', myHeaderVue) //global component ,
    //so when you use it, you don't need to import it just write my-header

    //global directive 
    app.directive("font-size", (el, binding, vnode) => {
      var size = 16;
      switch (binding.arg) {
        case "small":
          size = options.fontSize.small; //Passing customizable options to  our plugin from main.js
          break;
        case "large":
          size = options.fontSize.large;
          break;
        default:
          size = options.fontSize.medium;
          break;
      }
      el.style.fontSize = size + "px";
    })
    // When you use global directive in component, it names start with v-font-size:argumentName
    //eg v-font-size:small
  }
}

/*
1. global component
2. global css in global component
3. global directive
4. Passing customizable options to  our plugin from main.js
5.global mixins to add component functionality 

*/