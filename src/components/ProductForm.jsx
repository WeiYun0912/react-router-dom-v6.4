import React from "react";
import { Form, useNavigation } from "react-router-dom";

const ProductForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </p>
      <button type="submit">{isSubmitting ? "Submit..." : "Submit"}</button>
    </Form>
  );
};

export default ProductForm;
