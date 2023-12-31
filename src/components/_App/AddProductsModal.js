import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import { addProductState } from "../../utils/recoil-atoms";
import ImageUpload from "@/utils/UploadImage";
import firebaseInstance from "@/lib/firebase";
import { firebaseAuthErrorToUserMessage } from "@/utils/firebaseAuthErrorToUserMessage";
import { Button, CircularProgress } from "@mui/material";
import { categoryOptions, subcategoryOptions } from "@/utils/constant";

const saleOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const INITIAL_PRODUCT = {
  count: 1,
  name: "",
  price: "",
  productType: "",
  media: "",
  description: "",
  onSale: null,
  onOffer: "",
};

const AddProductsModal = () => {
  // addProduct Modal
  const [imageUrl, setImageUrl] = useState();
  const [addProduct, setAddProduct] = useRecoilState(addProductState);
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const isProduct = Object.values(product).every((el) => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  const toggleAddProduct = () => {
    setAddProduct(!addProduct);
    // console.log(modal)
  };

  const handleChange = (e) => {
    // console.log(d.value)
    const { name, value, files } = e.target;
    if (name === "media") {
      setProduct((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }));
    }
    // console.log(product);
  };

  const handleSelectInputCategory = (e) => {
    setProduct((prevState) => ({ ...prevState, category: e.value }));
    // console.log(product)
  };
  const handleSelectInputSubcategory = (e) => {
    setProduct((prevState) => ({ ...prevState, subcategory: e.value }));
    // console.log(product)
  };

  const handleOnSaleInput = (e) => {
    setProduct((prevState) => ({ ...prevState, onSale: e.value }));
    // console.log(product)
  };

  //   const handleImageUpload = async () => {
  //     const data = new FormData();
  //     data.append("file", product.media);
  //     data.append("upload_preset", "vikings");
  //     data.append("cloud_name", "dev-empty");
  //     const response = await axios.post(process.env.CLOUDINARY_URL, data);
  //     const mediaUrl = response.data.url;
  //     return mediaUrl;
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(product)
    try {
      setLoading(true);
      setError("");
      //   const imageUrl = await handleImageUpload();
      // console.log(imageUrl)
      //   const mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
      const mediaUrl = imageUrl;
      // console.log(mediaUrl)
      //   const url = `${baseUrl}/api/products/create`;
      const id = firebaseInstance.generateKey();
      console.log(id);
      const {
        name,
        price,
        description,
        category,
        subcategory,
        onSale,
        onOffer,
        count,
      } = product;
      const payload = {
        count,
        name,
        price,
        description,
        category,
        subcategory,
        mediaUrl,
        onSale,
        onOffer,
        _id: id,
      };
      console.log(payload);
      const response = await firebaseInstance
        .addProduct(id, payload)
        .then((e) => console.log("done"))
        .catch((e) => console.error(e));
      console.log(response);
      // console.log({response})
      toggleAddProduct();
      setProduct(INITIAL_PRODUCT);
      setLoading(false);
    } catch (error) {
      //   setError()
      setLoading(false);
      setError(firebaseAuthErrorToUserMessage(error));
    }
  };

  return (
    <div className={`admin-product-modal ${addProduct ? "active" : ""}`}>
      <div className="modal-innter-content">
        <button type="button" className="close">
          <span onClick={toggleAddProduct}>
            <i className="bx bx-x"></i>
          </span>
        </button>

        <div className="modal-body">
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit}>
            <ImageUpload setImageUrl={setImageUrl} imageUrl={imageUrl} />

            <h4 className="title">
              Add your product description and necessary information from here
            </h4>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={product.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                rows="3"
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Categroy</label>
              <Select
                onChange={handleSelectInputCategory}
                options={categoryOptions}
                id="category"
                instanceId="category"
                inputId="category"
              />
            </div>
            <div className="form-group">
              <label>Subcategory</label>
              <Select
                onChange={handleSelectInputSubcategory}
                options={subcategoryOptions}
                id="subcategory"
                instanceId="subcategory"
                inputId="subcategory"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="99.00"
                value={product.price}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                name="count"
                placeholder="Quantity"
                value={product.count}
                onChange={handleChange}
              />
            </div>
            {/* <div className="form-group">
              <label>On Sale?</label>
              <Select
                onChange={handleOnSaleInput}
                categoryOptions={saleOptions}
                id="onSale"
                instanceId="onSale"
                inputId="onSale"
              />
            </div> */}

            {/* <div className="form-group">
              <label>Discount In Percent (1 or 1.5 ...)</label>
              <input
                type="text"
                className="form-control"
                name="onOffer"
                placeholder="3.5"
                value={product.onOffer}
                onChange={handleChange}
              />
            </div> */}

            <div className="modal-btn">
              <div
                className="btn admin-optional-btn float-left"
                onClick={toggleAddProduct}
              >
                Cancel
              </div>
              <Button
                type="submit"
                size="large"
                variant={loading ? "outlined" : "contained"}
                color="primary"
              >
                Create Product{" "}
                {loading && (
                  <CircularProgress
                    color="primary"
                    size={"1.2rem"}
                    style={{ marginLeft: "1rem" }}
                  />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductsModal;
