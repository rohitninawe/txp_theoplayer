import React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types';

export default class ProfileSvg extends React.Component {
  render() {
    const { fill } = this.props;
    return (
      <Svg
        width={22} height={22}
        viewBox="0 0 30 30"
      >
        <Path
          data-name="user (1)"
          d="M27.871 19.294a14.052 14.052 0 0 0-3.585-2.244 1.172 1.172 0 0 0-.952 2.142 11.72 11.72 0 0 1 2.99 1.858 4.673 4.673 0 0 1 1.583 3.512v2.168a1.173 1.173 0 0 1-1.172 1.172H3.766a1.173 1.173 0 0 1-1.172-1.172v-2.163a4.673 4.673 0 0 1 1.583-3.517c1.184-1.04 4.634-3.46 11.073-3.46a8.682 8.682 0 1 0-5.282-1.8 16.292 16.292 0 0 0-7.338 3.5 7.017 7.017 0 0 0-2.38 5.277v2.168a3.519 3.519 0 0 0 3.516 3.515h22.969a3.519 3.519 0 0 0 3.515-3.515v-2.168a7.017 7.017 0 0 0-2.38-5.273zM8.922 8.922a6.328 6.328 0 1 1 6.328 6.328 6.335 6.335 0 0 1-6.328-6.328zm0 0"
          fill={fill}
          stroke="#fff"
          strokeWidth={0.5}
        />
      </Svg>
    )
  }
}

ProfileSvg.propTypes = {
  fill: PropTypes.string.isRequired,
}
