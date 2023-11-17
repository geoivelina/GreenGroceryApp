export const requester = async (method, url) => {
    const res = await fetch(url, {
        method,
    });
    try {
        const result = await res.json();

        return result;
    } catch (error) {
        return {};
    }
};
