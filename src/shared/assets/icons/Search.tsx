import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={15}
    ref={ref}
    width={15}
    viewBox="0 0 20 20"
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm17.258 16.075-2.833-2.825a6.6 6.6 0 0 0 1.408-4.083 6.667 6.667 0 1 0-6.666 6.666 6.6 6.6 0 0 0 4.083-1.408l2.825 2.833a.833.833 0 0 0 1.183 0 .832.832 0 0 0 0-1.183ZM4.167 9.167a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
      }
      fill={'rgb(128, 128, 128)'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default ForwardRef
