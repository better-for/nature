export const size = {
  mobile: '768px',
  tablet: '1024px'
};
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`
};
