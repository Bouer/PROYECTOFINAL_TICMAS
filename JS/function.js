// set the target element that will be collapsed or expanded (eg. navbar menu)
const $targetEl = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.getElementById('triggerEl');

// optional options with default values and callback functions
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
      console.log("HOLA MUNDO")
  },
  onToggle: () => {
      console.log('element has been toggled')
      console.log("HOLA MUNDO")
  }
};


console.log("HOLA MUNDO")