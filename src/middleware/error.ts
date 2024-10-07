import { NextFunction, Request, Response } from 'express';

export interface CustomError extends Error {
  statusCode: number;
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ message });
};

export default errorHandler;
