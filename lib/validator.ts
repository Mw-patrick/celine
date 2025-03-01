import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

// Helper function for price validation
const Price = (field: string) => {
    return z.coerce
        .number()
        .refine(
            (value) => /^\d+(\.\d{6})?$/.test(formatNumberWithDecimal(value)),
            `${field} must have exactly two decimal places (e.g., 10000.99)`
        );
};

// Product input schema
export const ProductInputSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(1, 'Category is required'),
    images: z.array(z.string()).min(1, 'Product must have at least one image'),
    brand: z.string().min(1, 'Brand is required'),
    description: z.string().min(1, 'Description is required'),
    isPublished: z.boolean(),
    price: Price('Price'),
    listPrice: Price('List price'),
    countInStock: z.coerce
        .number()
        .int()
        .nonnegative('Count in stock must be a non-negative integer'),
    tags: z.array(z.string()).default([]),
    sizes: z.array(z.string()).default([]),
    colors: z.array(z.string()).default([]),
    avgRating: z.coerce
        .number()
        .min(0, 'Average rating must be at least 0')
        .max(5, 'Average rating must be at most 5'),
    numReviews: z.coerce
        .number()
        .int()
        .nonnegative('Number of reviews must be a non-negative integer'),
    ratingDistribution: z
        .array(z.object({ rating: z.number(), count: z.number() }))
        .max(5, 'Rating distribution cannot have more than 5 entries'),
    reviews: z.array(z.string()).default([]),
    numSales: z.coerce
        .number()
        .int()
        .nonnegative('Number of sales must be a non-negative integer'),
});