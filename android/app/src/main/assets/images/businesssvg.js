import React from 'react'
import Svg, { Path } from 'react-native-svg'
import PropTypes from 'prop-types';
import { colors } from '../globalstyleconstants';

export default class BusinessSvg extends React.Component {
  render() {

    const { selected } = this.props;
    const fill = (selected) ? colors.highlight : colors.subtitle;
    return (
      <Svg width={36} height={36} marginLeft={20}>
        <Path
          data-name="Path 102"
          d="M35.294 34.594a.7.7 0 1 0 .7.7.7.7 0 0 0-.7-.7z"
          fill={fill}
        />
        <Path
          data-name="Path 103"
          d="M29.745 0a3.587 3.587 0 0 0-3.583 3.583V6.8l-4.328 5.973H11.813a2.109 2.109 0 1 0 0 4.219h6.965l-1.545 2.133H7.594a4.922 4.922 0 0 0 0 9.844h9.012l1.024 2.812H9a2.109 2.109 0 0 0-1.988 2.813H.7A.7.7 0 0 0 .7 36h31.784a.7.7 0 1 0 0-1.406H22.238a2.1 2.1 0 0 0 .121-.7v-1.41a.7.7 0 0 0-.043-.243l-1.206-3.272h.546a.7.7 0 0 0 .623-.378l10.97-21.166a.7.7 0 0 0 .079-.324v-.042-3.476A3.587 3.587 0 0 0 29.745 0zM11.813 15.586a.7.7 0 1 1 0-1.406H24.5l-.965 1.406zM9.121 27.563H7.594a3.516 3.516 0 0 1 0-7.031h10a.7.7 0 0 0 .569-.291l2.353-3.249h2.058l-3.393 4.945h-6.665A3.52 3.52 0 0 0 9 25.453v1.406a2.1 2.1 0 0 0 .121.704zm1.988 0a.7.7 0 0 1-.7-.7v-1.41a2.112 2.112 0 0 1 2.109-2.109H19l.543 1.406h-4.215a.7.7 0 1 0 0 1.406h4.761l.543 1.406zM9 34.594a.7.7 0 1 1 0-1.406h9.634a.7.7 0 0 0 .661-.944L18.1 28.969h1.509l1.342 3.641v1.281a.7.7 0 0 1-.7.7zm12.752-8.033L20.3 22.792l5.731-8.353 1.529.991zM31.922 6.93L28.2 14.172l-1.984-1.286a.7.7 0 0 0-.336-.111h-2.307l3.86-5.329a.74.74 0 0 0 .031-.046l.011-.019a.7.7 0 0 0 .095-.353V3.583a2.177 2.177 0 1 1 4.354 0z"
          fill={fill}
        />
        <Path
          data-name="Path 104"
          d="M12.513 24.75a.7.7 0 1 0 .7.7.7.7 0 0 0-.7-.7z"
          fill={fill}
        />
      </Svg>
    )
  }
}

BusinessSvg.propTypes = {
  selected: PropTypes.bool.isRequired,
}
