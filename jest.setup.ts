import '@testing-library/jest-dom'

// Mock useQuery hook globally
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'), // retain the actual behavior for other hooks
  useQuery: jest.fn().mockReturnValue({
    data: null, // Default mock data, can be changed for each test if necessary
    isLoading: false,
    isError: false,
    error: null,
    refetch: jest.fn(),
  }),
}))
