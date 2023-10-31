import firebaseInstance from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRef, useState } from "react";

function ImageUpload({ setImageUrl }) {
  const [message, setMessage] = useState();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageEl = useRef();
  const handleImageUpload = () => {
    if (image) {
      setLoading(true);

      firebaseInstance.storeImage(image, setImageUrl, setLoading, setMessage);
    }
  };
  const handleImageChange = (e) => {
    const file = imageEl.current.files[0];
    setImage(file);
    handleImageUpload();
  };

  return (
    <div className="form-group">
      <label>Upload your product image here</label>
      <div className="upload-img">
        {loading ? (
          <div>Loading</div>
        ) : (
          <span>
            <i className="bx bxs-image-add"></i>
            Click here or drop files to upload
          </span>
        )}
        <input
          ref={imageEl}
          type="file"
          className="form-control-file"
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
