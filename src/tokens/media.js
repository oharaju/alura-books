const sizes = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1200px'
}

export const device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`
}