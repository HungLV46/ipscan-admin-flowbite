import { listProduct, type ProductResponseData } from '$lib/apis/product/list-product';
import type { ListResponse } from '$lib/apis/types.js';
import * as _ from 'underscore';

export async function load() : Promise<ListResponse<ProductResponseData>> {
  return listProduct();
}
