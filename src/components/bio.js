/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="flex mb-10">
      <Image
        className="mr-4 mb-0 border"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          width: "80px",
          height: "60px",
          clipPath: "polygon(100% 0, 50% 100%, 0 0)",
        }}
      />
      <p className="text-base">
        Hey, I'm <strong>{author}</strong>, I'm a software engineer and cyber
        security advocate, Living in Nairobi. I am learning about programming
        concepts, JavaScript and Python.
      </p>
    </div>
  )
}

export default Bio
