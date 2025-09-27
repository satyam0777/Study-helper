// import rateLimit from 'express-rate-limit';

// export const generalLimiter = rateLimit({
//   windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS!) || 15 * 60 * 1000,
//   max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS!) || 100,
//   message: {
//     error: 'Too many requests from this IP, please try again later.'
//   },
//   standardHeaders: true,
//   legacyHeaders: false
// });

// export const aiLimiter = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   max: 10, // 10 requests per minute for AI endpoints
//   message: {
//     error: 'Too many AI requests, please wait before trying again.'
//   }
// });

// export const uploadLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // 5 uploads per 15 minutes
//   message: {
//     error: 'Too many upload requests, please try again later.'
//   }
// });


// // src/middleware/rateLimiter.ts
// import { Request, Response, NextFunction } from 'express';

// const MAX_REQUESTS = 5;
// const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// // Use a simple in-memory store. A Map is perfect for this.
// // Key: IP Address (string), Value: { count: number, startTime: number }
// const requestCounts = new Map<string, { count: number; startTime: number }>();

// export const simpleRateLimiter = (req: Request, res: Response, next: NextFunction) => {
//   const ip = req.ip; // Express provides the user's IP address

//   if (!ip) {
//     return res.status(400).json({ error: 'Could not identify IP address.' });
//   }

//   const record = requestCounts.get(ip);
//   const now = Date.now();

//   // If this is a new IP or the time window has reset
//   if (!record || now - record.startTime > WINDOW_MS) {
//     requestCounts.set(ip, { count: 1, startTime: now });
//     return next(); // Proceed to the next middleware/route handler
//   }

//   // If the user is over the limit
//   if (record.count >= MAX_REQUESTS) {
//     return res.status(429).json({ error: 'Too many requests. Please try again later.' });
//   }

//   // Increment the count for the existing record
//   record.count++;
//   requestCounts.set(ip, record);
  
//   next(); // Proceed to the next middleware/route handler
// };


import { Request, Response, NextFunction } from 'express';

const isDev = process.env.NODE_ENV !== 'production';

// much looser in development for testing
const MAX_REQUESTS = isDev ? 10000 : 100;  
const WINDOW_MS = isDev ? 60 * 1000 : 24 * 60 * 60 * 1000; 

const requestCounts = new Map<string, { count: number; startTime: number }>();

export const simpleRateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip;

  if (!ip) {
    return res.status(400).json({ error: 'Could not identify IP address.' });
  }

  const record = requestCounts.get(ip);
  const now = Date.now();

  if (!record || now - record.startTime > WINDOW_MS) {
    requestCounts.set(ip, { count: 1, startTime: now });
    return next();
  }

  if (record.count >= MAX_REQUESTS) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  record.count++;
  requestCounts.set(ip, record);
  next();
};
