class counter extends HTMLElement {
  
    constructor(){
        super()
      this.currentValue = 0
      this.endNumber = this.getAttribute("endNumber") ?? 10
      this.interval = this.getAttribute("interval") ?? 1000
      this.labeltext = this.getAttribute("labeltext") ?? "default"
      this.i = setInterval(this.increase.bind(this), this.interval)
      this.shadow = this.attachShadow({mode: 'open'});
      this.shadow.innerHTML = `<div>
      <div id="counter"></div>
      <label>${this.labeltext}</label>
      </div>`

    }
  increase() {
      if (this.currentValue < this.endNumber) {
        this.currentValue++
        var counterTag = this.shadow.getElementById("counter")
        counterTag.innerHTML = this.currentValue
        // + " " + `<label>${this.labeltext}</label>`
      }
    else{
      console.log("stop");
    clearInterval(this.i)
    }
  }
  } 

  customElements.define('auto-counter', counter);