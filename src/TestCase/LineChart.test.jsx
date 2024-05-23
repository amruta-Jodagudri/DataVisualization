import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import LineChart from './LineChart';

jest.mock('react-chartjs-2', () => ({
    Line: () => <div>Mocked Line Chart</div>,
}));

describe('LineChart Component', () => {
    test('renders the Line Chart Visualization heading', () => {
        render(<LineChart />);
        const headingElement = screen.getByText(/Line Chart Visualization/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the mocked Line chart', () => {
        render(<LineChart />);
        const mockedLineChart = screen.getByText(/Mocked Line Chart/i);
        expect(mockedLineChart).toBeInTheDocument();
    });

    test('renders search input field', () => {
        render(<LineChart />);
        const searchInput = screen.getByPlaceholderText(/Search datasets.../i);
        expect(searchInput).toBeInTheDocument();
    });

    test('handles search input change', () => {
        render(<LineChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search datasets.../i);

        fireEvent.change(searchInput, { target: { value: 'Dataset 1' } });
        expect(searchInput.value).toBe('Dataset 1');
    });

    test('filters datasets based on search term', () => {
        render(<LineChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search datasets.../i);
        const searchButton = screen.getByText(/Search/i);

        fireEvent.change(searchInput, { target: { value: 'Dataset 1' } });
        fireEvent.click(searchButton);

        const filteredDatasetLabel = screen.queryByText(/Dataset 2/);
        expect(filteredDatasetLabel).not.toBeInTheDocument();
    });
});
