import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Edmond"], ["Michael", "George", "George"], ["Michael", "Pierre Edouard", "Jean-Philippe"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchLogout", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Anas", "Edmond"], ["Edmond", "Edmond", "Jean-Philippe"], ["George", "Edmond", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.fetchLogout()
        }
    
        expect(callFunction).not.toThrow()
    })
})
