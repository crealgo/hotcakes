namespace Project {
    interface Root {
        props: Props;
        page: string;
        query: Query;
        buildId: string;
        isFallback: boolean;
        gsp: boolean;
        scriptLoader: unknown[];
    }

    interface Props {
        pageProps: PageProps;
        __N_SSG: boolean;
    }

    interface PageProps {
        mainLinks: MainLink[];
        socialLinks: SocialLink[];
        projectInfo: ProjectInfo;
        seo: Seo;
    }

    interface MainLink {
        id: number;
        title: string;
        slug: string;
        color: string;
        icon: string;
        status: string;
        url: string;
        data_action: string;
    }

    interface SocialLink {
        title: string;
        slug: string;
        color: string;
        icon: string;
        url: string;
    }

    interface ProjectInfo {
        id: number;
        date: string;
        title: string;
        slug: string;
        summary: string;
        introduction: string;
        tags: Tag[];
        categories: Category[];
        content: Content;
        fonts: Fonts;
        palette: Palette;
    }

    interface Tag {
        term_id: number;
        name: string;
        slug: string;
        term_group: number;
        term_taxonomy_id: number;
        taxonomy: string;
        description: string;
        parent: number;
        count: number;
        filter: string;
    }

    interface Category {
        term_id: number;
        name: string;
        slug: string;
        term_group: number;
        term_taxonomy_id: number;
        taxonomy: string;
        description: string;
        parent: number;
        count: number;
        filter: string;
        cat_ID: number;
        category_count: number;
        category_description: string;
        cat_name: string;
        category_nicename: string;
        category_parent: number;
    }

    interface Content {
        final: Final[];
        work: Work[];
    }

    interface Final {
        id: number;
        name: string;
        mime_type: string;
        url: string;
        caption: string;
        filesize: number;
        icon: string;
        sizes: Sizes;
        width: number;
        height: number;
    }

    interface Sizes {
        thumbnail: string;
        'thumbnail-width': number;
        'thumbnail-height': number;
        medium: string;
        'medium-width': number;
        'medium-height': number;
        medium_large: string;
        'medium_large-width': number;
        'medium_large-height': number;
        large: string;
        'large-width': number;
        'large-height': number;
        '1536x1536': string;
        '1536x1536-width': number;
        '1536x1536-height': number;
        '2048x2048': string;
        '2048x2048-width': number;
        '2048x2048-height': number;
        indexp: string;
        'indexp-width': number;
        'indexp-height': number;
        indexl: string;
        'indexl-width': number;
        'indexl-height': number;
        related: string;
        'related-width': number;
        'related-height': number;
    }

    interface Work {
        title: string;
        description: string;
        images: Image[];
    }

    interface Image {
        id: number;
        name: string;
        mime_type: string;
        url: string;
        caption: string;
        filesize: number;
        icon: string;
        sizes: Sizes2;
        width: number;
        height: number;
    }

    interface Sizes2 {
        thumbnail: string;
        'thumbnail-width': number;
        'thumbnail-height': number;
        medium: string;
        'medium-width': number;
        'medium-height': number;
        medium_large: string;
        'medium_large-width': number;
        'medium_large-height': number;
        large: string;
        'large-width': number;
        'large-height': number;
        '1536x1536': string;
        '1536x1536-width': number;
        '1536x1536-height': number;
        '2048x2048': string;
        '2048x2048-width': number;
        '2048x2048-height': number;
        indexp: string;
        'indexp-width': number;
        'indexp-height': number;
        indexl: string;
        'indexl-width': number;
        'indexl-height': number;
        related: string;
        'related-width': number;
        'related-height': number;
    }

    interface Fonts {
        families: Family[];
        description: string;
    }

    interface Family {
        font: Font;
    }

    interface Font {
        font: string;
        variants: string[];
        subsets: string[];
    }

    interface Palette {
        colors: Color[];
        description: string;
    }

    interface Color {
        name: string;
        hex: string;
        cmyk: string;
        contrast: string;
        rgb: string;
    }

    interface Seo {
        id: number;
        date: string;
        date_gmt: string;
        guid: Guid;
        modified: string;
        modified_gmt: string;
        slug: string;
        status: string;
        type: string;
        link: string;
        title: Title;
        content: Content2;
        excerpt: Excerpt;
        author: number;
        featured_media: number;
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        template: string;
        format: string;
        meta: unknown[];
        categories: number[];
        tags: number[];
        acf: Acf;
        yoast_head: string;
        yoast_head_json: YoastHeadJson;
        jetpack_featured_media_url: string;
        jetpack_shortlink: string;
        _links: Links;
    }

    interface Guid {
        rendered: string;
    }

    interface Title {
        rendered: string;
    }

    interface Content2 {
        rendered: string;
        protected: boolean;
    }

    interface Excerpt {
        rendered: string;
        protected: boolean;
    }

    interface Acf {
        work: Work2[];
        final_images: FinalImage[];
        font_description: string;
        fonts: Font2[];
        palette_description: string;
        palette: Palette2[];
    }

    interface Work2 {
        title: string;
        work_description: string;
        work_images: WorkImage[];
    }

    interface WorkImage {
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: Sizes3;
    }

    interface Sizes3 {
        thumbnail: string;
        'thumbnail-width': number;
        'thumbnail-height': number;
        medium: string;
        'medium-width': number;
        'medium-height': number;
        medium_large: string;
        'medium_large-width': number;
        'medium_large-height': number;
        large: string;
        'large-width': number;
        'large-height': number;
        '1536x1536': string;
        '1536x1536-width': number;
        '1536x1536-height': number;
        '2048x2048': string;
        '2048x2048-width': number;
        '2048x2048-height': number;
        indexp: string;
        'indexp-width': number;
        'indexp-height': number;
        indexl: string;
        'indexl-width': number;
        'indexl-height': number;
        related: string;
        'related-width': number;
        'related-height': number;
    }

    interface FinalImage {
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: Sizes4;
    }

    interface Sizes4 {
        thumbnail: string;
        'thumbnail-width': number;
        'thumbnail-height': number;
        medium: string;
        'medium-width': number;
        'medium-height': number;
        medium_large: string;
        'medium_large-width': number;
        'medium_large-height': number;
        large: string;
        'large-width': number;
        'large-height': number;
        '1536x1536': string;
        '1536x1536-width': number;
        '1536x1536-height': number;
        '2048x2048': string;
        '2048x2048-width': number;
        '2048x2048-height': number;
        indexp: string;
        'indexp-width': number;
        'indexp-height': number;
        indexl: string;
        'indexl-width': number;
        'indexl-height': number;
        related: string;
        'related-width': number;
        'related-height': number;
    }

    interface Font2 {
        font: Font3;
    }

    interface Font3 {
        font: string;
        variants: string[];
        subsets: string[];
    }

    interface Palette2 {
        color1: string;
        color2: string;
    }

    interface YoastHeadJson {
        title: string;
        robots: Robots;
        canonical: string;
        og_locale: string;
        og_type: string;
        og_title: string;
        og_url: string;
        og_site_name: string;
        article_published_time: string;
        article_modified_time: string;
        og_image: OgImage[];
        author: string;
        twitter_card: string;
        twitter_misc: TwitterMisc;
        schema: Schema;
    }

    interface Robots {
        index: string;
        follow: string;
        'max-snippet': string;
        'max-image-preview': string;
        'max-video-preview': string;
    }

    interface OgImage {
        width: number;
        height: number;
        url: string;
        type: string;
    }

    interface TwitterMisc {
        'Written by': string;
        'Est. reading time': string;
    }

    interface Schema {
        '@context': string;
        '@graph': Graph[];
    }

    interface Graph {
        '@type': unknown;
        '@id': string;
        isPartOf?: IsPartOf;
        author?: Author;
        headline?: string;
        datePublished?: string;
        dateModified?: string;
        mainEntityOfPage?: MainEntityOfPage;
        wordCount?: number;
        commentCount?: number;
        publisher?: Publisher;
        keywords?: string[];
        articleSection?: string[];
        inLanguage?: string;
        potentialAction?: PotentialAction[];
        url?: string;
        name?: string;
        breadcrumb?: Breadcrumb;
        itemListElement?: ItemListElement[];
        description?: string;
        image?: Image2;
        logo?: Logo;
    }

    interface IsPartOf {
        '@id': string;
    }

    interface Author {
        name: string;
        '@id': string;
    }

    interface MainEntityOfPage {
        '@id': string;
    }

    interface Publisher {
        '@id': string;
    }

    interface PotentialAction {
        '@type': string;
        target: unknown;
        'query-input'?: string;
        name?: string;
    }

    interface Breadcrumb {
        '@id': string;
    }

    interface ItemListElement {
        '@type': string;
        position: number;
        name: string;
    }

    interface Image2 {
        '@type': string;
        inLanguage: string;
        '@id': string;
        url: string;
        contentUrl: string;
        width: number;
        height: number;
        caption: string;
    }

    interface Logo {
        '@id': string;
    }

    interface Links {
        self: Self[];
        collection: Collection[];
        about: About[];
        author: Author2[];
        replies: Reply[];
        'version-history': VersionHistory[];
        'wp:featuredmedia': Featuredmedum[];
        'wp:attachment': WpAttachment[];
        'wp:term': WpTerm[];
        curies: Cury[];
    }

    interface Self {
        href: string;
    }

    interface Collection {
        href: string;
    }

    interface About {
        href: string;
    }

    interface Author2 {
        embeddable: boolean;
        href: string;
    }

    interface Reply {
        embeddable: boolean;
        href: string;
    }

    interface VersionHistory {
        count: number;
        href: string;
    }

    interface Featuredmedum {
        embeddable: boolean;
        href: string;
    }

    interface WpAttachment {
        href: string;
    }

    interface WpTerm {
        taxonomy: string;
        embeddable: boolean;
        href: string;
    }

    interface Cury {
        name: string;
        href: string;
        templated: boolean;
    }

    interface Query {
        slug: string;
    }
}
