//4
function customRender(reactElement, container){
    // simple react 
    // const domElement = document.createElement(reactElement.type)// element is created but emply
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    //5
    // container.appendChild(domElement);

    // bit complex way
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//1
const reactElement = {
    // how react sees our element- tries to create tree creating DOM
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//2
const mainContainer = document.querySelector('#root');

//3
customRender(reactElement, mainContainer) //injecting reactElement into mainContainer and mainContainer to root

//customRender creating above 

// react uses bundler behind the scene bundler converts syntax

// in react
// const reactElements = React.createElement (
//     'a',
//     {href: 'http://google.com', target: '_blank'},
//     'click me to visit google'
// )

// ReactDOM.createRoot(document.getElementById('root')).render(reactElement)


