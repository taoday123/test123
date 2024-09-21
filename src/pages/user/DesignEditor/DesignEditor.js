import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './DesignEditor.scss';

const DesignEditor = () => {
  const [texts, setTexts] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [fontColor, setFontColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedElement && (e.key === 'Backspace' || e.key === 'Delete')) {
        removeElement(selectedElement);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedElement]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (!uploading) {
      setUploading(true);
      files.forEach(file => uploadImage(file));
    }
  };

  const handleClickUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!uploading) {
      setUploading(true);
      files.forEach(file => uploadImage(file));
    }
  };

  const uploadImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const existingImage = images.find(img => img.src === reader.result);
      if (!existingImage) {
        const newImage = {
          id: Date.now() + Math.random(),
          src: reader.result,
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          fileName: file.name
        };
        setImages(prevImages => [...prevImages, newImage]);
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const addText = () => {
    const newText = {
      id: Date.now(),
      content: 'New Text',
      x: 100,
      y: 100,
      width: 150,
      height: 50,
      color: fontColor,
      font: fontFamily
    };
    setTexts([...texts, newText]);
  };

  const handleTextChange = (id, newContent) => {
    setTexts(texts.map(text =>
      text.id === id ? { ...text, content: newContent } : text
    ));
  };

  const handleTextColorChange = (color) => {
    if (selectedElement) {
      setTexts(texts.map(text =>
        text.id === selectedElement ? { ...text, color } : text
      ));
      setFontColor(color);
    }
  };

  const handleFontChange = (font) => {
    if (selectedElement) {
      setTexts(texts.map(text =>
        text.id === selectedElement ? { ...text, font } : text
      ));
      setFontFamily(font);
    }
  };

  const handleDrag = (e, data, id) => {
    setTexts(texts.map(text =>
      text.id === id ? { ...text, x: data.x, y: data.y } : text
    ));
    setImages(images.map(image =>
      image.id === id ? { ...image, x: data.x, y: data.y } : image
    ));
  };

  const handleResize = (e, { size, handle }, id) => {
    setTexts(texts.map(text =>
      text.id === id ? { ...text, width: size.width, height: size.height } : text
    ));
    setImages(images.map(image =>
      image.id === id ? { ...image, width: size.width, height: size.height } : image
    ));
  };

  const removeElement = (id) => {
    setTexts(texts.filter(text => text.id !== id));
    setImages(images.filter(image => image.id !== id));
    setSelectedElement(null);
  };

  const handleTextClick = (id) => {
    setSelectedElement(id);
  };

  const handleImageClick = (id) => {
    setSelectedElement(id);
  };

  const handleZoomIn = () => {
    if (selectedElement) {
      setImages(images.map(image =>
        image.id === selectedElement ? {
          ...image,
          width: image.width * 1.894,
          height: image.height * 1.894
        } : image
      ));
    }
  };

  const handleZoomOut = () => {
    if (selectedElement) {
      setImages(images.map(image =>
        image.id === selectedElement ? {
          ...image,
          width: image.width / 1.894,
          height: image.height / 1.894
        } : image
      ));
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=800,width=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(document.querySelector('.printable').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="design-editor">
      <div className="controls">
        <button onClick={addText}>Add Text</button>
        <button onClick={handleZoomIn}>Phóng To</button>
        <button onClick={handleZoomOut}>Thu Nhỏ</button>
        <button onClick={handlePrint}>Print</button>
        <input 
          type="color" 
          value={fontColor} 
          onChange={(e) => handleTextColorChange(e.target.value)} 
          disabled={!selectedElement} 
        />
        <select 
          onChange={(e) => handleFontChange(e.target.value)} 
          value={fontFamily}
          disabled={!selectedElement}
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <button onClick={handleClickUpload}>Upload Image</button>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
      <div
        className="preview printable"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {images.map(img => (
          <Draggable key={img.id} defaultPosition={{ x: img.x, y: img.y }} onDrag={(e, data) => handleDrag(e, data, img.id)}>
            <ResizableBox
              width={img.width}
              height={img.height}
              minConstraints={[50, 50]}
              maxConstraints={[800, 800]}
              onResize={(e, data) => handleResize(e, data, img.id)}
            >
              <div className="draggable-image" onClick={() => handleImageClick(img.id)}>
                <img src={img.src} alt="Draggable" style={{ width: '100%', height: 'auto' }} />
                
              </div>
            </ResizableBox>
          </Draggable>
        ))}
        {texts.map(text => (
          <Draggable
            key={text.id}
            defaultPosition={{ x: text.x, y: text.y }}
            onDrag={(e, data) => handleDrag(e, data, text.id)}
          >
            <ResizableBox
              width={text.width}
              height={text.height}
              minConstraints={[50, 20]}
              maxConstraints={[800, 400]}
              onResize={(e, data) => handleResize(e, data, text.id)}
            >
              <div
                className="draggable-text"
                onClick={() => handleTextClick(text.id)}
                tabIndex="0"
                style={{ color: text.color, fontFamily: text.font }}
              >
                <textarea
                  value={text.content}
                  onChange={(e) => handleTextChange(text.id, e.target.value)}
                  onFocus={(e) => e.target.select()}
                  style={{ width: '100%', height: '100%', resize: 'none', border: 'none', background: 'transparent' }}
                />
                
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DesignEditor;
