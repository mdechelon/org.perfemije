# Artikuj Implementation Reference Document

This document contains all the information about the Artikuj feature implementation for the org.perfemije project.

## Overview

The Artikuj feature follows the same pattern as Vjersha and Kenge (BlogPost). It provides:

- A list page (`artikuj.js`) showing all Artikuj items
- Individual post pages (`artikuj-post.js`) for each Artikuj item
- Automatic page generation via gatsby-node.js
- Sitemap integration in gatsby-config.js

## Files Created/Modified

### 1. Created: `/src/pages/artikuj.js`

**Purpose**: Main listing page for all Artikuj posts

**Key Components**:

- Class component: `ArtikujIndex`
- Queries: `allContentfulArtikuj` (sorted by publishDate DESC)
- Uses `ArticlePreview` component with linkName="/artikuj"
- SEO title: "Artikuj per femije"

**GraphQL Query Fields**:

```
- title
- slug
- publishDate (formatted as "MMMM Do, YYYY")
- heroImage (FULL_WIDTH layout, BLURRED placeholder, 424x212)
- description (raw)
```

---

### 2. Created: `/src/templates/artikuj-post.js`

**Purpose**: Individual Artikuj post template

**Key Components**:

- Class component: `ArtikujPostTemplate`
- Uses `Intro`, `Tags`, Layout, and SEO components
- Renders rich text body content
- Navigation to previous/next articles
- Displays author, publish date, and reading time

**GraphQL Query**:

```graphql
query ArtikujBySlug($slug: String!, $previousPostSlug: String, $nextPostSlug: String)
```

**Query Fields**:

```
- slug
- title
- author.name
- publishDate (formatted as "MMMM Do, YYYY")
- heroImage (FULL_WIDTH layout, BLURRED placeholder, 1280 width)
- heroImage resize (630x1200 for social sharing)
- body (raw rich text)
- tags
- description (raw)
- videoUrl
```

**Navigation Links**: Format is `/artikuj/{slug}`

---

### 3. Modified: `/gatsby-node.js`

**Changes**:

- Added Artikuj content type page creation before Vjersha
- Queries `allContentfulArtikuj` sorted by publishDate DESC
- Creates pages with path format: `/artikuj/{slug}/`
- Includes previous/next post context for navigation

**Code Pattern**:

```javascript
// Define a template for artikuj post
const artikujPost = path.resolve('./src/templates/artikuj-post.js')

const resultArtikuj = await graphql(...)
const artikujat = resultArtikuj.data.allContentfulArtikuj.nodes

if (artikujat.length > 0) {
  artikujat.forEach((post, index) => {
    const previousPostSlug = index === 0 ? null : artikujat[index - 1].slug
    const nextPostSlug = index === artikujat.length - 1 ? null : artikujat[index + 1].slug

    createPage({
      path: `/artikuj/${post.slug}/`,
      component: artikujPost,
      context: { slug: post.slug, previousPostSlug, nextPostSlug }
    })
  })
}
```

---

### 4. Modified: `/gatsby-config.js`

**Changes Made**:

#### A. Added to Sitemap Query (line ~45):

```graphql
allContentfulArtikuj {
  edges {
    node {
      path: slug
      updatedAt
    }
  }
}
```

#### B. Updated resolvePages Function:

- Added `allContentfulArtikuj` to function parameters
- Created `artikuj` mapping from edges
- Added `/artikuj/` to otherPages list
- Updated return to include artikuj: `return [...kenge, ...vjersha, ...artikuj, ...otherPages]`

**Artikuj Mapping Pattern**:

```javascript
const artikuj = allContentfulArtikuj.edges.map((edge) => {
  return {
    path: `/artikuj/${edge.node.path}/`,
    updatedAt: edge.node.updatedAt
  }
})
```

---

## Content Model (Contentful)

The `allContentfulArtikuj` should be a Contentful content model with these fields:

- `slug` (string, unique) - Used in URL generation
- `title` (string) - Article title
- `publishDate` (date) - Publication date
- `heroImage` (image) - Featured image
- `description` (rich text) - Short description
- `body` (rich text) - Main content
- `tags` (array) - Article tags
- `author` (reference) - Author reference
- `videoUrl` (string, optional) - Embedded video URL
- `updatedAt` (date) - Last update date

---

## URL Structure

- **Listing page**: `https://www.perfemije.org/artikuj/`
- **Individual post**: `https://www.perfemije.org/artikuj/{slug}/`
- **Previous/Next navigation**: Uses `/artikuj/` prefix

**Example**: `https://www.perfemije.org/artikuj/my-article-slug/`

---

## Component Dependencies

### `artikuj.js` uses:

- `Seo` - SEO component
- `Layout` - Layout wrapper
- `ArticlePreview` - Article listing component

### `artikuj-post.js` uses:

