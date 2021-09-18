---
title: Gatsby and the JAMSTACK joy.
date: "2021-09-18T21:40:32.169Z"
description: Starting a blog with Gatsby has me excited.
---

I recently decided to start a blog as a way to document my learning journey, so far - I have been wondering why I didnt start sooner. The Gatsby framework - my choice - was a quick set up and I was able to get up and running quickly.

## Gatsby Ecosystem: Plugins, Themes, and Starters

Gatsby has boilerplates called [starters](https://www.gatsbyjs.com/starters-next/) that are maintained by the [community](https://www.gatsbyjs.com/starters-next/) - I started with the [blog starter ](https://www.gatsbyjs.com/starters-next/gatsbyjs/gatsby-starter-blog/)boilerplate myself. The ecosystem gets even better with themes and plugins which really extend gatsby's capabilities. To get me started, I was able to add tailwindcss and @fontsource for some fonts i needed.

## GraphQL

Gatsby also comes intergrated with GraphQL - GraphQL is a query language combined with a set of tools created to provide flexibility and efficiency in the way we pull data from a source. Gatsby documentation provides a great introduction to the benefits of coupling gatsby and GraphQL but to sum it up; You can programmatically create pages with the `createPages` function and pass data to the created pages using a `context` object as shown below.

```javascript
exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/page-with-context/",
    component: require.resolve("./src/templates/with-context.js"),
    context: {
      title: "We Don’t Need No Stinkin’ GraphQL!",
      content: "<p>This is page content.</p><p>No GraphQL required!</p>",
    },
  })
}
```

but because data sources introduce different complexities, Gatsby relies on GraphQL to overcome these limitations.

## React components

Pages are `React` components. Gatsby allows you to interact with GraphQL through two places, through a gatsby-node.js API file, and through components. for example page componets leverage the `graphql` tag as shown below to query data.

```javascript

import * as React from 'react'
import { graphql } from 'gatsby'
- const HomePage = () => {
+ const HomePage = ({data}) => {
  return (
    <div>
-     Hello!
+     {data.site.siteMetadata.description}
    </div>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
export default HomePage

```

I am really excited to be digging deeper into React and Gatsby and documenting as I go.
