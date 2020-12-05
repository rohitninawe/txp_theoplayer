import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const CloseButtonSvg = props => (
  <Svg width={28} height={28} {...props}>
    <G data-name="Group 44">
      <G data-name="Group 43">
        <Path
          data-name="Path 67"
          d="M14 0a14 14 0 1 0 14 14A14 14 0 0 0 14 0zm0 25.657A11.657 11.657 0 1 1 25.657 14 11.65 11.65 0 0 1 14 25.657zm5.506-17.163a1.17 1.17 0 0 0-1.582 0L14 12.418l-3.925-3.925a1.119 1.119 0 1 0-1.582 1.582L12.418 14l-3.925 3.925a1.119 1.119 0 1 0 1.582 1.582L14 15.582l3.925 3.925a1.119 1.119 0 0 0 1.582-1.582L15.523 14l3.925-3.925a1.116 1.116 0 0 0 .058-1.581z"
          fill="#D9233C"
          fillRule="evenodd"
        />
      </G>
    </G>
  </Svg>
)

export default CloseButtonSvg
