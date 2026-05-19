"use server";

import WooCommerceRestApi from "woocommerce-rest-ts-api";

const woocommerce = new WooCommerceRestApi({
  url: "https://dev-yeezy-by-baptist.pantheonsite.io",
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

export const getProducts = async () => {
  try {
    const products = await woocommerce.get("products");
    return products.data;
  } catch (error: any) {
    console.error(
      "WooCommerce API Error:",
      error.reponse?.data || error.message,
    );
    return [];
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await woocommerce.get(`products`, {
      id: parseInt(id),
    });
    return product.data;
  } catch (error: any) {
    console.error(
      "WooCommerce API Error:",
      error.response?.data || error.message,
    );
    return [];
  }
};
