import React from "react";
// import classNames from "classnames";

import Card from "../card/card";
// import Button from "../button/button";
// import Topics from "../topics/topics";

function HighlightContents({ data }) {
  const cardStyles = "col-12 col-md-6 mb-3 mb-md-4 col-lg-4";

  return (
    <section
      className="section-editorial"
      aria-describedby="sandbox-list-title"
    >
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 g-0">
            <div className="px-3 px-lg-0 px-lg-5">
              <h2
                className="border-bottom pb-4 mb-4 mb-md-5"
                id="sandbox-list-title"
              >
                Sandbox page query
              </h2>
              <p className="lead mb-5">
                - to use variables for filter query we need to switch to a
                createPage approach all the pages with dinamic contents? In
                Gatsby node right?
              </p>
              <div className="row pb-4">
                {data.edges.map(({ node }) => (
                  <div key={node.seo.title} className={cardStyles}>
                    <Card
                      img={node.components.imageIcons.image}
                      title={node.components.hero.title}
                      url={node.seo.pathname}
                      description={node.seo.description}
                      fullHeight
                      // tag={node.components.hero.tag}
                      tags={node.components.hero.kangaroo.tags}
                    />
                    {/* <h3><Link to={node.seo.pathname}>{node.components.hero.title}</Link></h3> */}
                    {/* <p>{node.seo.description}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightContents;