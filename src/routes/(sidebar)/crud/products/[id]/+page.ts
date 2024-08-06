
import { getProductById, type ProductResponseData } from '$lib/apis/product/get-product';

export async function load({ params }) : Promise<ProductResponseData> {
  return getProductById(parseInt(params.id));
}
