import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hideable" ]
  
  initialize() {
    console.log("Test")
  }

  toggleTargets() {
    this.hideableTargets.forEach((element) => {
      element.hidden = !element.hidden
    })
  }
}
