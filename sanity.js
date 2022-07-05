import { createCurrentUserHook, createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-02-20',
    useCdn: process.env.NODE_ENV === 'production'
};

export const sanityClient = createClient(config);

// Set up the client for fetching data in the getProps page functions
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
