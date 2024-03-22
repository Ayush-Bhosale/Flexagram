import * as z from 'zod';

export const MessageValidation = z.object({
  content: z.string().nonempty().min(3, { message: 'Minimum 3 characters.' }).max(500),
  accountId: z.string(),
  attachment: z.object({
    file: z.string(), // Assuming file is a string representing the file path or URL
    size: z.number().max(100 * 1024 * 1024), // Max size in bytes (100MB)
  }).optional(),
});

