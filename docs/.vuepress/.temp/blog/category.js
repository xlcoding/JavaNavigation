export const categoryMap = {"category":{"/":{"path":"/category/","map":{"知识星球":{"path":"/category/%E7%9F%A5%E8%AF%86%E6%98%9F%E7%90%83/","keys":["v-9004edb0","v-5dcb96b7"]},"CategoryA":{"path":"/category/categorya/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce"]},"校招面试":{"path":"/category/%E6%A0%A1%E6%8B%9B%E9%9D%A2%E8%AF%95/","keys":["v-42ce18c4","v-9b8ac27c","v-5b084755"]},"大厂导航":{"path":"/category/%E5%A4%A7%E5%8E%82%E5%AF%BC%E8%88%AA/","keys":["v-6b17519f"]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"tag B":{"path":"/tag/tag-b/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-0f7612e9","v-0dc13a4a","v-0c0c61ab","v-0a57890c","v-08a2b06d","v-06edd7ce","v-0538ff2f","v-03842690"]},"简历":{"path":"/tag/%E7%AE%80%E5%8E%86/","keys":["v-42ce18c4","v-9b8ac27c"]},"项目":{"path":"/tag/%E9%A1%B9%E7%9B%AE/","keys":["v-42ce18c4"]},"经验":{"path":"/tag/%E7%BB%8F%E9%AA%8C/","keys":["v-5b084755"]},"学习路线":{"path":"/tag/%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/","keys":["v-6b17519f"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