- `Seo` - SEO component
- `Layout` - Layout wrapper
- `Intro` - Hero/intro section
- `Tags` - Tag display component
- `blog-post.module.css` - Styling module
- `intro.module.css` - Intro styling
- `gatsby-source-contentful/rich-text` - Rich text renderer
- `gatsby-plugin-image` - Image optimization
- External: `lodash`, `moment`, `reading-time`

---

## Styling

Both components use CSS modules:

- `blog-post.module.css` - Contains styles for:
    - `.article` - Article container
    - `.body` - Article body content
    - `.meta` - Metadata (author, date, reading time)
    - `.container` - Main container
    - `.articleNavigation` - Previous/next navigation

- `intro.module.css` - Contains styles for:
    - `.content` - Content wrapper
    - `.details` - Details section
    - `.title` - Title styling

---

## SEO Integration

Both pages implement SEO best practices:

**`artikuj.js`**:

- Basic title: "Artikuj per femije"

**`artikuj-post.js`**:

- Dynamic title:
  `"Artikuj per femije ne shqip | {title} | Kenge, vjersha, perralla, lorja per femije, vjersha per femije ne shqip"`
- Dynamic description: Concatenation of plain text from description and body
- Open Graph image: Uses heroImage resize (1200x630) for social sharing

---

## Navigation Implementation

**Previous/Next Articles**:

- Only displays if previous or next post exists
- Links use format: `/artikuj/{slug}`
- Sorted by `publishDate` (DESC) to maintain chronological order

**Example Navigation HTML**:

```jsx
{previous && (
  <Link to={`/artikuj/${previous.slug}`} rel="prev">
    ← {previous.title}
  </Link>
)}
{next && (
  <Link to={`/artikuj/${next.slug}`} rel="next">
    {next.title} →
  </Link>
)}
```

---

## Reading Time Calculation

Uses `reading-time` library to calculate reading time from plain text body.
Displayed as: `{minutes} min lexim`

---

## Rich Text Rendering

Uses `gatsby-source-contentful/rich-text` to render rich text with custom options:

```javascript
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImage, description } = node.data.target
      return (
        <GatsbyImage
          image={getImage(gatsbyImage)}
          alt={description}
        />
      )
    },
  },
}
```

Handles embedded images/assets within article content.

---

## Integration Checklist

When using the Artikuj feature, ensure:

- [ ] Contentful space has `Artikuj` content model
- [ ] All required fields are populated in Contentful
- [ ] At least one Artikuj entry exists for testing
- [ ] gatsby-node.js is properly updated (✓ done)
- [ ] gatsby-config.js is properly updated (✓ done)
- [ ] `/src/pages/artikuj.js` exists (✓ done)
- [ ] `/src/templates/artikuj-post.js` exists (✓ done)
- [ ] Run `gatsby build` to regenerate pages
- [ ] Test listing page: `/artikuj/`
- [ ] Test individual post: `/artikuj/{any-slug}/`
- [ ] Test navigation links between posts
- [ ] Verify sitemap includes `/artikuj/` pages

---

## Deployment Notes

1. **Build Process**: After updating gatsby-config.js and gatsby-node.js, rebuild the site:
   ```bash
   npm run build
   # or
   gatsby build
   ```

2. **Contentful Publishing**: Ensure all Artikuj entries are published in Contentful

3. **Cache Clearing**: Clear Gatsby cache if pages don't update:
   ```bash
   gatsby clean
   gatsby build
   ```

4. **Environment Variables**: Ensure CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, and CONTENTFUL_HOST are set

---

## Future Enhancements

Potential improvements for Artikuj feature:

- Add category filtering
- Implement search functionality
- Add related articles section
- Create Artikuj sitemap alternative for large datasets
- Add comment system
- Implement reading progress indicator
- Add social sharing buttons

---

## Comparison with Other Content Types

| Feature          | BlogPost (Kenge)              | Vjersha                          | Artikuj                            |
|------------------|-------------------------------|----------------------------------|------------------------------------|
| Page             | `/src/pages/blog.js`          | `/src/pages/vjersha.js`          | `/src/pages/artikuj.js` ✓          |
| Template         | `/src/templates/blog-post.js` | `/src/templates/vjersha-post.js` | `/src/templates/artikuj-post.js` ✓ |
| URL Prefix       | `/kenge/`                     | `/vjersha/`                      | `/artikuj/` ✓                      |
| Contentful Type  | ContentfulBlogPost            | ContentfulVjersha                | ContentfulArtikuj ✓                |
| gatsby-node.js   | ✓                             | ✓                                | ✓                                  |
| gatsby-config.js | ✓                             | ✓                                | ✓                                  |
| Sitemap Included | ✓                             | ✓                                | ✓                                  |

---

**Document Created**: January 3, 2026
**Last Updated**: January 3, 2026
**Status**: Implementation Complete ✓

