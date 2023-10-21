export {ExtraInfoSectionFactory}

class ExtraInfoSectionFactory {
  build(extraInfoObject) {
    const extraInfoBox = document.createElement("div");
    extraInfoBox.classList.add("extra-info-section")
    return extraInfoBox;
  }
}