import React from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import {
    StyledLabel,
    FileUploadWrapper,
    FileInput,
    FileLabel,
    UploadIcon,
    FileInfo,
    UploadPreview,
    PreviewImage,
    FileDetails,
    FileName,
    RemoveButton
} from './Uploader.style';

const Uploader = ({ file, onFileChange, onFileRemove, name, text }) => {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile && selectedFile.type.startsWith('image/')) {
            onFileChange(selectedFile);
        } else {
            console.log('Por favor, selecione um arquivo de imagem.');
            event.target.value = null;
        }
    };

    return (
        <>
            <StyledLabel htmlFor={name}>{text}</StyledLabel>
            <FileUploadWrapper className="file-upload-wrapper">
                <FileInput
                    type="file"
                    id="file"
                    className="file-input"
                    onChange={handleFileChange}
                    accept="image/*"
                />
                <FileLabel htmlFor="file" className="file-label">
                    {!file && (
                        <>
                            <UploadIcon className="upload-icon">
                                <MdCloudUpload />
                            </UploadIcon>
                        </>
                    )}
                </FileLabel>
                {file && (
                    <FileInfo className="file-info">
                        <UploadPreview className="upload-preview">
                            <PreviewImage src={URL.createObjectURL(file)} alt="Preview" />
                        </UploadPreview>
                        <FileDetails className="file-details">
                            <FileName>{file.name}</FileName>
                            <RemoveButton type="button" className="remove-button" onClick={onFileRemove}>
                                <FaTrashAlt />
                            </RemoveButton>
                        </FileDetails>
                    </FileInfo>
                )}
            </FileUploadWrapper>
        </>
    );
}

export default Uploader;
