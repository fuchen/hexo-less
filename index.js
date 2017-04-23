var rExcerpt = /<!--+\s*less\s*--+>/i;

hexo.extend.filter.register('after_post_render', function (data) {
  let content = data.content
  let match = rExcerpt.exec(content)
  if (!match) {
    return
  }
  data.excerpt = content.substring(0, match.index).trim()
  data.content = data.more = content.substring(match.index + match[0].length).trim()
})
