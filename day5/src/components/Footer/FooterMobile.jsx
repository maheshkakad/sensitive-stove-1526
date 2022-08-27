import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const FooterMobile = () => {
  const [product, setProduct] = useState(false);
  const [solution, setSolution] = useState(false);
  const [resource, setResource] = useState(false);
  const [company, setCompany] = useState(false);
  const [guide, setGuide] = useState(false);
  const [blog, setBlog] = useState(false);
  return (
    <div className="footer-mobile">
      <div>
        <h3
          onClick={() => setProduct(!product)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Product</span>
          <span>
            {product ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {product && (
          <div>
            <ul>
              <li>Product tour</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Apps & integrations</li>
              <li>Task management</li>
              <li>Gantt charts</li>
              <li>Wrike status</li>
              <li>Security</li>
              <li>CA notice at collection</li>
              <li>API</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <h3
          onClick={() => setSolution(!solution)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Solutions</span>
          <span>
            {solution ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {solution && (
          <div>
            <ul>
              <li>All teams</li>
              <li>Marketing</li>
              <li>Creative</li>
              <li>Project management</li>
              <li>Product development</li>
              <li>Business operations</li>
              <li>Professional services</li>
              <li>Students</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <h3
          onClick={() => setResource(!resource)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Resources</span>
          <span>
            {resource ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {resource && (
          <div>
            <ul>
              <li>Help Center</li>
              <li>Community</li>
              <li>Webinars</li>
              <li>Interactive training</li>
              <li>Support</li>
              <li>Google project management tools</li>
              <li>Remote Work Guide</li>
              <li>Free online collaboration software</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <h3
          onClick={() => setCompany(!company)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Company</span>
          <span>
            {company ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {company && (
          <div>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Our customers</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Newsroom</li>
              <li>Partner program</li>
              <li>User conference</li>
              <li>Contact us</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <h3
          onClick={() => setGuide(!guide)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Guides</span>
          <span>
            {guide ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {guide && (
          <div>
            <ul>
              <li>Project Management Guide</li>
              <li>Professional Services Guide</li>
              <li>Kanban Guide</li>
              <li>Agile Guide</li>
              <li>Remote Work Guide</li>
              <li>Return To Work Guide</li>
              <li>Marketing Guide</li>
              <li>Scrum Guide</li>
              <li>Product Management Guide</li>
              <li>Digital Marketing Guide</li>
              <li>Go-to-Market Guide</li>
              <li>Collaborative Work Management Guide</li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <h3
          onClick={() => setBlog(!blog)}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Latest in Wrike Blog</span>
          <span>
            {blog ? (
              <AiFillCaretUp style={{ fontSize: "0.75rem" }} />
            ) : (
              <AiFillCaretDown style={{ fontSize: "0.75rem" }} />
            )}
          </span>
        </h3>
        {blog && (
          <div>
            <ul>
              <li>Why Your Team Needs Social Media Automation in 2022</li>
              <li>RFQs Explained: How to Write a Request for Quote</li>
              <li>Lessons We Can Learn From the Great Resignation</li>
              <li>Do Remote Marketing Jobs Offer Higher Salaries?</li>
              <li>Marketing to Gen Z: The Complete Marketing Strategy Guide</li>
              <li>How To Enhance Design Operations for Creative Teams</li>
              <li>
                The State of IT in 2022: Why IT Teams Need Flexible Project
                Management
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterMobile;
