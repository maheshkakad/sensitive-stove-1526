import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import Carousel, { CarouselItem } from "../components/shared/Carousel";
import QuoteCard from "../components/Cards/QuoteCard";
import {
  BannerImageCard,
  BannerTextCard,
} from "../components/Cards/BannerCard";

const Data = [
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/01/rebrand-quote-slider_image_walmart_canada_2x.jpg?av=d5e35691719cb1e63e834465386bfcf9",
    discription:
      "“Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work.”",
    company:
      "Francis Lalonde, Vice President of Transportation, Walmart Canada",
    logo: "https://web-static.wrike.com/content/uploads/2022/05/rebrand-quote_logo_walmart_canada_white.svg?av=795fbcf492ed934c24e3f42a76c1d3f5",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/01/rebrand-quote-slider_image_syneos-health_2x.jpg?av=675edb298df70721dcf48c02c67ec608",
    discription:
      "“The moment our teams saw Wrike, we heard a resounding 'yes' – it was the one system that met each and every one of our team’s comprehensive and complex requirements.“",
    company: "Sherrie Besecker, Creative Technology Manager at Syneos Health",
    logo: "https://web-static.wrike.com/content/uploads/2022/05/rebrand-quote_logo_syneos-health-white.svg?av=3e21b4e369158318759fa3733ce138e6",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2022/03/rebrand-quote-slider_image_texas-rangers_2x.png?av=0c496b6cadbd59fead0695de3e43f5c5",
    discription:
      "“I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that.”",
    company:
      "Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers",
    logo: "https://web-static.wrike.com/content/uploads/2022/03/rebrand-quote_logo_texas-rangers_2x.png?av=dbe2a1f16f02730e3c432dd260712f0f",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/06/rebrand-quote-slider_image_monumental_2x.jpg?av=a486ca287bf5dc44431588aa22150ca9",
    discription:
      "“We save time knowing what the clients need from us and then can track the progress of each request, which is something we couldn’t do previously.”",
    company:
      "Lori Meyers, Manager of Digital Assets, Monumental Sports & Entertainment",
    logo: "https://web-static.wrike.com/content/uploads/2021/09/rebrand-quote-slider_logo_monumental-inverse.svg?av=76e74b35ebccddd4c223ed771e2ae19f",
  },
  {
    image:
      "https://web-static.wrike.com/cdn-cgi/image/width=927,fit=cover,format=auto,q=80/content/uploads/2021/07/rebrand-quote-slider_image_kitchenaid_2x.jpg?av=a815976b26dc1095c756e1a2175f9e4d",
    discription:
      "“The end goal was to create an agile, professional design engine. Wrike was our top pick; it was the one solution that we felt could make this a reality.”",
    company: "Ashley Klee, Global Senior Designer, KitchenAid",
    logo: "https://web-static.wrike.com/content/uploads/2021/09/rebrand-quote_logo_kitchenaid-inverse.svg?av=cfdf5c1935895d1830348b41cff5a3f1",
  },
];

const quotesLogo =
  "data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%2264%22%20viewBox%3D%220%200%20100%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22M0%2024.32C0%2010.8884%2010.7226%200%2023.9496%200C37.1766%200%2047.8992%2010.8884%2047.8992%2024.32V40.1067H0V24.32Z%22%20fill%3D%22%2308cf65%22%2F%3E%20%3Cpath%20d%3D%22M52.1008%2024.32C52.1008%2010.8884%2062.8234%200%2076.0504%200C89.2774%200%20100%2010.8884%20100%2024.32V40.1067H52.1008V24.32Z%22%20fill%3D%22%2308cf65%22%2F%3E%20%3Cpath%20d%3D%22M21.9512%2064H22.7574C36.6805%2064%2047.9675%2052.5385%2047.9675%2038.4V30.72H21.9512V64Z%22%20fill%3D%22%2308cf65%22%2F%3E%20%3Cpath%20d%3D%22M73.9837%2064H74.7899C88.7131%2064%20100%2052.5385%20100%2038.4V30.72H73.9837V64Z%22%20fill%3D%22%2308cf65%22%2F%3E%20%3C%2Fsvg%3E%20";

