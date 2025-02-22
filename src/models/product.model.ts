export class Product {
  id?: number;
  productName?: string;
  category_id?: number;
  price?: string;
  description?: string;

  constructor({ id, productName, category_id, price, description }) {
    if (id !== undefined) this.id = id;
    if (productName !== undefined) this.productName = productName;
    if (price !== undefined) this.price = price;
    if (category_id !== undefined) this.category_id = category_id;
    if (description !== undefined) this.description = description;
  }
}