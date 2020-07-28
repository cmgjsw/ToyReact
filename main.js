import { ToyReact,Component } from './ToyReact.js'

class MyComponent extends Component{
    render() {
        return <div>
            <span>hello! ToyReact.</span>
            <div>
                {this.children}
            </div>
        </div>
    }

}

let a = <MyComponent name="a" id="ida"><div>dddd</div></MyComponent>

ToyReact.render(
    a,
    document.body
)