const companies = [
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_google.svg?av=beca5f4cceefb37ded0e3f6cea1d2c34",
    company: "Google",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2022/01/1440_logoroll_logo_syneos_white-1.svg?av=3c51d53d3a2752e057f1e1abfbbebf47",
    company: "Syneos Health",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Siemens.svg?av=5e1fa37e9d06ab82ef08777c7c0e082e",
    company: "Siemens",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/02/1440_logoroll_logo_estee-lauder_white.svg?av=2be9b6d45167ac0cde38a9db25481551",
    company: "Estee lauder",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/11/1440_logoroll_logo_nickelodeon_white.svg?av=42b06a13b1119784a23a94a6b260a40e",
    company: "Nickelodeon",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_white_Oglivy.svg?av=ee1653b2fed429de007bf68906de4575",
    company: "Ogilvy",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2020/09/1440_logoroll_logo_snowflake_white.svg?av=55fc2b6f2809a277065577c0b7f71cf1",
    company: "Snowflake",
  },
  {
    logo: "https://web-static.wrike.com/content/uploads/2021/06/1440_logoroll_logo_lyft_white-1.svg?av=36defb5419ded7146f73cf1f4934c332",
    company: "Lyft",
  },
];

const BannerData = [
  {
    banner: {
      title: "WORK YOUR WAY",
      heading: "Tailored to your needs, not the other way around",
      description:
        "Customize Wrike to best suit your organization. From custom dashboards and workflows to team-specific automation to streamline processes, Wrike has everything you need to work your way. No one else offers this level of versatility.",
      image:
        "https://web-static.wrike.com/cdn-cgi/image/width=704,fit=cover,format=auto,q=80/content/uploads/2020/06/rebrand-screenshot_custom-statuces-workflows_2x.png?av=30d697d3e8e3a5bc8494e184b75ff082",
      link: "Learn more",
    },
    quote: {
      description:
        "Having a single source of truth for information and communication makes it easy for leadership to stay in the loop or get a new team member up to speed quickly. It mitigates the risk of tasks falling through the cracks.",
      department:
        "Shaun Carlson, Director of R&D and Continuous Innovation, Arvig",
      logo: "https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote_logo_white_arvig.svg?av=87b582e470c7fd63e7c8d57152682a5e",
    },
  },
  {
    banner: {
      title: "COLLABORATE ACROSS TEAMS",
      heading: "Work in real-time across your entire org",
      description:
        "Eliminate endless email threads, needless meetings, and copious check-ins with real-time commenting and notifications, live editing, dynamic reports, and more. Best of all? Information can easily be shared with all stakeholders at any time.",
      image:
        "https://web-static.wrike.com/cdn-cgi/image/width=704,fit=cover,format=auto,q=80/content/uploads/2020/11/rebrand-screenshot_commenting_2x.png?av=8760554efd5d8731bfcbbbd41dc2778f",
      link: "Learn more",
    },
    quote: {
      description:
        "Collaboration has improved dramatically, not because the people have changed — we've always wanted to help, but now we have a tool that allows us to figure out how we can help each other better.",
      department: "Katy Scott, Digital Learning Manager, Monterey Bay Aquarium",
      logo: "https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote_logo_white_monterey-bay.svg?av=1dc75eabdbe6724b6e35f7188d1092f3",
    },
  },
  {
    banner: {
      title: "GET END-TO-END VISIBILITY",
      heading: "Always be prepared for what’s next",
      description:
        "Get real-time updates and see potential roadblocks before they happen. Drill down to individual tasks or zoom out for a holistic view of everything in your portfolio. With Wrike, you’ll always have what you need to deliver more projects, faster.",
      image:
        "https://web-static.wrike.com/cdn-cgi/image/width=704,fit=cover,format=auto,q=80/content/uploads/2020/06/rebrand-screenshot_kanban-and-gantt_2x.png?av=ecbb4f0a5a6d11d03dbd171cf4cbbc65",
      link: "Take a tour of Wrike",
    },
    quote: {
      description:
        "We work faster, update key dates for deliverables much more quickly, and eliminate human error. We’ve likely saved around 200 or more hours per year in our launch prep.",
      department: "Brynne Roberts, Director of Creative Operations, Fitbit",
      logo: "https://web-static.wrike.com/content/uploads/2022/07/rebrand-quote_logo_fitbit_white.svg?av=0cb6037be9d0e4a093d64845f45e4b1d",
    },
  },
  {
    banner: {
      title: "BE THE MASTER OF YOUR DATA",
      heading: "Take advantage of our industry-leading security",
      description:
        "Get all the advantages of a cloud-based work management platform with the security you’d expect from an on-premises system. Our enterprise-grade security is unparalleled, and gives you full control over your data.",
      image:
        "https://web-static.wrike.com/cdn-cgi/image/width=704,fit=cover,format=auto,q=80/content/uploads/2021/02/rebrand-screenshot_lock-scheme-dark_2x.png?av=218f3f68dd82f70666a239a60591d99b",
      link: "Be secure with Wrike",
    },
    quote: {
      description:
        "I am so glad that we have Wrike as opposed to having information in hundreds of spreadsheets going around thousands of emails or worse, just in people’s heads.",
      department: "Dave Rorke, Project Officer, University of New South Wales",
      logo: "https://web-static.wrike.com/content/uploads/2021/02/rebrand-quote-logo_white_unsw-sydney.svg?av=cf883813870f9a9b9a089b0de89c24d9",
    },
  },
];

