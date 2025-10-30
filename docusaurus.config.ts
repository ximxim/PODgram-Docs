import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PODgram.ai Documentation',
  tagline: 'Complete guide for PODgram.ai users',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.podgram.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ximxim', // Usually your GitHub org/user name.
  projectName: 'podgram-docs', // Usually your repo name.
  
  // GitHub Pages adds a trailing slash by default that we need to customize
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ximxim/podgram-docs/tree/main/',
          // Hide breadcrumbs globally
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ximxim/podgram-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        // Generate both index and full content files
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        
        // Generate individual markdown files following llmstxt.org spec
        generateMarkdownFiles: true,
        
        // Clean up content for LLM consumption
        excludeImports: true,           // Remove React component imports
        removeDuplicateHeadings: true,  // Remove redundant headings
        
        // Logical content ordering
        includeOrder: [
          'welcome.mdx',                // Start with welcome/overview
          'quick-start-guide.mdx',      // Then quick start
          'features/*',                 // All feature documentation
          'prompting-guide/**/*',       // Complete prompting guide
          'plans.mdx',                  // Pricing plans
          'faq.mdx',                    // FAQ
          'support.mdx',                // Support information
          'company.mdx',                // Company info
          'privacy-policy.mdx',         // Legal docs
          'terms-of-service.mdx',
        ],
        
        // Path transformation - remove 'docs' prefix since routeBasePath is '/'
        pathTransformation: {
          ignorePaths: ['docs']
        },
        
        // Output directory (default is 'build')
        outputDir: 'build',
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For docs only mode, we need to set the correct route base path
        docsRouteBasePath: "/",
        // Index documentation pages
        indexDocs: true,
        // Don't index blog pages since we're in docs-only mode
        indexBlog: false,
        // Don't index other pages
        indexPages: false,
        // Language support
        language: "en",
        // Customize search result limits
        searchResultLimits: 8,
        // Highlight search terms on target page
        highlightSearchTermsOnTargetPage: false,
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/podgram-social-card.png',
    // Add additional metadata for better social media support
    metadata: [
      {name: 'keywords', content: 'PODgram, AI, Discord bot, documentation, print on demand, automation'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@podgram_ai'},
      {name: 'twitter:creator', content: '@podgram_ai'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'PODgram.ai Documentation'},
    ],
    navbar: {
      title: 'PODgram.ai',
      logo: {
        alt: 'PODgram.ai Logo',
        src: 'img/logo.png',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Installation',
          items: [
            {
              label: 'Discord Bot',
              href: 'https://discord.com/oauth2/authorize?client_id=1374839567907029034',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hfEahVFSzn',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
