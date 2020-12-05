import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import PropTypes from 'prop-types';
import { colors } from '../globalstyleconstants';

export default class PremiumEconomySvg extends React.Component {
  render() {
    const { selected } = this.props;
    const fill = (selected) ? colors.highlight : colors.subtitle;
    return (
      <Svg data-name="Group 159" width={37.895} height={36} marginLeft={20}>
        <Path
          data-name="Path 129"
          d="M6.136 19.843a.6.6 0 0 0-.909.163 5.1 5.1 0 0 0-.8 2.732h1.26a3.834 3.834 0 0 1 .6-2.048.681.681 0 0 0-.151-.847zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 130"
          d="M16.421 18.948v-1.263h-6.312a.632.632 0 1 0 0 1.263zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 131"
          d="M7.379 18.143a.672.672 0 0 0-.362.394l-.022.124a.426.426 0 0 0 .008.128.366.366 0 0 0 .027.116.86.86 0 0 0 .057.113.757.757 0 0 0 .383.292.8.8 0 0 0 .224.025.581.581 0 0 0 .507-.359.852.852 0 0 0 .052-.238.673.673 0 0 0-.021-.243.584.584 0 0 0-.318-.369.68.68 0 0 0-.535.017zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 132"
          d="M20.816 22.915a.632.632 0 0 1-.628-.567 3.774 3.774 0 0 0-3.767-3.4.632.632 0 1 1 0-1.263 5.035 5.035 0 0 1 5.024 4.534.632.632 0 0 1-.564.692.609.609 0 0 1-.065.004zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 133"
          d="M19.579 26.525H6.316a1.9 1.9 0 0 1-1.895-1.895v-1.895a.632.632 0 0 1 1.263 0v1.895a.632.632 0 0 0 .631.631h13.264a.632.632 0 0 1 0 1.263zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 134"
          d="M24.63 26.528a4.423 4.423 0 0 1-4.114-6.034L27.463 2.81a4.421 4.421 0 1 1 8.23 3.233l-6.947 17.68a4.4 4.4 0 0 1-4.116 2.805zm6.953-25.264a3.164 3.164 0 0 0-2.944 2l-6.947 17.684a3.158 3.158 0 0 0 5.879 2.309l6.947-17.684a3.157 3.157 0 0 0-2.935-4.312zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 135"
          d="M24.629 26.528h-6.313a.632.632 0 0 1 0-1.263h6.313a.632.632 0 1 1 0 1.263zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 136"
          d="M24.631 24.001a1.895 1.895 0 1 1 1.895-1.895 1.895 1.895 0 0 1-1.895 1.895zm0-2.526a.632.632 0 1 0 .631.632.632.632 0 0 0-.631-.632zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 137"
          d="M25.263 36H6.948a1.265 1.265 0 0 1-1.263-1.263v-5.053a1.264 1.264 0 0 1 1.263-1.263h18.315a1.264 1.264 0 0 1 1.263 1.263v5.053A1.264 1.264 0 0 1 25.263 36zM6.947 29.684v5.053h18.317v-5.053zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 138"
          d="M8.211 29.684a.633.633 0 0 1-.587-.4l-1.263-3.15a.632.632 0 0 1 1.173-.469l1.263 3.158a.633.633 0 0 1-.587.867zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 139"
          d="M24 29.684a.633.633 0 0 1-.587-.867l1.263-3.158a.632.632 0 1 1 1.173.469l-1.263 3.158a.632.632 0 0 1-.586.398zm0 0"
          fill={fill}
        />
        <Path
          data-name="Path 144"
          d="M37.263 36.003H.632a.632.632 0 1 1 0-1.263h36.631a.632.632 0 1 1 0 1.263zm0 0"
          fill={fill}
        />
        <G data-name="Group 161">
          <G data-name="Group 146">
            <G data-name="Group 145">
              <Path
                data-name="Path 108"
                d="M20.551 8.69a.933.933 0 0 0-.517-1.591l-3.1-.45a.187.187 0 0 1-.14-.1l-1.38-2.808a.933.933 0 0 0-1.673 0l-1.385 2.805a.187.187 0 0 1-.141.1l-3.1.45a.933.933 0 0 0-.517 1.591l2.24 2.184a.187.187 0 0 1 .054.165l-.529 3.083a.933.933 0 0 0 1.354.984l2.769-1.456a.187.187 0 0 1 .174 0l2.769 1.456a.933.933 0 0 0 1.354-.984l-.529-3.083a.187.187 0 0 1 .054-.165zm-3.029 2.475l.529 3.083a.187.187 0 0 1-.271.2l-2.769-1.456a.933.933 0 0 0-.868 0l-2.769 1.456a.187.187 0 0 1-.271-.2l.529-3.083a.933.933 0 0 0-.268-.826l-2.24-2.184a.187.187 0 0 1 .1-.318l3.1-.45a.933.933 0 0 0 .7-.51l1.386-2.806a.187.187 0 0 1 .335 0h0l1.384 2.805a.933.933 0 0 0 .7.51l3.1.45a.187.187 0 0 1 .1.318l-2.24 2.184a.933.933 0 0 0-.267.827z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
          <G data-name="Group 148">
            <G data-name="Group 147">
              <Path
                data-name="Path 109"
                d="M18.936 3.741a.373.373 0 0 0-.521.083l-.4.545a.373.373 0 1 0 .6.439l.4-.545a.373.373 0 0 0-.079-.522z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
          <G data-name="Group 150">
            <G data-name="Group 149">
              <Path
                data-name="Path 110"
                d="M11.132 4.366l-.4-.545a.373.373 0 0 0-.6.439l.4.545a.373.373 0 1 0 .6-.439z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
          <G data-name="Group 152">
            <G data-name="Group 151">
              <Path
                data-name="Path 111"
                d="M8.872 11.594a.373.373 0 0 0-.47-.24l-.641.208a.373.373 0 1 0 .231.71l.641-.208a.373.373 0 0 0 .239-.47z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
          <G data-name="Group 154">
            <G data-name="Group 153">
              <Path
                data-name="Path 112"
                d="M14.577 15.738a.373.373 0 0 0-.373.373v.674a.373.373 0 1 0 .746 0v-.674a.373.373 0 0 0-.373-.373z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
          <G data-name="Group 156">
            <G data-name="Group 155">
              <Path
                data-name="Path 113"
                d="M21.393 11.564l-.641-.208a.373.373 0 1 0-.231.71l.641.208a.373.373 0 1 0 .231-.71z"
                fill={fill}
                stroke={fill}
                strokeWidth={0.5}
              />
            </G>
          </G>
        </G>
      </Svg>
    )
  }
}

PremiumEconomySvg.propTypes = {
  selected: PropTypes.bool.isRequired,
}
