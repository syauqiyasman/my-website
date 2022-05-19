// eslint-disable-next-line max-len
export const sortByDate = (a: any, b: any) => (+new Date(b.frontmatter.date)) - +(new Date(a.frontmatter.date))

export default sortByDate
