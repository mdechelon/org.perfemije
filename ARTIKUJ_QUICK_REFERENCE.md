# Artikuj Quick Reference Card

## 📋 Quick Lookup

### File Locations

```
/src/pages/artikuj.js                    ← List page
/src/templates/artikuj-post.js           ← Post template
/gatsby-node.js                          ← Updated for page creation
/gatsby-config.js                        ← Updated for sitemap
/ARTIKUJ_IMPLEMENTATION.md               ← Full documentation
```

### URLs

- **Listing**: `/artikuj/`
- **Post**: `/artikuj/{slug}/`

### Contentful Type

- **GraphQL Type**: `ContentfulArtikuj`
- **Query**: `allContentfulArtikuj`
- **Field access**: `data.contentfulArtikuj`

---

## 🔍 Quick Comparison Matrix

```
╔════════════════╦════════════╦═════════╦═══════════╗
║ Feature        ║ BlogPost   ║ Vjersha ║ Artikuj   ║
╠════════════════╬════════════╬═════════╬═══════════╣
║ List Page      ║ blog.js    ║ vjersha ║ artikuj   ║
║ Template       ║ blog-post  ║ vjersha ║ artikuj   ║
║ URL Prefix     ║ /kenge/    ║ /vjersha║ /artikuj/ ║
║ ContentType    ║ BlogPost   ║ Vjersha ║ Artikuj   ║
║ gatsby-node    ║ ✓          ║ ✓       ║ ✓         ║
║ gatsby-config  ║ ✓          ║ ✓       ║ ✓         ║
║ Sitemap        ║ ✓          ║ ✓       ║ ✓         ║
╚════════════════╩════════════╩═════════╩═══════════╝
```

---

## 📦 Required Contentful Fields

| Field       | Type          | Required | Description        |
|-------------|---------------|----------|--------------------|
| slug        | Text (Unique) | ✓        | URL identifier     |
| title       | Text          | ✓        | Article title      |
| publishDate | Date          | ✓        | Publication date   |
| heroImage   | Image         | ✓        | Featured image     |
| description | Rich Text     | ✓        | Short description  |
| body        | Rich Text     | ✓        | Main content       |
| author      | Reference     | ✓        | Author info        |
| tags        | Array         | ✓        | Article tags       |
| videoUrl    | Text          | ✗        | Optional video URL |
| updatedAt   | Date          | ✓        | Last updated       |

---

## 🎨 Component Hierarchy

```
artikuj.js (List Page)
├── Layout
├── Seo
└── ArticlePreview
    └── links to /artikuj/{slug}/

artikuj-post.js (Post Template)
├── Layout
├── Seo
├── Intro
│   └── Hero Image + Video
├── Tags
├── Article Body (Rich Text)
│   └── Embedded Images/Assets
└── Navigation
    ├── Previous Post Link
    └── Next Post Link
```

---

## 🚀 Deployment Commands

```bash
# Clean cache
gatsby clean

# Rebuild site
gatsby build

# Test locally
gatsby develop

# Deploy
npm run deploy  # (depends on your setup)
```

---

## 🔗 Linking Between Content Types

**From Artikuj to Kenge**: `https://www.perfemije.org/kenge/{slug}/`
**From Artikuj to Vjersha**: `https://www.perfemije.org/vjersha/{slug}/`
**From Artikuj to Artikuj**: `https://www.perfemije.org/artikuj/{slug}/`

---

## 📊 GraphQL Query Templates

### List All Artikuj

```graphql
query {
  allContentfulArtikuj(sort: { publishDate: DESC }) {
    nodes {
      title
      slug
      publishDate
      heroImage { gatsbyImage }
      description { raw }
    }
  }
}
```

### Single Artikuj Post

```graphql
query {
  contentfulArtikuj(slug: { eq: "my-article" }) {
    title
    slug
    body { raw }
    tags
    author { name }
  }
}
```

---

## ⚡ Common Modifications

### Change URL Prefix

File: `gatsby-node.js` → Find `/artikuj/` → Replace with new prefix

### Change Page Title

File: `artikuj.js` → `<Seo title="Your Title" />`

### Change Post Title Format

File: `artikuj-post.js` → Update Seo title template

### Change Link Style

File: `blog-post.module.css` → Modify `.articleNavigation` styles

### Add New Field to Query

File: `artikuj-post.js` GraphQL query → Add field to `contentfulArtikuj` query

---

## 🐛 Debugging Tips

1. **Pages not generating?**
    - Check `gatsby-node.js` for errors
    - Ensure Contentful has published Artikuj entries
    - Run `gatsby clean`

2. **Images not showing?**
    - Verify heroImage field is populated in Contentful
    - Check image resize dimensions

3. **Navigation broken?**
    - Verify all articles have slugs
    - Check slug format (no spaces, lowercase preferred)

4. **Sitemap missing artikuj?**
    - Verify `gatsby-config.js` includes artikuj mapping
    - Rebuild site

---

## 📝 Notes

- Artikuj ordering is by `publishDate DESC` (newest first)
- Previous/Next navigation maintains publication order
- Reading time is auto-calculated from body content
- All articles support embedded video via `videoUrl`
- Images in rich text are optimized by Gatsby Image plugin
- SEO title includes breadcrumb keywords for better ranking

---

**Last Updated**: January 3, 2026
**Version**: 1.0

