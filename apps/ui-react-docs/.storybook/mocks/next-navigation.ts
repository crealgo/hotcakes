export const usePathname = () => '/';

export const useRouter = () => ({
    push: (href: string) => { window.location.href = href; },
    replace: (href: string) => { window.location.href = href; },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => window.location.reload(),
    prefetch: () => Promise.resolve()
});

export const useSearchParams = () => new URLSearchParams();

export const useParams = () => ({});

export const useServerInsertedHTML = (_callback: () => React.ReactNode) => undefined;
