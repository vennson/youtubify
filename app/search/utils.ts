export function filterVids(contents: Content[]) {
  const filtered = contents.filter((content) => {
    if (content.type === 'video') {
      return content
    }
  }) as VideoContent[]

  return filtered
}

// const vidsOnly = dummy.contents.filter((content) => {
//   if (content.type === 'video') {
//     return content
//   }
// }) as VideoContent[]
