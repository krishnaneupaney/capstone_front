import React, { Component } from "react";
export class App extends Component {
  state = {
    product_image:
      "{/images}"
  };
  imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ product_image: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { product_image } = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={product_image} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              {/* <i className="material-icons">add_photo_alternate</i> */}
              Choose your Photo
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
