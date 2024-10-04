export const ComposeUrl = (baseUrl, route, apiKey, page = 1) => {
    const url = new URL(baseUrl);
    url.pathname += route;
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("page", page)
    return url.toString();
}