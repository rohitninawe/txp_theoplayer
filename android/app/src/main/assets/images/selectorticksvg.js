import React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

const SelectorTickSvg = props => (
  <Svg width={18} height={18} alignSelf= 'flex-end'>
    <G data-name="Group 144" transform="translate(-129 -578)">
      <Circle
        data-name="Ellipse 27"
        cx={9}
        cy={9}
        r={9}
        transform="translate(129 578)"
        fill="#d9233c"
      />
      <Path
        data-name="Path 86"
        d="M136.055 592.182a.738.738 0 0 1-.526-.213l-3.285-3.382a.771.771 0 1 1 1.065-1.115l2.4 1.716a.314.314 0 0 0 .463-.05l5.7-7.039a.769.769 0 1 1 1.227.927l-6.43 8.842a.768.768 0 0 1-.551.3.113.113 0 0 1-.063.014z"
        fill="#fff"
      />
    </G>
  </Svg>
)

export default SelectorTickSvg
