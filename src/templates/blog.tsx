import { graphql, Link, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import './blog.css'
import { Child } from "../components/childern"
import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
const Blog = ({ data: { blog } }) => {
  return (
    <Child>
      <div>

        <h3>   <Link to="/" className="link" > Visit the Blog Page </Link>   </h3>
        <h1 className="txt"> {blog.blogTitle}</h1>
        <div className="date"> <p>  {blog.data}</p></div>
        <Img className='img' fluid={blog.blogImage[0]?.fluid} />
        <div className="author"> <h2>  {blog.author} </h2></div>
        <div className="subtxt">     {documentToReactComponents(JSON.parse(blog.body.raw))} </div>
      </div>
    </Child>
  )
}
export default Blog
export const query = graphql
  `query ContentfulBlogSite($slug: String!) {
      blog: contentfulBlogSite(slug: {eq: $slug}) {
        slug
        author
        blogTitle
        body {
          raw
        }
        data(formatString: "MMM D YYYY")
        subDesc {
          subDesc
        }
        blogSubtitle{
    blogSubtitle
        }
        blogImage {
          fluid {

              ...GatsbyContentfulFluid
            }}}}`
