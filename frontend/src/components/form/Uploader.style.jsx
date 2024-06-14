import styled from 'styled-components';

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
`;

export const FileUploadWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 2rem;
    padding: 20px;
`;

export const FileInput = styled.input`
    display: none;
`;

export const FileLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const UploadIcon = styled.div`
    text-align: center;
    font-size: 70px;
    color: #b1b1b1;
`;

export const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const UploadPreview = styled.div`
    width: 100%;
    padding-bottom: 100%;
    position: relative;
`;

export const PreviewImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const FileDetails = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
    padding: 0 10px;
`;

export const FileName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 30px);
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #f44336;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;

    &:hover {
        color: #d32f2f;
    }
`;