const Home = ({ screenWidth }) => {
  const desktopViewHeader = {
    position: "absolute",
    margin: "0 25%",
    padding: "0",
    zIndex: "1",
    width: "50%",
    paddingTop: "4rem",
    lineHeight: "3rem",
    fontSize: "20px",
    textAlign: "center",
    color: "#fff",
  };

  const mobileViewHeader = {
    backgroundColor: "#0c3245",
    height: "500px",
    lineHeight: screenWidth > 768 ? "3rem" : "2rem",
    padding: `4rem 1rem`,
    fontSize: screenWidth > 678 ? "1.5rem" : "1rem",
    textAlign: "center",
  };

  return (
    <div
      style={{
        paddingTop: "80px",
        color: "#eee",
      }}
    >
      {/* Head */}
      <div>
        <div style={screenWidth >= 1024 ? desktopViewHeader : mobileViewHeader}>
          <h1 style={{ margin: "1.5rem 0" }}>
            Remove barriers, find clarity, exceed goals
          </h1>
          <p>
            Anything is possible with the most powerful work management software
            at your fingertips
          </p>
          <div style={{ marginTop: screenWidth > 768 ? "2rem" : "1rem" }}>
            <input
              style={{
                backgroundColor: "snow",
                color: "#1c1c1c",
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
              placeholder="Enter your business email"
              type="email"
            />
            <button
              style={{
                padding: "1rem",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#07cf65",
                margin: screenWidth < 768 ? "5px 0px" : "10px",
                width: screenWidth < 768 ? "100%" : "auto",
              }}
            >
              Try for free
            </button>
            <div
              style={{ fontSize: "18px", color: "#07cf65", fontWeight: "bold" }}
            >
              <AiOutlinePlayCircle /> Our Story
            </div>
          </div>
        </div>
        <>
          {screenWidth >= 1024 && (
            <img
              src="https://web-static.wrike.com/content/uploads/2022/01/rebrand-hero-illustration_homepage_screenshots_dark_1920x680_1x.png"
              alt="homepage"
              style={{
                position: "relative",
                maxWidth: "100%",
                paddingTop: screenWidth >= 1440 ? "4rem" : "8rem",
                backgroundColor: "#0c3245",
              }}
            />
          )}
        </>
      </div>
      {/* companies */}
      <div style={{ backgroundColor: "#181f39", marginTop: "-5px" }}>
        <h4 style={{ textAlign: "center", padding: "2rem" }}>
          TRUSTED BY 20,000+ HAPPY CUSTOMERS WORLDWIDE
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: screenWidth >= 1440 ? "2rem 8rem" : "2rem",
          }}
        >
          {companies.map((company, index) => (
            <div style={{ margin: "1rem" }} key={index}>
              <img src={company.logo} alt={company.company} />
            </div>
          ))}
        </div>
        {/* Banner */}
        <div
          style={
            screenWidth >= 1024
              ? {
                  display: "grid",
                  padding: "3rem 8rem",
                  gridTemplateColumns: "50% 50%",
                }
              : {
                  display: "flex",
                  padding: "2rem",
                  flexDirection: "column",
                }
          }
        >
          <div>
            <img
              src="https://web-static.wrike.com/cdn-cgi/image/width=704,fit=cover,format=auto,q=80/content/uploads/2022/06/promo-ebook_Dark-Matter-of-Work_Dark-theme_2x.png?av=153921f8a3b563eddf08828774c378ba"
              alt="report"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ lineHeight: "2rem", padding: "4rem 2rem" }}>
              <h2 style={{ marginBottom: "2rem" }}>
                Without a single source of truth for work, it could cost you.
              </h2>
              <p style={{ marginBottom: "3rem" }}>
                New research from Wrike sheds light on the hidden cost of modern
                work complexities caused by low visibility, wasted time, project
                delays, and employee churn. The results are staggering.
              </p>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#07cf65",
                }}
              >
                Download free report{" "}
                <BiRightArrowAlt style={{ margin: "0px 10px" }} />
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div
        style={{
          backgroundColor: "#04444d",
          padding: screenWidth >= 1440 ? "4rem 10rem" : "2rem",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Stories from our customers
        </h1>
        <Carousel>
          {Data.map((item, index) => (
            <CarouselItem key={index}>
              <div
                style={
                  screenWidth >= 1024
                    ? {
                        display: "grid",
                        color: "wheat",
                        gridTemplateColumns: "50% 50%",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                      }
                }
              >
                <div
                  style={{
                    padding: screenWidth >= 1440 ? "2rem 0" : "0 4rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "100%", borderTopLeftRadius: "50%" }}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    padding: screenWidth >= 1440 ? "0 6rem" : "0 4rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        whiteSpace: "normal",
                        margin: "1.5rem 0",
                        fontSize: "1.5rem",
                        fontStyle: "italic",
                      }}
                    >
                      <p>{item.discription}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        whiteSpace: "normal",
                        fontSize: "1rem",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "1rem 0",
                      }}
                    >
                      <div>{item.company}</div>
                      <div>
                        <img src={item.logo} alt="logo" />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "green",
                        alignItems: "center",
                        fontSize: "2rem",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>Watch here</span>{" "}
                      <span
                        style={{
                          margin: "0 10px",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <BiRightArrowAlt />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      {/* Banners */}
      <div
        style={{
          backgroundColor: "#0c3245",
          padding: screenWidth >= 1440 ? "4rem 8rem" : "3rem 2rem",
        }}
      >
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <h1 style={{ marginBottom: "3rem" }}>
            Transform the way your teams work
          </h1>
          <h3>
            Empower your teams to do the best work of their lives with 360°
            visibility, true cross-departmental collaboration, and powerful
            automation.
          </h3>
        </div>
        <div style={{ padding: screenWidth >= 1440 ? "3rem 0" : "2rem 0" }}>
          {BannerData.map((item, index) => (
            <div key={index}>
              <div>
                <QuoteCard quotesLogo={quotesLogo} quote={item.quote} />
              </div>
              <>
                {screenWidth > 1024 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <BannerTextCard
                          link={item.banner.link}
                          description={item.banner.description}
                          heading={item.banner.heading}
                          title={item.banner.title}
                        />
                        <BannerImageCard
                          screenWidth={screenWidth}
                          image={item.banner.image}
                        />
                      </>
                    ) : (
                      <>
                        <BannerImageCard image={item.banner.image} />
                        <BannerTextCard
                          link={item.banner.link}
                          description={item.banner.description}
                          heading={item.banner.heading}
                          title={item.banner.title}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <BannerImageCard image={item.banner.image} />
                    <BannerTextCard
                      link={item.banner.link}
                      description={item.banner.description}
                      heading={item.banner.heading}
                      title={item.banner.title}
                    />
                  </>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
      {/* Foot */}
      <div
        style={{
          backgroundColor: "#181f39",
          padding: screenWidth >= 1440 ? "4rem 6rem" : "4rem 2rem",
        }}
      >
        {screenWidth >= 1280 ? (
          <div
            style={{
              display: "grid",
              padding: "8rem 0",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div style={{ padding: "2rem" }}>
              <h1 style={{ margin: "2rem 0" }}>
                Integrate with the tools you already use
              </h1>
              <p style={{ lineHeight: "2rem", fontSize: "1.5rem" }}>
                Connect your essential business tools to Wrike and make it your
                project control center. Google, Microsoft, Adobe® Creative
                Cloud®, Box, GitHub, JIRA, and many more.
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#08b85a",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  See all apps & integrations{" "}
                </span>
                <BiRightArrowAlt
                  style={{
                    fontSize: "1.3rem",
                    marginLeft: "1rem",
                  }}
                />
              </p>
            </div>
            <div style={{ width: "100%", padding: "1rem", overflow: "hidden" }}>
              <img
                src="https://web-static.wrike.com/content/uploads/2022/04/rebrand-promo-integrations_colored-bg_tablet-mobile.svg?av=e426b481d56a93be469ece759c26fc0f"
                alt="logos"
                style={{ minWidth: "100%" }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div style={{ padding: "2rem 0" }}>
              <img
                src="https://web-static.wrike.com/content/uploads/2022/04/rebrand-promo-integrations_colored-bg_tablet-mobile.svg?av=e426b481d56a93be469ece759c26fc0f"
                alt="logos"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div style={{ padding: "4rem 0" }}>
              <h1 style={{ margin: "2rem 0" }}>
                Integrate with the tools you already use
              </h1>
              <p style={{ lineHeight: "2rem", fontSize: "1.5rem" }}>
                Connect your essential business tools to Wrike and make it your
                project control center. Google, Microsoft, Adobe® Creative
                Cloud®, Box, GitHub, JIRA, and many more.
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#08b85a",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  See all apps & integrations{" "}
                </span>
                <BiRightArrowAlt
                  style={{
                    fontSize: "1.3rem",
                    marginLeft: "1rem",
                  }}
                />
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Email trial */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#0c3245",
          justifyContent: screenWidth > 1440 ? "space-between" : "center",
          width: "100%",
          overflow: "hidden",
          padding: "4rem 0",
        }}
      >
        <div style={{ display: screenWidth >= 1024 ? "block" : "none" }}>
          <img
            src="https://web-static.wrike.com/content/uploads/2020/11/rebrand-cta-center-1_left_darkgreen_1x-1.png"
            alt="design"
            style={{ width: "80%" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ marginBottom: "2rem" }}>Unlock the possibilities</h1>
            <p>
              Work As One™. Experience effortless collaboration with Wrike’s
              work management platform.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                gap: "10px",
              }}
            >
              <div>
                <div style={{ position: "relative" }}>
                  <input
                    style={{
                      padding: "1rem 2rem",
                      fontSize: screenWidth >= 1280 ? "1rem" : "0.75rem",
                      borderRadius: "10px",
                      border: "none",
                    }}
                    type="email"
                    placeholder="Enter Business Email"
                  />
                </div>
              </div>
              <div>
                <button
                  style={{
                    padding: "1rem 2rem",
                    color: "#e1e1e1",
                    backgroundColor: "#0fbf5f",
                    border: "none",
                    fontSize: screenWidth >= 1280 ? "1rem" : "0.75rem",
                    borderRadius: "10px",
                  }}
                >
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: screenWidth >= 1024 ? "block" : "none" }}>
          <img
            src="https://web-static.wrike.com/content/uploads/2021/02/cta-center-1_right_darkgreen_1x.png"
            alt="design"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;