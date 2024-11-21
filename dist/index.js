
document.querySelectorAll('[x-component]').forEach(component => {
    const componentName = `x-${component.getAttribute('x-component')}`
    class Component extends HTMLElement {
        connectedCallback() {
            this.append(component.content.cloneNode(true))
        }

        data() {
            const attributes = this.getAttributeNames()
            const data = {
                'link': '#no',
                'classes': '',
            }
            attributes.forEach(attribute => {
                data[attribute] = this.getAttribute(attribute)
            })
            return data
        }
    }
    customElements.define(componentName, Component)
})