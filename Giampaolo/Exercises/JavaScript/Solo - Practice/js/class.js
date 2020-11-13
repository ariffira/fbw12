class Button{
    constructor(labelVal, widthVal, heightVal, bgColor, labelColor) {
        this.label = labelVal;
        this.width = widthVal;
        this.height = heightVal;
        this.backGround = bgColor;
        this.labelColor = labelColor;
    }

    getLabel = () => {
        return this.label
    }

    setLabel = (newValue) => {
        this.label = newValue
    }

    createBtn = () => {
        return `<input type="button" value="${this.label} style="background-color: width: ${this.width}; height: ${this.height} ${this.backGround}; color: ${this.labelColor}"`
    }
}