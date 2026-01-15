const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ color: "#a61042" }}
        >
          Who is REACH Furniture Studio for?
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          REACH Furniture Studio is ideal for organizations that design, sell, or
          implement furniture and interiors, and need realistic 3D visualization
          to speed decisions and boost conversions.
        </p>

        <div className="max-w-5xl mx-auto space-y-10 text-gray-700 text-lg">

          {/* Furniture Brands */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Furniture brands and manufacturers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Companies developing new furniture collections that want digital
                prototypes instead of multiple physical samples for design reviews.
              </li>
              <li>
                Brands needing a consistent 3D asset library for catalogs, websites,
                and dealer presentations across markets.
              </li>
            </ul>
          </div>

          {/* Retailers */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Online and offline furniture retailers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                E-commerce portals needing interactive 3D/360° views and room previews
                to increase sales and reduce returns.
              </li>
              <li>
                Physical stores using digital kiosks to show variants, finishes,
                and combinations not on display.
              </li>
            </ul>
          </div>

          {/* Interior Designers */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Interior designers and fit-out firms
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Studios presenting realistic room layouts to get faster client approvals.
              </li>
              <li>
                Turnkey contractors coordinating with clients and execution teams
                using 3D visuals.
              </li>
            </ul>
          </div>

          {/* Franchisors */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Furniture franchisors and dealer networks
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Franchisors providing standardized 3D tools to dealers for customization
                and proposals.
              </li>
              <li>
                Dealer showrooms using visual configurators during customer discussions.
              </li>
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Marketing, CGI, and content studios
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                CGI studios creating lifestyle renders and interactive product content.
              </li>
              <li>
                Marketing teams replacing photoshoots with reusable 3D scenes.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Education and training institutes
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Design schools teaching professional 3D furniture visualization.
              </li>
              <li>
                Vocational centres training for digital showroom and pre-sales roles.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
