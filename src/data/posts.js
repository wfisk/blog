import files from '../posts/*.md'

export const posts = files.map(({
  filename,
  html,
  metadata
}) => {

  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)

  // return the new shape
  return {
    ...metadata,
    filename,
    html,
    permalink,
    date
  }


})




// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return _.find(posts, {
    permalink
  })
}