import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Template from '../components/layout'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Template>
          <div>
            <div className="inner">
              <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
              <h1>{post.frontmatter.title}</h1>

              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr />
            </div>
          </div>
        </Template>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
