SVG to React API
================

1.  Play with [react-svgr.com/playground](https://react-svgr.com/playground)
2.  Get config params
3.  Call SVG to React API
    -   -   Method: GET
        -   Path: `/api?[YOUR-CONFIG-PARAMS-HERE]&svg=[YOUR-URI-ENCODED-SVG-CODE-HERE]`
        -   Sample: [`GET /api?icon=true&native=true&typescript=true&svg=...`](https://svg-to-react.vercel.app/api?icon=true&native=true&typescript=true&svg=%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20height%3D%22100%22%20width%3D%22100%22%3E%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20stroke%3D%22black%22%20stroke-width%3D%223%22%20fill%3D%22red%22%20%2F%3E%3C%2Fsvg%3E)
    -   -   Method: POST
        -   Path: `/path?[YOUR-CONFIG-PARAMS-HERE]`
        -   Body: `svg=[YOUR-URI-ENCODED-SVG-CODE-HERE]`
4.  Done:

    ```jsx
    import * as React from 'react'
    import Svg, { SvgProps, Circle } from 'react-native-svg'

    function SvgComponent(props: SvgProps) {
      return (
        <Svg height="1em" width="1em" {...props}>
          <Circle cx={50} cy={50} r={40} stroke="#000" strokeWidth={3} fill="red" />
        </Svg>
      )
    }

    export default SvgComponent
    ```

![SVG to React API](https://svg-to-react.vercel.app/_next/image?url=%2Freact-svgr.com.png&w=1920&q=75)    