import ReactDOM from 'react-dom' // おっ、'react'とは別のパッケージだぞ
import MyComponent from './components/MyComponent'

const element = <MyComponent></MyComponent>

ReactDOM.render(element, document.getElementById('hello-world'))