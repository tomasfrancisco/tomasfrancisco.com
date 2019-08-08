import { Link } from 'gatsby';
import * as React from 'react';
import { SEO } from 'src/components/atoms/seo';

const NotFoundPage = () => (
  <>
    <SEO />
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </>
)

export default NotFoundPage
