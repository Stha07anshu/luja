import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters
import projectDescription from '../data/projectDescription'; 
import '../styles/ProjectDetail.css'; // Import the correct data

const ProductDetail = () => {
  const { id } = useParams(); // Extract project id from the URL
  const project = projectDescription.find((proj) => proj.id === parseInt(id)); // Find the corresponding project based on the id

  if (!project) {
    return <div>Project not found</div>; // Handle the case when the project is not found
  }

  // Check if images and descriptions are defined
  const images = project.images || [];
  const descriptions = project.descriptions || [];

  return (
    <div className="product-detail-page">
      <h2>{project.title}</h2>
      <p>{project.status}</p>
      
      {/* Display first image with the first description below it */}
      {images.length > 0 && (
        <div className="project-images">
          <img src={images[0]} alt={`${project.title} Image 1`} />
          {descriptions[0] && <p>{descriptions[0]}</p>} {/* First description below the first image */}
        </div>
      )}

      {/* Display alternating images and descriptions */}
      <div className="project-images">
        {images.slice(1).map((image, index) => (
          <React.Fragment key={index}>
            {/* Display an image */}
            <img src={image} alt={`${project.title} Image ${index + 2}`} />
            
            {/* Display description after the image */}
            {descriptions[index + 1] && <p>{descriptions[index + 1]}</p>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
