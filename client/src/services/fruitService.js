import { requester } from "../lib/requester";

const baseUrl = "http://localhost:3030/data/fruits";

export const getAllFruits = async () => {
    const result = await requester("GET", baseUrl);
    const fruits = Object.values(result);

    return fruits;
};

export const getFruitBy = async (fruitId) => {
    const result = await requester("GET", `${baseUrl}/${fruitId}`);

    return result;
};
