import * as React from 'react'
import * as Server from 'react-dom/server'

let el =
    <a href={'/'} title='&apos;&quot;'> some text
      {foo}
      more text </a>
let Greet = () => <h1>{ el }, world!</h1>
console.log(Server.renderToString(<Greet />))
