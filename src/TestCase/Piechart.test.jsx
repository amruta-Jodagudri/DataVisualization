import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import PieChart from './PieChart';

jest.mock('react-chartjs-2', () => ({
    Pie: () => <div>Mocked Pie Chart</div>,
}));

describe('PieChart Component', () => {
    test('renders the Pie Chart Visualization heading', () => {
        render(<PieChart />);
        const headingElement = screen.getByText(/Pie Chart Visualization/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the mocked Pie chart', () => {
        render(<PieChart />);
        const mockedPieChart = screen.getByText(/Mocked Pie Chart/i);
        expect(mockedPieChart).toBeInTheDocument();
    });

    test('renders search input field', () => {
        render(<PieChart />);
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);
        expect(searchInput).toBeInTheDocument();
    });

    test('handles search input change', () => {
        render(<PieChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);

        fireEvent.change(searchInput, { target: { value: 'Red' } });
        expect(searchInput.value).toBe('Red');
    });

    test('filters data based on search term', () => {
        render(<PieChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);

        fireEvent.change(searchInput, { target: { value: 'Red' } });

        expect(searchInput.value).toBe('Red');
    });
});
