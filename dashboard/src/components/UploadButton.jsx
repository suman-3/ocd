import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { uploadFile } from '../api';

export default function UploadButton({ onUploaded }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const handlePick = () => inputRef.current.click();

  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setBusy(true);
    try {
      const url = await uploadFile(file);
      onUploaded(url);
    } finally {
      setBusy(false);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input type="file" ref={inputRef} onChange={handleChange} style={{ display: 'none' }} />
      <Button variant="outlined" startIcon={<CloudUploadIcon />} onClick={handlePick} disabled={busy}>
        {busy ? 'Uploading...' : 'Upload'}
      </Button>
    </>
  );
}
