import React from "react";
import './bloglist.css'
import { graphql, Link, useStaticQuery } from "gatsby";
import { Child } from "../components/childern"
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// interface  Props{
//   //   author : String ,
//   //   title : String ,
//   //   blogTitle : String ,
//   //   blogImage :
  
//   // }


export default function Blog() {

  const query = useStaticQuery(
    graphql`
 {
      allContentfulBlogSite {
        edges {
          node {
            author
            slug
            title
            blogTitle
            blogImage {
                fluid {

                    ...GatsbyContentfulFluid
                  }
                      }

 
        
            richDesc {
              raw
            }
            blogSubtitle {
              blogSubtitle
            }
            data(formatString: "MMM D YYYY")
            subDesc {
              subDesc
            }
          }
        }
      }
    }
          
`)

  return (
    <div>

      <Child>
        <h1 className="title" >  My ALL CMS BLOG </h1>

        <p className="text" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type<br />
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also<br />
          the leap into electronic typesetting, remaining essentially unchanged. It was popularised<br />
          in the 1960s </p>

        <ul>
          {query.allContentfulBlogSite.edges.map((ind) => {

            return (

              <li className="post" >
                <span className="postImages"> <Img fluid={ind.node.blogImage[0]?.fluid} /> </span>
                <div className="text-container" >
                  <span  >    <Link to={`/blog/${ind.node.slug}`} >  <h2 className="posttitle" >  {ind.node.blogTitle}</h2> </Link>  </span  >
                  <span className="posttext" > {documentToReactComponents(JSON.parse(ind.node.richDesc.raw))}</span>
                </div>

              </li>


            )
          })
          }
        </ul>

      </Child>
    </div>
  )
}
