import { requester } from "../lib/requester";


const baseUrl = "http://localhost:3030/data/testimonials";

export const getAllTestimonial = async () => {
    const result = await requester("GET", baseUrl);
    const testimonials= Object.values(result);
    console.log(result);
    return testimonials;
};

export const create = async (data)=>{
    const result = requester("POST", baseUrl, data);

    return result;
}