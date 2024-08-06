export interface ProductGetResponseData {
  id: number;
  name: string;
  owner: { name: string };
  avatar_img: string;
  banner_img: string;
  category: string;
  description: string;
  created_at: string;
  featured_at: string | null;
  product_attributes: { name: string; value: string }[];
  metadata: any;
};

export async function getProductById(id: number): Promise<ProductGetResponseData> {
  const operationName = "ipscanProductById";

  const operationsDoc = `
    query ${operationName}($id: Int!) {
      ipscan_products(where: {id: {_eq: $id}}) {
        avatar_img
        banner_img
        category
        created_at
        description
        featured_at
        id
        metadata
        name
        stat_floor_price_12m
        stat_floor_price_30d
        stat_floor_price_7d
        stat_floor_price_all
        stat_total_activities
        stat_total_collection
        stat_total_items
        stat_total_volume_12m
        stat_total_volume_30d
        stat_total_volume_7d
        stat_total_volume_all
        product_attributes {
          name
          value
        }
        owner {
          name
        }
      }
    }
  `;

  return fetch("https://graphql.dev.seekhype.io/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: { id: id },
      operationName: operationName,
    }),
    headers: {
      "x-hasura-admin-secret": "@$&091A93ZcR",
    },
  })
    .then((response) => response.json())
    .then((response) => response.data);
}
