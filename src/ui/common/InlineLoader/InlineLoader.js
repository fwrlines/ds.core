/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { LoaderBars, LoaderCircle } from './common'
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./inline_loader.scss')

}

const baseClassName = 'inline_loader'

/**
 * `InlineLoader` displays an inline selected loader.<br/>
 * `LoaderBars` color : ` var(--x, var(--primary))` <br/>
 * `LoaderCircle` color : ` var(--x, var(--primary))` <br/>
 */
const InlineLoader = ({
  id,
  className,
  style,

  type,

  loaderId,
  loaderClassName,

  height,
  width,

  animationDuration
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      {
        type == 'circle' ?
          <LoaderCircle
            id={loaderId}
            className={loaderClassName}
            height={height}
            width={width}
            strokeLinecap='round'
          />

          :
          <LoaderBars
            id={loaderId}
            className={loaderClassName}
            height={height}
            width={width}
            strokeLinecap='round'
            //strokeWidth='14'
            animationDuration={animationDuration}
          />

      }
    </div>
  )}

InlineLoader.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The width of the loader
   */
  width:PropTypes.string,

  /**
   * The height of the loader
   */
  height:PropTypes.string.isRequired,

  /**
   * The duration of the animation loop in seconds. The loaders provide their own default (2s for LoaderBars and 1.25s for LoaderCircle).
   */
  animationDuration:PropTypes.number,

  /**
   * An id to pass to the loader
   */
  loaderId:PropTypes.string,

  /**
   * A class to pass to the loader
   */
  loaderClassName:PropTypes.string,

  /**
   * Which type of loader
   */
  type:PropTypes.oneOf(['circle','bars']).isRequired
}

InlineLoader.defaultProps = {
  height:'1em',
  type:'bars',
}

export default InlineLoader
