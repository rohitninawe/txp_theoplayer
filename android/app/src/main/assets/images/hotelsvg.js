import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import PropTypes from 'prop-types';

export default class HotelSvg extends React.Component {
  render() {
    const { fill } = this.props;
    return (
      <Svg
        width={22} height={22}
        id="prefix__Layer_1"
        x={0}
        y={0}
        viewBox="0 0 26 25.5"
        xmlSpace="preserve"
      >
        <Path
          fill={fill}
          fillRule="evenodd"
          className="prefix__st0"
          d="M20.9 26.7c-.3 0-.5-.2-.5-.5V6.1c0-.3-.2-.6-.6-.6h-3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.5c.9-.1 1.6.7 1.6 1.6v20.1c0 .3-.2.5-.5.5zM5.9 26.7c-.3 0-.5-.2-.5-.5V6.1c0-.9.7-1.6 1.6-1.6h3.5c.3 0 .5.2.5.5s-.2.5-.5.5H6.9c-.3 0-.6.3-.6.6v20.1c.1.3-.2.5-.4.5z"
          transform="translate(-.381 -1.373)"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          className="prefix__st0"
          d="M3.3 3.8H0c-.3 0-.5-.2-.5-.5V0c0-.3.2-.5.5-.5h3.3c.3 0 .5.2.5.5v3.3c0 .3-.2.5-.5.5zm-2.8-1h2.3V.5H.5v2.3zM9.7 3.8H6.4c-.3 0-.5-.2-.5-.5V0c0-.3.2-.5.5-.5h3.3c.3 0 .5.2.5.5v3.3c0 .3-.2.5-.5.5zm-2.8-1h2.3V.5H6.9v2.3z"
          transform="translate(8.138 7.075)"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          className="prefix__st0"
          d="M3.3 3.8H0c-.3 0-.5-.2-.5-.5V0c0-.3.2-.5.5-.5h3.3c.3 0 .5.2.5.5v3.3c0 .3-.2.5-.5.5zm-2.8-1h2.3V.5H.5v2.3zM9.7 3.8H6.4c-.3 0-.5-.2-.5-.5V0c0-.3.2-.5.5-.5h3.3c.3 0 .5.2.5.5v3.3c0 .3-.2.5-.5.5zm-2.8-1h2.3V.5H6.9v2.3z"
          transform="translate(8.138 13.28)"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          className="prefix__st0"
          d="M16 26.7c-.3 0-.5-.2-.5-.5v-4.6h-4.2v4.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-5.1c0-.3.2-.5.5-.5H16c.3 0 .5.2.5.5v5.1c0 .3-.3.5-.5.5z"
          transform="translate(-.381 -1.373)"
        />
        <G>
          <Path
            fill={fill}
            fillRule="evenodd"
            className="prefix__st0"
            d="M25.9 26.9H.9c-.3 0-.5-.2-.5-.5V11.7c0-.9.7-1.6 1.6-1.6h1.2c.3 0 .5.2.5.5s-.2.5-.5.5H2c-.3 0-.6.3-.6.6v14.2h24V11.7c0-.3-.3-.6-.6-.6h-1.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.4c.9 0 1.6.7 1.6 1.6v14.7c0 .2-.2.5-.5.5z"
            transform="translate(-.381 -1.373)"
          />
        </G>
        <G>
          <Path
            fill={fill}
            fillRule="evenodd"
            className="prefix__st0"
            d="M11 3.7l.9.7c.1.1.2.3.1.4l-.3 1.1c-.1.2 0 .4.2.5.1 0 .2 0 .4-.1l.9-.7c.1-.1.3-.1.5 0l.9.7c.2.1.4.1.5-.1.1-.1.1-.2.1-.3l-.3-1.1c-.1-.2 0-.3.1-.4l.9-.7c.1-.1.1-.4 0-.6-.1-.1-.2-.1-.3-.2h-1.1c-.2 0-.3-.1-.4-.2l-.3-1.1c-.1-.2-.3-.3-.5-.3-.1 0-.2.1-.3.3l-.4 1.1c-.1.2-.2.3-.4.2h-1.1c-.2 0-.4.2-.4.5l.3.3z"
            transform="translate(-.381 -1.373)"
          />
        </G>
      </Svg>
    )
  }
}

HotelSvg.propTypes = {
  fill: PropTypes.string.isRequired,
}