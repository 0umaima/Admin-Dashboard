import Layout from "../Layout/Layout";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Textarea, Button, Select, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";


function AddProduct() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        reset({
          productTitle: "", 
          productRef: "",
          productPrice: "",
          productStatus: "",
          productDescription: "",
        });
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }

  
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Hide the toast after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast]);


  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center w-full relative">
        <div className="w-56 md:w-72 rounded-lg bg-light-pink flex items-center justify-center p-3 md:p-5 my-11 ">
          <h1 className="font-Poppins font-medium text-lg md:text-xl lg:text-2xl text-raspberry">
            Add A New Product
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-full font-DM text-gray-600 flex flex-col gap-5"
        >
          <div className="">
            <label htmlFor="productTitle">Product Title</label>
            <Controller
              control={control}
              name="productTitle"
              rules={{ required: true, maxLength: 20 }}
              render={({ field }) => (
                <TextInput
                  type="text"
                  id="productTitle"
                  ref={field.ref}
                  {...field}
                />
              )}
            />
            {errors.productTitle && errors.productTitle.type === "required" && (
              <span className="text-raspberry">This field is required</span>
            )}
            {errors.productTitle &&
              errors.productTitle.type === "maxLength" && (
                <span className="text-raspberry">
                  The title must not exceed 20 characters
                </span>
              )}
          </div>

          <div className="flowbite-form-group">
            <label htmlFor="productRef">Product Reference</label>
            <Controller
              control={control}
              name="productRef"
              rules={{ required: true, pattern: /^[A-Z]{2}-\d{4}$/ }}
              render={({ field }) => (
                <TextInput
                  id="productRef"
                  placeholder="XX-0000"
                  addon="#"
                  ref={field.ref}
                  {...field}
                />
              )}
            />
            {errors.productRef && errors.productRef.type === "required" && (
              <span className="text-raspberry">This field is required</span>
            )}
            {errors.productRef && errors.productRef.type === "pattern" && (
              <span className="text-raspberry">Invalid product reference</span>
            )}
          </div>

          <div className="flowbite-form-group">
            <label htmlFor="productPrice">Product Price</label>
            <Controller
              control={control}
              name="productPrice"
              rules={{ required: true, min: 10, max: 10000 }}
              render={({ field }) => (
                <TextInput
                  type="number"
                  id="productPrice"
                  addon="MAD"
                  ref={field.ref}
                  {...field}
                />
              )}
            />
            {errors.productPrice && errors.productPrice.type === "required" && (
              <span className="text-raspberry">This field is required</span>
            )}
            {errors.productPrice &&
              (errors.productPrice.type === "min" ||
                errors.productPrice.type === "max") && (
                <span className="text-raspberry">Invalid product price</span>
              )}
          </div>

          <div className="flowbite-form-group">
            <label htmlFor="productStatus">Set Product Status</label>
            <Controller
              control={control}
              name="productStatus"
              rules={{ required: true, maxLength: 20 }}
              render={({ field }) => (
                <Select id="productStatus" required {...field}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Select>
              )}
            />
            {errors.productStatus && (
              <span className=" text-raspberry">This field is required</span>
            )}
          </div>

          <div className="flowbite-form-group">
            <label htmlFor="productDescription">Product Description</label>
            <Controller
              control={control}
              name="productDescription"
              rules={{ required: true, minLength: 50 }}
              render={({ field }) => (
                <Textarea
                  id="productDescription"
                  placeholder="Describe this product..."
                  ref={field.ref}
                  {...field}
                />
              )}
            />
            {errors.productDescription &&
              errors.productDescription.type === "required" && (
                <span className="text-raspberry">This field is required</span>
              )}
            {errors.productDescription &&
              errors.productDescription.type === "minLength" && (
                <span className="text-raspberry">
                  Please provide at least 50 characters description
                </span>
              )}
          </div>

          <Button type="submit" className="mb-9">
            Add Product
          </Button>
        </form>
        {/* Show the toast if form is submitted and has no errors */}
        {showToast  && (
          <Toast className="absolute top-0 right-0">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Product Added successfully.
            </div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
    </Layout>
  );
}

export default AddProduct;
