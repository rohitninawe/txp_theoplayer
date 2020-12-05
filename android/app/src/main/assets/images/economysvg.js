import React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types';
import { colors } from '../globalstyleconstants';

export default class EconomySvg extends React.Component {
  render() {
    const { selected } = this.props;
    const fill = (selected) ? colors.highlight : colors.subtitle;

    return (
      <Svg data-name="Group 159" width={37.895} height={36} marginLeft={20}>
        <Path
          data-name="Path 129"
          d="M6.136 19.843a.6.6 0 0 0-.909.163 5.1 5.1 0 0 0-.8 2.732h1.26a3.834 3.834 0 0 1 .6-2.048.681.681 0 0 0-.151-.847zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 130"
          d="M16.421 18.948v-1.263h-6.312a.632.632 0 1 0 0 1.263zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 131"
          d="M7.379 18.143a.672.672 0 0 0-.362.394l-.022.124a.426.426 0 0 0 .008.128.366.366 0 0 0 .027.116.86.86 0 0 0 .057.113.757.757 0 0 0 .383.292.8.8 0 0 0 .224.025.581.581 0 0 0 .507-.359.852.852 0 0 0 .052-.238.673.673 0 0 0-.021-.243.584.584 0 0 0-.318-.369.68.68 0 0 0-.535.017zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 132"
          d="M20.816 22.915a.632.632 0 0 1-.628-.567 3.774 3.774 0 0 0-3.767-3.4.632.632 0 1 1 0-1.263 5.035 5.035 0 0 1 5.024 4.534.632.632 0 0 1-.564.692.609.609 0 0 1-.065.004zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 133"
          d="M19.579 26.525H6.316a1.9 1.9 0 0 1-1.895-1.895v-1.895a.632.632 0 0 1 1.263 0v1.895a.632.632 0 0 0 .631.631h13.264a.632.632 0 0 1 0 1.263zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 134"
          d="M24.63 26.528a4.423 4.423 0 0 1-4.114-6.034L27.463 2.81a4.421 4.421 0 1 1 8.23 3.233l-6.947 17.68a4.4 4.4 0 0 1-4.116 2.805zm6.953-25.264a3.164 3.164 0 0 0-2.944 2l-6.947 17.684a3.158 3.158 0 0 0 5.879 2.309l6.947-17.684a3.157 3.157 0 0 0-2.935-4.312zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 135"
          d="M24.629 26.528h-6.313a.632.632 0 0 1 0-1.263h6.313a.632.632 0 1 1 0 1.263zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 136"
          d="M24.631 24.001a1.895 1.895 0 1 1 1.895-1.895 1.895 1.895 0 0 1-1.895 1.895zm0-2.526a.632.632 0 1 0 .631.632.632.632 0 0 0-.631-.632zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 137"
          d="M25.263 36H6.948a1.265 1.265 0 0 1-1.263-1.263v-5.053a1.264 1.264 0 0 1 1.263-1.263h18.315a1.264 1.264 0 0 1 1.263 1.263v5.053A1.264 1.264 0 0 1 25.263 36zM6.947 29.684v5.053h18.317v-5.053zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 138"
          d="M8.211 29.684a.633.633 0 0 1-.587-.4l-1.263-3.15a.632.632 0 0 1 1.173-.469l1.263 3.158a.633.633 0 0 1-.587.867zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 139"
          d="M24 29.684a.633.633 0 0 1-.587-.867l1.263-3.158a.632.632 0 1 1 1.173.469l-1.263 3.158a.632.632 0 0 1-.586.398zm0 0"
          fill={(fill)}
        />
        <Path
          data-name="Path 144"
          d="M37.263 36.003H.632a.632.632 0 1 1 0-1.263h36.631a.632.632 0 1 1 0 1.263zm0 0"
          fill={(fill)}
        />
      </Svg>
    )
  }
}

EconomySvg.propTypes = {
  selected: PropTypes.bool.isRequired,
}
