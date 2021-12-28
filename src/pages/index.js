import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import PostCardsColumn from '../components/post-cards-column'
import Post from '../models/post'
import Tabs from '../components/tabs'

import { getSortedCategoriesByCount } from '../utils/helpers'
import { Helmet } from 'react-helmet'
import { loadCodeHighlight } from '../utils/loadCodeHighlight'

export default ({ data }) => {
    loadCodeHighlight()
    const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node))
    const { author, language } = data.site.siteMetadata
    const categories = ['All', ...getSortedCategoriesByCount(posts)]
    const [tabIndex, setTabIndex] = useState(0)

    const onTabIndexChange = (e, value) => {
        setTabIndex(value)
    }

    return (
        <Layout>
            <Helmet>
                <meta name="naver-site-verification" content="866db3f93b637805d8f80dcdf45c289f739b2da0" />
                <script>{`   
                    (function(j,en,ni,fer) {
                    j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
                    j['dmnaid']=fer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
                    var b=Math.floor(new Date().getTime() / 60000) * 60000;var a=en.createElement(ni);
                    a.src='https://d-collect.jennifersoft.com/'+fer+'/demian.js?'+b;a.async=true;
                    en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
                }(window,document,'script','402db92c'));
                `}</script>
            </Helmet>
            <SEO title="Home"/>
            <Bio author={author} language={language}/>
            <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories}/>
            <PostCardsColumn
                posts={
                    tabIndex === 0
                        ? posts.slice(0, 4)
                        : posts
                            .filter((post) => post.categories.includes(categories[tabIndex]))
                            .slice(0, 4)
                }
                moreUrl={`posts/${tabIndex === 0 ? '' : categories[tabIndex]}`}
                showMoreButton
            />
        </Layout>
    )
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, truncate: true)
          frontmatter {
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }
      }
    }
  }
`
