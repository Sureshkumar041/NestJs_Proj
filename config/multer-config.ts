import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

// Handle where attachment and what file name need to save
export const Storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '.uploads');
  },
  filename: (req, file, callback) => {
    const fileName = '';
    callback(null, file?.filename);
  },
});

// Validation for attachment type
export const FileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  const validMimeTypes = ['image/png', 'image/jpeg', 'application/pdf'];
  const fileMimeType = file?.mimetype;
  if (validMimeTypes.includes(fileMimeType)) {
    callback(null, true);
  } else {
    callback(new Error('Invalid attachment type'));
  }
};

// Validation for attachment size
export const AttachmentLimit = {
  fileSize: 1024 * 1024 * 5, // 5 mb
};
