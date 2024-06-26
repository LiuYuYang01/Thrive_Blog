interface Social { name: string, url: string }

interface WebConfig {
    url: string,
    title: string,
    subhead: string,
    favicon: string,
    light_logo: string,
    dark_logo: string,
    description: string,
    keyword: string,
    footer: string,
    font: string,
    covers: string[],
    social: Social[],
}