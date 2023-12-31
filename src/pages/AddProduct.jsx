import Layout from "../Layout/Layout";
import {
  TextInput,
  Button,
  Checkbox,
  Label,
  Dropdown,
  FloatingLabel,
} from "flowbite-react";

function AddProduct() {
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center w-full">
        <div className=" w-72 rounded-lg bg-light-pink flex items-center justify-center p-5 mb-20">
          <h1 className="font-Poppins font-medium text-2xl text-raspberry">
            Add A New Product
          </h1>
        </div>
        <form className="w-[40%] gap-5">
          <div className="mb-2">
            <Label htmlFor="Title" value="Product Title*" />
            <TextInput
              id="Title"
              type="Title"
              placeholder="Your product title here"
              required
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="SubTitle" value="Product SubTitle" />
            <TextInput
              id="SubTitle"
              type="SubTitle"
              placeholder="Your product title here"
            />
          </div>
          <Dropdown label="Product Type" dismissOnClick={false}>
            <Dropdown.Item>Phones</Dropdown.Item>
            <Dropdown.Item>Watches</Dropdown.Item>
            <Dropdown.Item>Tablets</Dropdown.Item>
            <Dropdown.Item>HeadPhones</Dropdown.Item>
          </Dropdown>
          <div className="flex items-center gap-2">
            <Checkbox id="Active" name="active"/>
            <Label htmlFor="Active">Activate</Label>
          </div>
          <Button type="submit">Add New Product</Button>
        </form>
      </div>
    </Layout>
  );
}

export default AddProduct;