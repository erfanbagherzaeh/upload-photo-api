import React, { useState } from 'react';
import './BoxRight.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Variants() {
  const [image, setImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <div className="VariantsRight">
      <form className="or-form">
        {image ? (
          <div
            className="image-preview"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={image} alt="preview" className="image-preview-img" />

            {/* بک گراند فیلتر کمرنگ مشکی و آیکن آپلود */}
            <div className="overlay">
              <CloudUploadIcon style={{ fontSize: '40px', color: 'white' }} />
            </div>

            {/* آیکن سطل زباله که در هنگام هاور نمایش داده می‌شود */}
            {isHovered && (
              <div className="delete-icon" onClick={handleImageDelete}>
                <DeleteIcon style={{ fontSize: '30px', color: 'red' }} />
              </div>
            )}
          </div>
        ) : (
          <div className="upload-container">
            <label htmlFor="image-upload" className="upload-label">
              <CloudUploadIcon style={{ fontSize: '80px', color: 'lightgray' }} />
              <span style={{ display: 'block', textAlign: 'center', color: 'lightgray' }}>بارگذاری تصویر</span>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-input"
              style={{ display: 'none' }}
            />
          </div>
        )}
      </form>
    </div>
  );
}
