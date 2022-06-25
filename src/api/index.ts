import axios from "axios";

export const analyze = (content: string[]) => {
    return axios.post(
        "/analyze",
        { content },
        {
            params: { html: true },
            baseURL: import.meta.env.VITE_SERVERLESS_API
        }
    );
};
