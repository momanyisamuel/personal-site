import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="flex w-full">
          <h1 className="text-sm font-extrabold font-sans mb-10 mt-0">
            <Link className="shadow-none" to={`/`}>
              {title}
            </Link>
          </h1>
          <div class="menu ml-auto">
            <a href="" class="ml-4">
              about
            </a>
            <a href="" class="ml-4">
              archive
            </a>
            <a href="" class="ml-4">
              contact
            </a>
          </div>
        </div>
      )
    } else {
      header = (
        <div className="flex w-full">
          <h1 className="text-sm font-extrabold font-sans mb-10 mt-0">
            <Link className="shadow-none" to={`/`}>
              {title}
            </Link>
          </h1>
          <div class="menu ml-auto">
            <a href="" class="ml-4">
              about
            </a>
            <a href="" class="ml-4">
              archive
            </a>
            <a href="" class="ml-4">
              contact
            </a>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="max-w-2xl mx-auto px-5 py-10">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <footer class=" mx-auto flex h-24 w-full">
          <div class="white w-48"></div>
          <div class="dark flex w-full bg-blue-900 text-white ">
            <div class="ml-4 mt-4">
              <small class="helper font-sans">
                © {new Date().getFullYear()} Momanyi Samuel. This site was
                designed in figma, Gatsby, tailwindcss & deployed via Netlify.
              </small>
            </div>
            <div class="links ml-auto mr-16 mt-4">
              <a href="" class="link ml-4">
                dribbble
              </a>
              <a href="" class="link ml-4">
                linkedin
              </a>
              <a href="" class="link ml-4">
                github
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
