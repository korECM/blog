/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import PageHeader from '../page-header'
import PageFooter from '../page-footer'
import { loadCodeHighlight } from '../../utils/loadCodeHighlight'

const Layout = ({children}) => {
    loadCodeHighlight()
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
            social {
              github
            }
          }
        }
      }
    }
  `)
    const {title, author} = data.site.siteMetadata

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <PageHeader siteTitle={title || `Title`}/>
            <main>{children}</main>
            <PageFooter
                author={author.name || `Author`}
                githubUrl={author.social?.github || `https://www.github.com`}
            />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
