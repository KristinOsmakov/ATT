import { Ref, SVGProps, forwardRef, memo } from 'react'

const ArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'7.059204'}
    viewBox={'0 0 14.0311 7.0592'}
    width={'14.031067'}
    xmlns={'http://www.w3.org/2000/svg'}
    xmlnsXlink={'http://www.w3.org/1999/xlink'}
    style={{ transform: 'rotate(180deg)' }}
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      d={
        'M0 1C0 0.76 0.08 0.54 0.23 0.36C0.31 0.26 0.41 0.17 0.53 0.11C0.65 0.05 0.77 0.01 0.9 0C1.04 -0.01 1.17 0 1.29 0.04C1.42 0.08 1.54 0.14 1.64 0.23L7 4.71L12.37 0.39C12.47 0.3 12.59 0.24 12.71 0.2C12.84 0.17 12.97 0.15 13.1 0.17C13.23 0.18 13.36 0.22 13.48 0.29C13.59 0.35 13.69 0.43 13.78 0.54C13.87 0.64 13.94 0.76 13.98 0.89C14.02 1.02 14.03 1.16 14.02 1.3C14.01 1.44 13.96 1.57 13.9 1.69C13.83 1.81 13.74 1.91 13.63 2L7.63 6.83C7.45 6.97 7.22 7.05 6.99 7.05C6.76 7.05 6.54 6.97 6.36 6.83L0.36 1.83C0.24 1.73 0.14 1.6 0.08 1.45C0.02 1.31 -0.01 1.15 0 1Z'
      }
      fill={'rgb(128, 128, 128)'}
      fillOpacity={'1.000000'}
      fillRule={'nonzero'}
      id={'Vector'}
    />
  </svg>
)
const ForwardRef = forwardRef(ArrowUp)
const Memo = memo(ForwardRef)

export default Memo
