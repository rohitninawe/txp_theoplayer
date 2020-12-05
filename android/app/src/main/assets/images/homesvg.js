import React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types';

export default class HomeSvg extends React.Component {
  render() {
    const { fill } = this.props;
    return (
      <Svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 26 26.1"
        xmlSpace="preserve"
        fill={fill}
        width={22} height={22}
      >
        <Path
          className="prefix__st0"
          fill={fill}
          fillRule="evenodd"
          d="M25.9 11.9l-1.7-1.7v-8c0-.3-.2-.5-.5-.5H19c-.3 0-.5.2-.5.5v2.3L14.9.9c-.9-.9-2.5-1-3.4 0L.1 11.9c-.1.2-.1.4-.1.6s.3.3.5.3h1.6v11.9c0 .8.7 1.5 1.5 1.5h18.9c.4 0 .8-.1 1.1-.4.3-.3.5-.7.5-1.1V22c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.7c0 .3-.3.5-.6.5H3.7c-.3 0-.5-.2-.5-.5V12.8h20v5.3c0 .3.2.5.5.5s.5-.2.5-.5v-5.3h1.4c.2 0 .4-.1.5-.3-.1-.2-.1-.4-.2-.6zm-2.2-.1c-.1 0-.1 0 0 0h-22L12.2 1.5c.3-.3.6-.4 1-.4s.7.2 1 .4L18.6 6c.1.1.4.2.5.1.2-.1.3-.3.3-.5v-3h3.7v7.7c0 .1.1.3.1.4l1 1h-.5z"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          className="prefix__st0"
          d="M8.6 16.2c-.3 0-.5.2-.5.5v4.5c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5v-4.5c0-.3-.2-.5-.5-.5h-9zm.5 1h3.5v3.5H9.1v-3.5zm8 3.5h-3.5v-3.5h3.5v3.5z"
        />
      </Svg>
    )
  }
}

HomeSvg.propTypes = {
  fill: PropTypes.string.isRequired,
}
