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

// Mock useRouter hook globally
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
    entries: jest.fn(),
    has: jest.fn(),
    keys: jest.fn(),
    values: jest.fn(),
  }),
  usePathname: () => ({
    get: jest.fn(),
    entries: jest.fn(),
    has: jest.fn(),
    keys: jest.fn(),
    values: jest.fn(),
  }),
}))
