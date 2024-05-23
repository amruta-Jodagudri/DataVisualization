import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import BarChart from './BarChart';

jest.mock('react-chartjs-2', () => ({
    Bar: () => <div>Mocked Bar Chart</div>,
}));

describe('BarChart Component', () => {
    test('renders the Bar Chart Visualization heading', () => {
        render(<BarChart />);
        const headingElement = screen.getByText(/Bar Chart Visualization/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the mocked Bar chart', () => {
        render(<BarChart />);
        const mockedBarChart = screen.getByText(/Mocked Bar Chart/i);
        expect(mockedBarChart).toBeInTheDocument();
    });

    test('renders min and max value input fields', () => {
        render(<BarChart />);
        const minValueInput = screen.getByLabelText(/Min Value:/i);
        const maxValueInput = screen.getByLabelText(/Max Value:/i);

        expect(minValueInput).toBeInTheDocument();
        expect(maxValueInput).toBeInTheDocument();
    });

    test('handles filter button click', () => {
        render(<BarChart />);
        
        const minValueInput = screen.getByLabelText(/Min Value:/i);
        const maxValueInput = screen.getByLabelText(/Max Value:/i);
        const filterButton = screen.getByText(/Filter/i);

        fireEvent.change(minValueInput, { target: { value: '30' } });
        fireEvent.change(maxValueInput, { target: { value: '80' } });
        fireEvent.click(filterButton);

        expect(minValueInput.value).toBe('30');
        expect(maxValueInput.value).toBe('80');
    });
});
