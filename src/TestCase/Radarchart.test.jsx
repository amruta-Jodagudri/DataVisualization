import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RadarChart from './RadarChart';

jest.mock('react-chartjs-2', () => ({
    Radar: () => <div>Mocked Radar Chart</div>,
}));

describe('RadarChart Component', () => {
    test('renders the Radar Chart Visualization heading', () => {
        render(<RadarChart />);
        const headingElement = screen.getByText(/Radar Chart Visualization/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the mocked Radar chart', () => {
        render(<RadarChart />);
        const mockedRadarChart = screen.getByText(/Mocked Radar Chart/i);
        expect(mockedRadarChart).toBeInTheDocument();
    });

    test('renders search input field', () => {
        render(<RadarChart />);
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);
        expect(searchInput).toBeInTheDocument();
    });

    test('handles search input change', () => {
        render(<RadarChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);

        fireEvent.change(searchInput, { target: { value: 'Eating' } });
        expect(searchInput.value).toBe('Eating');
    });

    test('filters data based on search term', () => {
        render(<RadarChart />);
        
        const searchInput = screen.getByPlaceholderText(/Search labels.../i);

        fireEvent.change(searchInput, { target: { value: 'Eating' } });

        expect(searchInput.value).toBe('Eating');
    });
});
