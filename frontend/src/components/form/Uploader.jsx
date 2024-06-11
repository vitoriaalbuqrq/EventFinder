import './Uploader.css'
import { MdCloudUpload } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa';

const Uploader = ({ file, onFileChange, onFileRemove }) => {
    return (
        <div className="file-upload-wrapper">
            <input
                type="file"
                id="file"
                className="file-input"
                onChange={onFileChange}
            />
            <label htmlFor="file" className="file-label">
                {!file && (
                    <>
                        <div className="upload-icon"></div>
                        <MdCloudUpload className='upload-icon' />
                    </>
                )}
            </label>
            {file && (
                <div className="file-info">
                    <div className="upload-preview">
                        <img src={URL.createObjectURL(file)} alt="Preview" />
                    </div>
                    <div className="file-details">
                        <span>{file.name}</span>
                        <button type="button" className="remove-button" onClick={onFileRemove}>
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Uploader