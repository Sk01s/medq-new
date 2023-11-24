import firebaseInstance from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRef, useState } from "react";

function ImageUpload({ setImageUrl, imageUrl }) {
  const [message, setMessage] = useState();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageEl = useRef();
  const handleImageUpload = (image) => {
    if (image) {
      setLoading(true);

      firebaseInstance.storeImage(image, setImageUrl, setLoading, setMessage);
    }
  };
  const handleImageChange = (e) => {
    const file = imageEl.current.files[0];
    console.log(e.currentTarget, file);
    setImage(file);
    handleImageUpload(file);
  };

  return (
    <div className="form-group">
      <label>Upload your product image here</label>
      <div className="upload-img">
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            {imageUrl ? (
              <img src={imageUrl} />
            ) : (
              <span>
                <i className="bx bxs-image-add"></i>
                Click here or drop files to upload
              </span>
            )}
          </>
        )}
        <input
          ref={imageEl}
          type="file"
          className="form-control-file"
          style={{ width: "100%" }}
          name="media"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {message}
    </div>
  );
}

export default ImageUpload;
