function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if (prop === 'children') continue // in case children are entered into the props also instead of outside like below
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
        // ex. children entered here will simply continue on 
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)